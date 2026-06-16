"use client";

import { X } from "lucide-react";
import { FormEvent, useEffect, useId, useState } from "react";
import { inquiryTypes } from "@/data/inquiryTypes";

type EnquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

export function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setInquiry("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const docEl = document.documentElement;
    /** Width of the scrollbar that disappears with `overflow: hidden` — pad to avoid layout shift. */
    const gap = window.innerWidth - docEl.clientWidth;

    const prevBodyOverflow = body.style.overflow;
    const prevBodyPadding = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (gap > 0) {
      body.style.paddingRight = `${gap}px`;
    }

    const header = document.querySelector("header");
    let prevHeaderPadding = "";
    if (header instanceof HTMLElement && gap > 0) {
      prevHeaderPadding = header.style.paddingRight;
      header.style.paddingRight = `${gap}px`;
    }

    return () => {
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPadding;
      if (header instanceof HTMLElement) {
        header.style.paddingRight = prevHeaderPadding;
      }
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overscroll-contain p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        aria-label="Close enquiry form"
        onClick={onClose}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      />
      <div
        className="relative z-10 max-h-[90dvh] w-full max-w-md overflow-y-auto overscroll-contain rounded-xl border border-border bg-card p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id={titleId}
            className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            Enquire
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
        <p className="mt-2 text-sm text-muted">
          Share a few details and our team will get back to you.
        </p>
        <form onSubmit={onSubmit} className="mt-6 w-full space-y-3 sm:space-y-4">
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Name*"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-muted placeholder:text-muted/50"
          />
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email*"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-muted placeholder:text-muted/50"
          />
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-muted placeholder:text-muted/50"
          />
          <select
            name="inquiry"
            required
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            className={`w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-muted ${
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
            className="min-h-11 w-full rounded-lg bg-[var(--color-btn)] py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Submit
          </button>
          {submitted && (
            <p className="text-sm text-muted" role="status">
              Thank you — we&apos;ll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
