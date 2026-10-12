alter table public.comments
  drop constraint if exists comments_platform_check;

update public.comments
  set platform = 'youtube',
      body = regexp_replace(body, 'tiktok', 'youtube', 'gi'),
      author_handle = regexp_replace(author_handle, 'tiktok', 'youtube', 'gi')
  where platform = 'tiktok';

alter table public.comments
  add constraint comments_platform_check
  check (platform in ('instagram','youtube','facebook','x'));