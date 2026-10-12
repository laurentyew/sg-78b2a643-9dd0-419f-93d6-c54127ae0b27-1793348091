alter table public.comments
  drop constraint if exists comments_platform_check;

alter table public.comments
  add constraint comments_platform_check
  check (platform in ('instagram','youtube','facebook','x'));

update public.comments
  set platform = 'youtube',
      body = replace(body, 'tiktok-appeal', 'youtube-appeal'),
      author_handle = replace(author_handle, 'tiktok.support_verify', 'youtube.support_verify')
  where platform = 'tiktok';