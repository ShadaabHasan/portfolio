import admin from "firebase-admin";

// Connects to Firestore the first time it's called, then reuses the same connection
export function getDb() {
  if (!admin.apps.length) {
    const key = process.env.FIREBASE_ADMIN_KEY;

    if (!key) {
      throw new Error(
        "FIREBASE_ADMIN_KEY is missing. Add it to .env.local (on your Mac) or to Vercel's Environment Variables."
      );
    }

    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(key)),
    });
  }

  return admin.firestore();
}