import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
  try {
    await connectToDB();
    console.log("Connected to database")
    
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
    
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        message: "An error occurred while retrieving prompts.",
      }),
      { status: 500 }
    ); 
  }
};
