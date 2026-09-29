do $$ begin
  if not exists (select 1 from pg_type where typname = 'comment_type') then
    create type comment_type as enum ('spam','scam_dm','troll','complaint','sarcasm','question');
  end if;
  if not exists (select 1 from pg_type where typname = 'mod_action') then
    create type mod_action as enum ('keep','hide','reply','ban');
  end if;
end $$;

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  platform text not null check (platform in ('instagram','tiktok','facebook','x')),
  kind text not null check (kind in ('comment','dm')),
  type comment_type not null,
  author_handle text not null,
  body text not null,
  best_action mod_action not null,
  alt_action mod_action,
  reason text not null,
  is_trap boolean not null default false,
  difficulty smallint not null default 1 check (difficulty between 1 and 3),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (platform, author_handle, body)
);
create index if not exists comments_type_idx on public.comments (type) where active;

create table if not exists public.plays (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  round_ids uuid[] not null,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  score smallint,
  total_ms integer,
  rank_key text,
  utm jsonb,
  referrer text,
  ip_hash text
);
create index if not exists plays_session_id_idx on public.plays (session_id);

create table if not exists public.play_answers (
  play_id uuid references public.plays(id) on delete cascade,
  comment_id uuid references public.comments(id),
  action mod_action,
  ms integer not null,
  correct boolean not null,
  answered_at timestamptz not null default now(),
  primary key (play_id, comment_id)
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text,
  role text check (role in ('brand','agency','creator','other')),
  play_id uuid references public.plays(id),
  referral_code text not null unique,
  referred_by text,
  consent_at timestamptz not null,
  confirm_token text not null,
  confirmed_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists leads_referred_by_idx on public.leads (referred_by);

alter table public.comments enable row level security;
alter table public.plays enable row level security;
alter table public.play_answers enable row level security;
alter table public.leads enable row level security;

create or replace view public.stats_by_type as
select c.type,
       count(*) as answers,
       round(100.0 * avg((not a.correct)::int), 1) as pct_wrong
from public.play_answers a
join public.comments c on c.id = a.comment_id
group by c.type;