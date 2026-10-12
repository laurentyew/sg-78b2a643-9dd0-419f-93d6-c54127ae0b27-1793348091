alter table public.comments
  drop constraint if exists comments_platform_check;

update public.comments
  set platform = 'youtube',
      body = regexp_replace(body, 'tiktok', 'youtube', 'gi'),
      author_handle = regexp_replace(author_handle, 'tiktok', 'youtube', 'gi')
  where platform = 'tiktok';

update public.comments
  set platform = case type
    when 'spam' then 'facebook'
    when 'troll' then 'youtube'
    when 'complaint' then 'instagram'
    when 'sarcasm' then 'instagram'
    else 'youtube'
  end
  where platform = 'x';

alter table public.comments
  add constraint comments_platform_check
  check (platform in ('instagram','youtube','facebook'));