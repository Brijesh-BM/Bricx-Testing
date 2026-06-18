export function WhoWeAre() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-[60rem] min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0 lg:top-28">
            <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground sm:text-3xl md:text-[2.625rem] text-center">
              Independent Thinking
            </h2>
          </div>
          <div className="min-w-0 space-y-5 text-sm leading-[1.8] sm:space-y-6 font-light font-nunito">
            <p className="text-base font-normal">
              Bricx.ai is a boutique real estate advisory firm based in Bangalore, Bengaluru. We advise companies, founders, and investors on leasing, income investments, and land — without developer bias, without sales targets, and without transactional pressure.
            </p>
            <div className="mt-8 border-t border-border pt-6 flex items-start gap-4 text-left">
              <div className="h-11 w-11 shrink-0 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[#F9F6F0] font-serif font-bold text-lg">
                KS
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground font-serif">Krupesh Sanghani</h4>
                <p className="text-xs text-muted font-nunito mt-0.5 font-bold uppercase tracking-wider text-[var(--color-accent)]">Founder & Principal Advisor</p>
                <p className="text-xs text-muted font-nunito mt-1 leading-relaxed">
                  Over 4 years of transactional expertise in commercial investments, tenant representation, and joint development (JDA) land acquisition in Bangalore growth corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
