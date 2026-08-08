# N&H Academy — Scaffolded web app

This branch contains the scaffold for the N & H Arabic & Islamic Academy web application.

Run locally

1. Install dependencies

   npm install

2. Create a .env.local using .env.example and add your Firebase project values (if you want Auth/Firestore).

3. Run the dev server

   npm run dev

Notes
- No secrets or API keys are committed. Use your own Firebase project and add the config to .env.local.
- The language selector stores preference in localStorage (key: `nh_lang`).
- Admin contact (display only) defaults to NEXT_PUBLIC_ADMIN_CONTACT.
- This is the initial scaffold: routing, pages, i18n skeleton, and Firebase helper are included.
