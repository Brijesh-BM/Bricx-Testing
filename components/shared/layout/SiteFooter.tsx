import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-footer-bg)] py-16 pb-[max(4rem,env(safe-area-inset-bottom,0px))] md:py-20">
      <div className="mx-auto max-w-6xl min-w-0 px-4 text-center sm:px-6 lg:px-8">
        <div className="grid gap-8 text-lg font-nunito text-white/90 md:grid-cols-[1.5fr_1fr_1fr] md:items-start md:gap-10 md:text-left">
          <div className="flex justify-center md:justify-start">
            <p className="text-3xl font-bold tracking-normal text-white font-serif">
              BRICX.AI
            </p>
          </div>
          <p className="mx-auto inline-flex max-w-sm items-start gap-2 font-nunito font-semibold leading-relaxed text-white/80 md:mx-0 md:max-w-none">
            <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden strokeWidth={2.25} />
            <span>
              WeWork Galaxy,
              <br />
              43, Residency Rd, Ashok Nagar,
              <br />
              Bengaluru, Karnataka 560025
            </span>
          </p>
          <div className="space-y-0 font-nunito md:justify-self-end md:text-left">
            <p className="font-semibold">
              <a
                href="mailto:hello@bricx.ai"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden strokeWidth={2.25} />
                hello@bricx.ai
              </a>
            </p>
            <p className="font-semibold">
              <a
                href="tel:+919070504020"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden strokeWidth={2.25} />
                +91 90 70 50 40 20
              </a>
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-white/60 font-nunito">
          © {new Date().getFullYear()} Bricx.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
