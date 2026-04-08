# Setup

1. Create Supabase project
2. Run SQL:

create table seats (
  id int primary key,
  guest_name text
);

insert into seats (id, guest_name)
select generate_series(1, 41), '';

3. Add env vars:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

4. npm install
5. npm run dev

Deploy to Vercel.