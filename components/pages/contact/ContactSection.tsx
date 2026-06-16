"use client";

import { FormEvent, useState } from "react";
import { inquiryTypes } from "@/data/inquiryTypes";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(false);
    setErrorMessage("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      inquiry: String(formData.get("inquiry") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(data?.message ?? "Submission failed");
      }

      setSubmitted(true);
      setInquiry("");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit inquiry right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-28">
      <div className="mx-auto max-w-5xl-plus min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="min-w-0">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Start the Conversation
            </h2>
            <p className="mt-2 text-base leading-relaxed text-foreground sm:mt-4 font-nunito font-light">
              Connect with our principals for conflict-free commercial real estate advisory in Bengaluru. We provide expert counsel on occupier-focused office leasing, secure income investments, and strategic land acquisition in Karnataka&apos;s high-growth corridors.
            </p>
          </div>
        <form
          onSubmit={onSubmit}
          className="w-full space-y-3 sm:space-y-4"
        >
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Name*"
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground outline-none transition-colors focus:border-muted placeholder:text-muted/50"
          />
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email*"
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground outline-none transition-colors focus:border-muted placeholder:text-muted/50"
          />
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground outline-none transition-colors focus:border-muted placeholder:text-muted/50"
          />
          <select
            name="inquiry"
            required
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            className={`w-full rounded-lg border border-border bg-card px-3 py-2 text-xs outline-none transition-colors focus:border-muted ${
              inquiry === ""
                ? "text-muted/50 [&>option:not(:first-child)]:text-foreground"
                : "text-foreground"
            }`}
          >
            <option value="" disabled>
              Inquiry Type
            </option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className="min-h-11 w-full rounded-lg bg-[var(--color-footer-bg)] py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {errorMessage && (
            <p className="text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          )}
          {submitted && (
            <p className="text-sm text-muted" role="status">
              Thank you — we&apos;ll be in touch shortly.
            </p>
          )}
        </form>
        </div>
      </div>
    </section>
  );
}
