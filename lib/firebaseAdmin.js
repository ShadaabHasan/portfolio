import admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    if (!process.env.FIREBASE_ADMIN_KEY) {
      throw new Error("FIREBASE_ADMIN_KEY is missing in environment variables.");
    }

    const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log("Firebase Admin initialized successfully");
  } catch (error) {
    console.error("Firebase Admin initialization failed:", error);
  }
}
console.log("🔥 Firebase Admin Initialized:", admin.apps.length > 0);

const db = admin.firestore();
export { db };
