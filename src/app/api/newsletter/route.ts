import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const user = process.env.SMTP_USER || "beliptv.manager@gmail.com";
    const pass = process.env.SMTP_PASS;
    const isPlaceholder = !pass || pass.startsWith("your-") || pass === "replace-me";

    if (isPlaceholder) {
      console.warn("SMTP_PASS not configured — email not sent");
      return NextResponse.json({ success: true, notice: "dev mode" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"BELITVISION" <${user}>`,
      to: user,
      subject: "Nieuwe nieuwsbrief aanmelding - BELITVISION",
      html: `
        <h2>Nieuwe aanmelding nieuwsbrief</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Datum:</strong> ${new Date().toLocaleString("nl-BE")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Newsletter error:", e);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
