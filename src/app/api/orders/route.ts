import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    // In a real app, we would save this to the database.
    // For now, we'll just log it and return success.
    console.log('Order received:', body);

    return NextResponse.json({ success: true, orderId: Math.random().toString(36).substring(7) });
}
