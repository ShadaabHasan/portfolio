import { db } from "@/lib/firebaseAdmin";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    // Save message to Firestore
    await db.collection("messages").add({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    return new Response(JSON.stringify({ message: "Your message has been sent!" }), { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
}
