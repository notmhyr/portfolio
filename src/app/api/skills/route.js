import { NextResponse } from "next/server";
import { getAllSkills } from "../../../../utils/db";

export async function GET() {
  try {
    const skills = await getAllSkills();

    return NextResponse.json({ skills: skills }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
