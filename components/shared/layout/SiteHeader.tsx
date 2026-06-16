"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

const nav = [
  { id: "advisory",
    href: "/advisory",
    label: "Leasing"
  },
  {
    id: "investment-income",
    href: "/investment-opportunities",
    label: "Income",
  },
  {
    id: "investment-land",
    href: "/land-opportunities",
    label: "Land",
  },
  {
    id: "about",
    href: "/about",
    label: "About",
  },
  { id: "contact",
    href: "/contact-us",
    label: "Contact" 
  },
  // { id: "blog",
  //   href: "/blog",
  //   label: "Blog"
  // }
] as const;

const navLinkUnderline =
  "relative inline-block pb-0.5 transition-colors duration-200 hover:text-accent after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 motion-reduce:after:transition-none motion-reduce:hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

const ctaPhoneDisplay = "90 70 50 40 20";
const ctaPhoneHref = "tel:+919070504020";
const ctaPhoneCountryCode = "+91";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
        <header className="fixed top-0 z-[100] w-full bg-white/8 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl min-h-[4.5rem] items-center justify-between gap-3 px-4 sm:h-[5rem] sm:min-h-[5rem] sm:gap-5 sm:px-6 lg:px-8">
          <a
              href="/"
              className="shrink-0 text-2xl font-bold tracking-normal font-serif text-foreground transition-colors duration-200 hover:text-accent sm:text-3xl lg:text-5xl"
            onClick={() => setOpen(false)}
          >
            BRICX.AI
          </a>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-8">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 md:flex md:gap-6"
            >
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-lg font-medium font-nunito ${navLinkUnderline}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={ctaPhoneHref}
              className="hidden rounded-lg bg-[var(--color-footer-bg)] px-12 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
              aria-label={`Call ${ctaPhoneDisplay}`}
            >
              <Phone className="mr-2 h-3.5 w-3.5" aria-hidden strokeWidth={2} />
              <span>{`${ctaPhoneCountryCode} ${ctaPhoneDisplay}`}</span>
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border text-foreground md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X className="h-6 w-6" aria-hidden strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6" aria-hidden strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer: sits below fixed header (z-90 under z-100), full width from left */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[90] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        } top-[calc(env(safe-area-inset-top,0px)+4.5rem)] sm:top-[calc(env(safe-area-inset-top,0px)+5rem)]`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-background/70 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
          onClick={() => setOpen(false)}
        />
        <aside
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute inset-y-0 left-0 flex w-full max-w-none flex-col bg-background shadow-[4px_0_24px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav
            className="flex min-h-0 flex-1 flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-6"
            aria-label="Mobile primary"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`flex min-h-12 w-fit items-center py-3 text-base font-medium ${navLinkUnderline}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={ctaPhoneHref}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[var(--color-footer-bg)] px-14 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  onClick={() => setOpen(false)}
                  aria-label={`Call ${ctaPhoneDisplay}`}
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden strokeWidth={2} />
                  <span>{`${ctaPhoneCountryCode} ${ctaPhoneDisplay}`}</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
