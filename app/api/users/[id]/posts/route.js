import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, {params}) => {
  try {
    connectToDB();
    console.log(params.id)
    const prompts = await Prompt.find({creator: params.id}).populate("creator"); // fins post for a specific creator
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred while retrieving prompts.",
      }),
    };
  }
};
