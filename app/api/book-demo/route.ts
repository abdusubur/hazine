import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

export async function POST(req: NextRequest) {
  // 1. Rate Limit Check (Cookie-based for simplicity in Edge)
  const rateLimitCookie = req.cookies.get('demo-rate-limit');
  
  if (rateLimitCookie) {
    return NextResponse.json(
      { error: 'You have already requested a demo recently. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const { name, email, phone, company } = await req.json();

    // Validate inputs
    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Initialize Supabase Client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 3. Insert Data
    const { error } = await supabase.from('demo_requests').insert([
      { name, email, phone, company }
    ]);

    if (error) throw error;

    // 4. Success Response with Rate Limit Cookie (1 hour expiry)
    const response = NextResponse.json({ success: true }, { status: 200 });
    
    // Set cookie to block subsequent requests for 1 hour (3600 seconds)
    response.cookies.set('demo-rate-limit', 'true', {
      maxAge: 3600,
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return response;

  } catch (err: any) {
    console.error('Submission error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}