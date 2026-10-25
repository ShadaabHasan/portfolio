# Shadaab Hasan – Portfolio

My personal portfolio website, built with **Next.js** and deployed on **Vercel**.

🔗 **Live site:** [shadaabhasan.vercel.app](https://shadaabhasan.vercel.app)

## Features

- About, Projects and Contact pages
- All projects stored in one data file (`data/projects.js`), shown with a reusable card component
- Contact form with checks in the browser and on the server, saving messages to Firebase Firestore

## Tech stack

- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS, Framer Motion
- **Backend:** Next.js API route + Firebase Admin (Firestore)
- **Deployment:** Vercel

## Running it locally

1. Install the packages:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the main folder with your Firebase service account key: FIREBASE_ADMIN_KEY='{“type”:”service_account”, ...}'
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000).

## Contact

📧 [shadaabhasan7@gmail.com](mailto:shadaabhasan7@gmail.com) · 🔗 [LinkedIn](https://www.linkedin.com/in/shadaab-hasan-4a9b92271/)