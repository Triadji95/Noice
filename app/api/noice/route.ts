import { NextResponse } from 'next/server';
import { fetchNoiceData } from '@/lib/fetchNoice';

export async function GET() {
  const data = await fetchNoiceData();
  return NextResponse.json(data);
}
