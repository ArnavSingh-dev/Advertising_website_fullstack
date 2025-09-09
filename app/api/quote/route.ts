import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST /api/quote
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body ?? {};

    if (!name || !email || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const userAgent = req.headers.get("user-agent") ?? null;

    const quote = await prisma.quote.create({
      data: {
        name,
        email,
        service,
        message,
        userAgent,
      },
    });

    return NextResponse.json({ success: true, quote });
  } catch (err) {
    console.error("POST /api/quote error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Optional: GET /api/admin/quotes
export async function GET(req: Request) {
  const apiKey = req.headers.get("x-admin-key");
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const quotes = await prisma.quote.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ success: true, quotes });
  } catch (err) {
    console.error("GET /api/admin/quotes error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
