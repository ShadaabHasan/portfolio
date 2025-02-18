export async function POST(req) {
    try {
      const { name, email, message } = await req.json();
  
      if (!name || !email || !message) {
        return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
      }
  
      console.log("New Inquiry Received:", { name, email, message });
  
      return new Response(JSON.stringify({ message: "Your message has been sent!" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
  }
  