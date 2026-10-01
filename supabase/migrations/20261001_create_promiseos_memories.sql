-- Private PromiseOS memory store. RLS remains enabled; only the server-side
-- service role may access rows. Do not add anonymous/public policies.
create table if not exists public.memories (
  id text primary key,
  device_id text not null,
  device_secret text not null,
  type text not null check (type in ('COMMITMENT','GOAL','NOTE','IDEA','INSIGHT','FOCUS_SESSION','REFLECTION','COMPLETION','RISK')),
  title text not null,
  content text not null default '',
  source text not null default 'PromiseOS',
  importance text not null default 'medium',
  status text not null default 'saved',
  related_memory_ids jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists memories_private_device_idx on public.memories(device_id, updated_at desc);
alter table public.memories enable row level security;
