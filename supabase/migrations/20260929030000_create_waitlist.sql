create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  social_handle text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_email_unique_idx on public.waitlist (lower(email));

create index if not exists waitlist_created_at_idx on public.waitlist (created_at);

alter table public.waitlist enable row level security;

create or replace function public.waitlist_count()
returns bigint
language sql
security definer
set search_path = public
as $$
  select count(*)::bigint from public.waitlist;
$$;

create or replace function public.join_waitlist(p_name text, p_email text, p_handle text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_total bigint;
  v_existing_id uuid;
begin
  if p_name is null or length(trim(p_name)) < 2 then
    raise exception 'invalid_name';
  end if;

  if p_email is null or p_email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then
    raise exception 'invalid_email';
  end if;

  if p_handle is null or length(trim(both '@' from p_handle)) < 2 then
    raise exception 'invalid_handle';
  end if;

  select id into v_existing_id
  from public.waitlist
  where lower(email) = lower(trim(p_email))
  limit 1;

  select count(*) into v_total from public.waitlist;

  if v_existing_id is not null then
    return jsonb_build_object(
      'status', 'duplicate',
      'position', v_total,
      'remaining', greatest(0, 50 - v_total)
    );
  end if;

  insert into public.waitlist (name, email, social_handle)
  values (trim(p_name), lower(trim(p_email)), trim(both '@' from p_handle));

  select count(*) into v_total from public.waitlist;

  return jsonb_build_object(
    'status', 'joined',
    'position', v_total,
    'remaining', greatest(0, 50 - v_total)
  );
end;
$$;

grant execute on function public.waitlist_count() to anon, authenticated;
grant execute on function public.join_waitlist(text, text, text) to anon, authenticated;