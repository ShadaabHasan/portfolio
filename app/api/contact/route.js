import { getDb } from "@/lib/firebaseAdmin";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const body = await req.json();

    // Turn each value into text and remove extra spaces at the start and end
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Check 1: nothing is empty
    if (!name || !email || !message) {
      return Response.json({ message: "All fields are required." }, { status: 400 });
    }

    // Check 2: the email looks real
    if (!EMAIL_PATTERN.test(email)) {
      return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    // Check 3: nothing is too long (stops people filling your database with junk)
    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return Response.json({ message: "Your message is too long." }, { status: 400 });
    }

    await getDb().collection("messages").add({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    return Response.json({ message: "Your message has been sent!" });
  } catch (error) {
    // Log the problem for you, but don't show details to the visitor
    console.error("Contact form error:", error.message);
    return Response.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}