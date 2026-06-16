"use client";

export function AdvisoryListings() {
  return (
    <>
      {/* ── THE BRICX OCCUPIER MANDATE ── */}
      <section className="bg-[#0e182a] py-16 md:py-24 text-[#F9F6F0]">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Krupesh Quote & Positioning */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5B897] font-nunito">
                Independent Advocacy
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl text-[#F9F6F0]">
                The Occupier Mandate
              </h2>
              <blockquote className="mt-8 border-l-2 border-[#C5B897] pl-5 font-serif text-xl italic font-medium leading-relaxed text-[#F9F6F0]">
                &ldquo;Transactions may close in months. Trust compounds over years.&rdquo;
              </blockquote>
              <cite className="mt-4 block font-sans text-sm font-semibold not-italic text-[#C5B897]">
                — Krupesh Sanghani, Founder, Bricx.ai
              </cite>
            </div>
            {/* Right Column: Detail / Paragraphs */}
            <div className="flex flex-col gap-6 text-base font-light leading-relaxed text-[#F9F6F0]/85">
              <p>
                At Bricx.ai, independent thinking sits at the core of every client mandate. Our advisory practice is shaped by capital market discipline—evaluating real estate the way any serious asset class should be assessed: <strong className="font-semibold text-white">risk first, structure next, and returns after that.</strong>
              </p>
              <p>
                We are not a traditional broker or transactional listings platform. We act as high-trust, sharp, operator-minded advisors. We filter aggressively and focus on lock-ins, flexibility, and the fine print that shapes long-term operational success and capital efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REPRESENTATIVE ADVISORY MANDATE ── */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5B897] font-nunito">
              Advisory Methodology
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Representative Advisory Mandate
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              To demonstrate our tenant representation and structured evaluation process in action, below is an underwriting analysis of a representative 25,000 sq ft office space mandate in the HSR Layout micro-market.
            </p>
          </div>

          {/* Case Study Metric Cards Summary */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-md border border-border bg-background p-6 text-center shadow-xs">
              <div className="font-serif text-3xl font-bold text-foreground">25,000</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted font-nunito">
                Mandate Size (Sq Ft)
              </div>
            </div>
            <div className="rounded-md border border-border bg-background p-6 text-center shadow-xs">
              <div className="font-serif text-3xl font-bold text-foreground">4</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted font-nunito">
                Properties Assessed
              </div>
            </div>
            <div className="rounded-md border border-border bg-background p-6 text-center shadow-xs">
              <div className="font-serif text-3xl font-bold text-[#C5B897]">1</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted font-nunito">
                Recommended Option
              </div>
            </div>
          </div>

          {/* The Lease Comparison Table */}
          <div className="mt-12 overflow-x-auto rounded-lg border border-border bg-background">
            <table className="min-w-full divide-y divide-border text-left">
              <thead className="bg-[#0e182a] text-white">
                <tr>
                  <th className="px-6 py-4 font-serif text-sm font-semibold tracking-wide">Property Evaluated</th>
                  <th className="px-6 py-4 font-serif text-sm font-semibold tracking-wide">Total Area</th>
                  <th className="px-6 py-4 font-serif text-sm font-semibold tracking-wide">Rate / SQ FT</th>
                  <th className="px-6 py-4 font-serif text-sm font-semibold tracking-wide">Est. Monthly Outlay</th>
                  <th className="px-6 py-4 font-serif text-sm font-semibold tracking-wide">Readiness & Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <strong className="font-semibold text-foreground">Shree Towers</strong>
                    <div className="text-xs text-muted">Hosur Road / Silk Board</div>
                  </td>
                  <td className="px-6 py-4">
                    25,000 sq ft
                    <div className="text-xs font-semibold text-green-600">Exact match</div>
                  </td>
                  <td className="px-6 py-4 font-medium">₹70</td>
                  <td className="px-6 py-4 font-medium">₹17,50,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-block rounded-xs bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
                      IMMEDIATE
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <strong className="font-semibold text-foreground">New Building</strong>
                    <div className="text-xs text-muted">HSR Layout</div>
                  </td>
                  <td className="px-6 py-4">
                    18,000 sq ft
                    <div className="text-xs font-semibold text-red-600">28% below target</div>
                  </td>
                  <td className="px-6 py-4 font-medium">₹66</td>
                  <td className="px-6 py-4 font-medium">₹11,88,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-block rounded-xs bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-700">
                      CONDITIONAL
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <strong className="font-semibold text-foreground">Jupiter HQ</strong>
                    <div className="text-xs text-muted">HSR Layout</div>
                  </td>
                  <td className="px-6 py-4">
                    40,000 sq ft
                    <div className="text-xs font-semibold text-red-600">60% excess area</div>
                  </td>
                  <td className="px-6 py-4 font-medium">₹130</td>
                  <td className="px-6 py-4 font-medium">₹52,00,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-block rounded-xs bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">
                      MATERIAL INEFFICIENCY
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <strong className="font-semibold text-foreground">JS Towers</strong>
                    <div className="text-xs text-muted">HSR Layout</div>
                  </td>
                  <td className="px-6 py-4">
                    36,219 sq ft
                    <div className="text-xs font-semibold text-red-600">45% excess area</div>
                  </td>
                  <td className="px-6 py-4 font-medium">₹100</td>
                  <td className="px-6 py-4 font-medium">₹36,21,900</td>
                  <td className="px-6 py-4">
                    <span className="inline-block rounded-xs bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">
                      RATE-VALUE DISCONNECT
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs italic text-muted">
            * Est. Monthly Outlay = Total Area &times; Rate per square foot. Pricing and terms reflect the underwriting analysis from the representative mandate files.
          </p>
        </div>
      </section>

      {/* ── ADVISORY RECOMMENDATIONS & RATIONALE ── */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5B897] font-nunito">
              Strategic Positioning
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Underwriting & Recommendations
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              Bricx structures and filters space options to balance capital efficiency and physical requirements. Below is the decision architecture behind our HSR Layout mandate recommendations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Primary Recommendation Card */}
            <div className="flex flex-col justify-between rounded-md border border-border border-t-4 border-t-green-700 bg-card p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-xs bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-700">
                    Primary Recommendation
                  </span>
                  <span className="font-serif text-sm font-bold text-foreground">OPTIMAL FIT</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">Shree Towers</h3>
                <p className="text-xs text-muted mt-1">Hosur Road &middot; Silk Board Corridor</p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-baseline text-sm text-foreground">
                    <span className="mr-2.5 font-bold text-green-600">✔</span>
                    <span><strong>Configuration:</strong> Full building. Ground + 5 floors (5,000 sq ft per floor).</span>
                  </li>
                  <li className="flex items-baseline text-sm text-foreground">
                    <span className="mr-2.5 font-bold text-green-600">✔</span>
                    <span><strong>Capacity & Status:</strong> Grade A fitout, fully furnished, 402 workstations, 3 training rooms, dedicated cafeteria.</span>
                  </li>
                  <li className="flex items-baseline text-sm text-foreground">
                    <span className="mr-2.5 font-bold text-green-600">✔</span>
                    <span><strong>Infrastructure:</strong> 250 KVA power with 100% backup, 25 dedicated car parks.</span>
                  </li>
                  <li className="flex items-baseline text-sm text-foreground">
                    <span className="mr-2.5 font-bold text-green-600">✔</span>
                    <span><strong>Lease Structure:</strong> Security of 7 months, lock-in period of 3 years.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <h4 className="font-serif text-xs font-bold uppercase tracking-wide text-foreground">
                  Advisory Position
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Shree Towers represents the most defensible positioning. It achieves an exact spatial match at a competitive market rate of ₹70/sq ft. The institutional lease structure and immediate plug-and-play readiness support business continuity with zero upfront capex risk.
                </p>
              </div>
            </div>

            {/* Secondary Recommendation Card */}
            <div className="flex flex-col justify-between rounded-md border border-border border-t-4 border-t-orange-700 bg-card p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-xs bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">
                    Secondary Option
                  </span>
                  <span className="font-serif text-sm font-bold text-foreground">CONDITIONAL FIT</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">New Building</h3>
                <p className="text-xs text-muted mt-1">HSR Layout Micro-market</p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-baseline text-sm text-foreground">
                    <span className="mr-2.5 font-bold text-orange-600">⚠</span>
                    <span><strong>Configuration:</strong> 6 floors: Ground parking + 4 office floors + terrace.</span>
                  </li>
                  <li className="flex items-baseline text-sm text-foreground">
                    <span className="mr-2.5 font-bold text-orange-600">⚠</span>
                    <span><strong>Gap Analysis:</strong> 18,000 sq ft total area. Represents a 28% (7,000 sq ft) shortfall against the 25,000 sq ft mandate.</span>
                  </li>
                  <li className="flex items-baseline text-sm text-foreground">
                    <span className="mr-2.5 font-bold text-orange-600">⚠</span>
                    <span><strong>Infrastructure:</strong> 60 KW current load. Application submitted for 120 KW upgrade (timeline pending).</span>
                  </li>
                  <li className="flex items-baseline text-sm text-foreground">
                    <span className="mr-2.5 font-bold text-green-600">✔</span>
                    <span><strong>Commercials:</strong> Highly competitive rate of ₹66/sq ft; construction completed in 2025.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <h4 className="font-serif text-xs font-bold uppercase tracking-wide text-foreground">
                  Advisory Position
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Warrants secondary consideration if spatial flexibility permits an area reduction. While the rate advantage and asset age (new 2025 construction) are highly attractive, the pending power upgrade timeline introduces operational readiness risk that must be verified.
                </p>
              </div>
            </div>
          </div>

          {/* Comparative Dismissals / Non-recommended Options */}
          <div className="mt-8 rounded-md border border-border border-l-4 border-l-red-700 bg-card p-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Non-Recommended Analysis (Material Inefficiencies)
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              To ensure capital efficiency, Bricx advises against options that introduce unnecessary overhead or lock occupiers into suboptimal lease structures:
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h5 className="font-serif text-sm font-bold text-foreground">Jupiter HQ (HSR Layout)</h5>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Offered at a premium rate of ₹130/sq ft. Presents a 60% spatial excess (15,000 sq ft extra), driving the monthly outlay to 3&times; that of Shree Towers. Coupled with property maintenance concerns, it represents a severe capital inefficiency unless justified by immediate expansion.
                </p>
              </div>
              <div>
                <h5 className="font-serif text-sm font-bold text-foreground">JS Towers (HSR Layout)</h5>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Presents a rate-to-value disconnect at ₹100/sq ft. The building is 19+ years old (completed 2005) and is 45% oversized for the client requirement. Underwriting indicates inferior positioning and lack of justification for the premium pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
