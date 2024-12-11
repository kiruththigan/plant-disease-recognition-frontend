import axios from "axios";
import { NextResponse } from "next/server";

const OLLAMA_API_URL = "http://localhost:11434/api/chat";

export async function POST(req: Request) {
  const body = await req.json();
//   console.log("#########################1");
//   console.log(body);
//   console.log("#########################1");

  try {
    const response = await axios.post(OLLAMA_API_URL, body);
    console.log("#########################1");
    console.log(response);
    console.log("#########################1");
    

    // if (!response.ok) {
    //   throw new Error(
    //     `Ollama API request failed with status ${response.status}`
    //   );
    // }

    // const data = await response.data();
    // return NextResponse.json({ message: data.message.content });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from Ollama" },
      { status: 500 }
    );
  }
}
