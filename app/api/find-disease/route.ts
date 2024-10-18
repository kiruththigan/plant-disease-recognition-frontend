import axios from "axios";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.formData();
  const file = body.get("file") as File;

  const formData = new FormData();
  formData.append("file", file);

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/predict`;

  const header = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const response = await axios.post(url, formData, header);
    
    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.log("Error in updating wallet", error);
    return NextResponse.json({ success: false });
  }
}
