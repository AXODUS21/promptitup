import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
  try {
    await connectToDB();
    console.log("Fetching prompts from DB...");
    const prompts = await Prompt.find({}).populate("creator");
    console.log("Fetched prompts:", prompts); // Log the fetched prompts
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    console.error("Error fetching prompts:", e);
    return new Response(JSON.stringify({ message: "Error fetching prompts" }), {
      status: 500,
    });
  }
};
