import { NextResponse } from 'next/server';

// Endpoint /api/articles telah dihapus. Tidak ada GET/POST lagi.
export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json({ success: false, message: 'Articles API removed. Use local Markdown files in src/content/blog.' }, { status: 410 });
}

export async function POST() {
  return NextResponse.json({ success: false, message: 'Articles API removed. Use git workflow to add .md files.' }, { status: 410 });
}