import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Project from '@/models/Project';

export async function GET() {
  await dbConnect();

  try {
    const projects = await Project.find({});
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    // Log the error to the console for debugging
    console.error("API Error fetching projects:", error);
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}
