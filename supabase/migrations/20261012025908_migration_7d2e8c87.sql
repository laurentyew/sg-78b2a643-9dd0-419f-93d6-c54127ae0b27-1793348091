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
  drop constraint if exists comments_platform_check;

alter table public.comments
  add constraint comments_platform_check
  check (platform in ('instagram','youtube','facebook'));

select platform, count(*) as rounds
from public.comments
group by platform
order by platform;