export function WhoWeAre() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-[60rem] min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0 lg:top-28">
            <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground sm:text-3xl md:text-[2.625rem] text-center">
              Who we are!
            </h2>
          </div>
          <div className="min-w-0 space-y-5 text-sm leading-[1.8] sm:space-y-6 font-light font-nunito">
            <p>
              Independent thinking sits at the core of every mandate. The
              focus is not on pushing transactions, but on asking the right
              questions, examining the details carefully and recommending what
              truly aligns with long-term objectives. The perspective is shaped
              by capital market discipline. Real estate is evaluated the way
              any serious asset class should be assessed; risk first,
              structure next, returns after that. Strategic positioning goes
              beyond location. It considers how an asset performs within its
              market, how it competes over time and how relevant it remains
              in changing conditions.
            </p>
            <p>
              Above all, emphasis is placed on enduring relationships. The
              kind built on transparency, consistency and conviction.
              Conversations that continue years later because the foundation
              was structured correctly from the beginning.
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
