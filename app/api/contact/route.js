import { db } from "@/lib/firebaseAdmin";

export async function POST(req) {
  try {
    // Parse JSON data correctly
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    // Save message to Firestore
    const docRef = await db.collection("messages").add({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    return new Response(JSON.stringify({ message: "Your message has been sent!", id: docRef.id }), { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error);
    return new Response(JSON.stringify({ message: "Something went wrong!", error: error.message }), { status: 500 });
  }
}
