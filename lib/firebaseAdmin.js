import admin from "firebase-admin";

// Check if Firebase Admin is already initialized
if (!admin.apps.length) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("✅ Firebase Admin Initialized");
  } catch (error) {
    console.error("❌ Error initializing Firebase Admin:", error);
  }
}

const db = admin.firestore();
export { db };
