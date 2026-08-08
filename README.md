# N & H Arabic & Islamic Academy — Development scaffold

This repository contains an initial scaffold for the N&H Learning App.

Key points
- Tech: Next.js (App Router) + TypeScript + Tailwind + Prisma + simple JWT auth
- DB: SQLite for development (prisma/schema.prisma)
- Admin setup: Visit /setup to create initial admin account. The page will refuse to create an admin if one already exists.
- Do NOT commit secrets. Copy .env.example to .env and set JWT_SECRET and DATABASE_URL before running migrations.

Quick start
1. cp .env.example .env
2. npm install
3. npx prisma generate
4. npx prisma migrate dev --name init
5. npm run seed
6. npm run dev

Admin setup
- After migrations run the site and visit /setup to create the first admin (email prefilled as nharabicacademy@gmail.com).

Deployment
- Ready for Vercel; set DATABASE_URL and JWT_SECRET in environment.

