import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  inquiry?: string;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const inquiry = clean(body.inquiry);
    const nameSafe = escapeHtml(name);
    const emailSafe = escapeHtml(email);
    const phoneSafe = escapeHtml(phone || "Not provided");
    const inquirySafe = escapeHtml(inquiry);

    if (!name || !email || !inquiry) {
      return NextResponse.json(
        { message: "Name, email, and inquiry are required." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_RECEIVER_EMAIL;

    if (!resendApiKey || !from || !to) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const receivedAt = new Date().toISOString();
    const subject = `[Bricx.ai] ${inquiry} — ${name}`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text: [
        "Someone requested a follow-up from the Bricx.ai contact form (leasing, investment, and land advisory).",
        "",
        `Inquiry: ${inquiry}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        `Received: ${receivedAt} (UTC)`,
      ].join("\n"),
      html: `
        <p style="margin:0 0 16px 0">Someone requested a follow-up from the <strong>Bricx.ai</strong> contact form about leasing, investment, or land advisory.</p>
        <p style="margin:0 0 6px 0"><strong>Inquiry</strong> ${inquirySafe}</p>
        <p style="margin:0 0 6px 0"><strong>Name</strong> ${nameSafe}</p>
        <p style="margin:0 0 6px 0"><strong>Email</strong> <a href="mailto:${encodeURIComponent(email)}">${emailSafe}</a></p>
        <p style="margin:0 0 16px 0"><strong>Phone</strong> ${phoneSafe}</p>
        <p style="margin:0;font-size:13px;color:#666">Received ${escapeHtml(receivedAt)} (UTC) · <a href="https://bricx.ai">bricx.ai</a> contact form</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { message:"Unable to submit inquiry right now." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit inquiry right now.";
    return NextResponse.json(
      { message },
      { status: 500 },
    );
  }
}
