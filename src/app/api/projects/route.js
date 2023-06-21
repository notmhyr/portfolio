import { NextResponse } from "next/server";
import { getAllProjects } from "../../../../utils/db";

export async function GET() {
  try {
    const projects = await getAllProjects();

    return NextResponse.json({ projects: projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
