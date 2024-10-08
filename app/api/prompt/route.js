import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async () => {
    try{
        connectToDB();

        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), { status: 200})
    } catch(e){
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred while retrieving prompts." })
        }
    }

}