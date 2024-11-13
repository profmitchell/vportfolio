import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()
  
  // Log download data (replace with your database logic)
  console.log('Download tracked:', data)
  
  return NextResponse.json({ success: true })
}