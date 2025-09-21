    import { NextResponse } from 'next/server';
    import dbConnect from '@/lib/dbConnect';
    import Project from '@/models/Project';

    export async function GET() {
      try {
        await dbConnect();

        const projects = await Project.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: projects });
      } catch (error) {
        return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
      }
    }