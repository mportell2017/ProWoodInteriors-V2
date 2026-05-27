import { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { PrintButton } from './PrintButton';

export const metadata: Metadata = {
  title: 'Internal Strategy Dashboard · ProWood Interiors',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

// ──────────────────────────────────────────────────────────────────
// Strategy data — all numbers, keywords, and runbook content lifted
// from the actual research and marketing/*.md runbooks so the page is
// the single visual source of truth.
// ──────────────────────────────────────────────────────────────────

const headlineStats = [
  { value: '$500–$1,000', label: 'Monthly Budget', sublabel: 'All channels combined' },
  { value: '4–6', label: 'Closed Projects', sublabel: 'Per month target' },
  { value: '$25K', label: 'Avg. Project', sublabel: '$10K–$40K range' },
  { value: '3–6 mo', label: 'To Full ROI', sublabel: 'Steady-state revenue' },
];

const channels = [
  {
    name: 'SEO',
    cost: '$0 cash',
    timeInvest: '4–6 hrs/week',
    ramp: '3–6 months',
    leadVolume: '5–15/mo',
    color: 'parchment',
    note: 'Refacing pillar + cost guide + city pages. Biggest long-term lever.',
  },
  {
    name: 'Google Business Profile',
    cost: '$0',
    timeInvest: '2 hrs/week',
    ramp: '2–4 months',
    leadVolume: '8–20/mo',
    color: 'parchment',
    note: 'Map Pack ranking. Free leads forever once you’re in the 3-pack.',
  },
  {
    name: 'Local Service Ads',
    cost: '$200–$400/mo',
    timeInvest: '30 min/week',
    ramp: '4–6 weeks',
    leadVolume: '10–18/mo',
    color: 'parchment',
    note: 'Pay-per-lead, Google-Guaranteed badge. Above PPC in SERP.',
  },
  {
    name: 'Google Ads (PPC)',
    cost: '$400–$500/mo',
    timeInvest: '1 hr/week',
    ramp: 'Same day',
    leadVolume: '6–12/mo',
    color: 'parchment',
    note: 'Refacing-only. Tight geo, manual CPC, aggressive negatives.',
  },
];

// Tier 1: PPC + SEO launch keywords (best CPC + intent fit)
const tier1Keywords = [
  { kw: 'cabinet refacing', vol: 12100, cpc: 4.88, intent: 'phrase' },
  { kw: 'cabinet refinishing near me', vol: 9900, cpc: 8.21, intent: 'phrase' },
  { kw: 'cabinet refacing near me', vol: 6600, cpc: 7.89, intent: 'phrase' },
  { kw: 'kitchen cabinet refacing', vol: 5400, cpc: 5.85, intent: 'phrase' },
  { kw: 'refacing kitchen cabinets', vol: 3600, cpc: 3.93, intent: 'phrase' },
  { kw: 'cabinet refacing cost', vol: 2400, cpc: 3.16, intent: 'exact' },
  { kw: 'kitchen cabinet refacing cost', vol: 1900, cpc: 3.7, intent: 'exact' },
  { kw: 'reface cabinets', vol: 1600, cpc: 4.88, intent: 'phrase' },
  { kw: 'kitchen cabinet resurfacing', vol: 880, cpc: 5.85, intent: 'exact' },
];

const tier2Keywords = [
  { kw: 'cabinet refacing companies near me', vol: 210, cpc: 8.68 },
  { kw: 'cabinet refinishing st louis', vol: 90, cpc: 10.65 },
  { kw: 'cabinet refacing st louis', vol: 30, cpc: 9.67 },
  { kw: 'cabinet refacing st charles mo', vol: 20, cpc: 0 },
];

const avoidedKeywords = [
  { kw: 'cabinet refacing company', vol: 260, cpc: 11.9, why: 'Too expensive for budget' },
  { kw: 'kitchen cabinet remodeling near me', vol: 320, cpc: 12.92, why: 'Too expensive' },
  { kw: 'cabinet painting st louis', vol: 90, cpc: 11.86, why: 'High CPC, wrong service fit' },
  { kw: 'kitchen and bath remodeling near me', vol: 1300, cpc: 13.66, why: 'Too broad' },
];

const maxVol = Math.max(...tier1Keywords.map((k) => k.vol));

const competitors = [
  {
    name: 'Fresh Faced Cabinets',
    domain: 'freshfacedcabinets.com',
    traffic: 2140,
    ppc: false,
    threat: 'high',
    note: 'Multi-market refacer. One cost-guide page does 92% of their traffic. The blueprint to copy.',
  },
  {
    name: 'Classic Kitchen Refacing',
    domain: 'classickitchenrefacing.com',
    traffic: 82,
    ppc: false,
    threat: 'medium',
    note: 'St. Louis-focused. Good topic clusters, weak content depth, outdated WordPress site.',
  },
  {
    name: 'MidAmerica Refacing',
    domain: 'midamericarefacing.com',
    traffic: 8,
    ppc: false,
    threat: 'low',
    note: 'Brochure site. Ranks via exact-match domain but pulls almost no traffic.',
  },
  {
    name: 'ProWood Interiors (today)',
    domain: 'prowoodinteriors.com',
    traffic: 0,
    ppc: false,
    threat: 'self',
    note: '63 keywords ranking but all below page 1. 6-month target: ~150 visits/mo + Map Pack.',
  },
];

const maxTraffic = Math.max(...competitors.map((c) => c.traffic));

const funnelStages = [
  { label: '150 clicks/mo', sub: 'PPC + organic combined', width: 100 },
  { label: '15 leads', sub: '≈10% conversion on landing pages', width: 60 },
  { label: '6 consultations', sub: '≈40% lead-to-consult', width: 35 },
  { label: '3 closed projects', sub: '≈50% close rate on consults', width: 18 },
  { label: '$75K revenue', sub: '@ $25K avg project value', width: 10 },
];

const pagesBuilt = [
  { url: '/services/cabinet-refacing', label: 'Cabinet Refacing pillar page', status: 'Rebuilt' },
  { url: '/services/kitchen-remodeling', label: 'Kitchen Remodeling page', status: 'Expanded' },
  { url: '/locations/clayton/cabinet-refacing', label: 'Cabinet Refacing in Clayton', status: 'New' },
  { url: '/locations/clayton/kitchen-remodeling', label: 'Kitchen Remodeling in Clayton', status: 'New' },
  { url: '/locations/chesterfield/cabinet-refacing', label: 'Cabinet Refacing in Chesterfield', status: 'Existing' },
  { url: '/locations/chesterfield/kitchen-remodeling', label: 'Kitchen Remodeling in Chesterfield', status: 'Existing' },
  { url: '/locations/wildwood/cabinet-refacing', label: 'Cabinet Refacing in Wildwood', status: 'Existing' },
  { url: '/locations/wildwood/kitchen-remodeling', label: 'Kitchen Remodeling in Wildwood', status: 'Existing' },
];

// ──────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────

export default function InternalStrategyPage() {
  return (
    <>
      {/* Internal banner */}
      <div className="bg-walnut text-parchment py-2 text-center text-sm font-sans tracking-widest uppercase print:hidden">
        Internal Strategy · Not for Public Distribution
      </div>

      {/* Hero */}
      <Section className="pt-16 pb-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brass uppercase tracking-widest text-sm font-sans mb-4">
              ProWood Interiors · 2026 Marketing Plan
            </p>
            <Heading accent="italic" as="h1">
              SEO &amp; PPC Strategy
            </Heading>
            <p className="mt-6 text-xl text-ink/70 leading-relaxed font-elegant max-w-2xl mx-auto">
              Cabinet refacing and kitchen remodeling lead generation for Clayton, Chesterfield,
              and Wildwood — at a $500–$1,000/month budget that fits a two-person shop.
            </p>
            <p className="mt-6 text-sm text-ink/50 font-sans">Last updated: May 27, 2026</p>
          </div>
        </Container>
      </Section>

      {/* Headline stats */}
      <Section className="py-8">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {headlineStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-parchment border border-brass/30 rounded-sm p-6 text-center"
              >
                <p className="font-elegant text-3xl md:text-4xl text-ink font-semibold">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-brass mt-2 font-sans">
                  {stat.label}
                </p>
                <p className="text-sm text-ink/60 mt-1 font-sans">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Strategy in one paragraph */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" eyebrow="The Big Picture">
              The Strategy in One Paragraph
            </Heading>
            <div className="mt-8 bg-parchment border-l-4 border-brass p-8 rounded-sm">
              <p className="text-lg text-ink/80 leading-relaxed font-sans">
                ProWood&apos;s edge is being a real local craftsman in a market dominated by
                franchises and remote-managed specialists. We&apos;re going to win locally by
                building the deepest, most useful refacing content in St. Louis — a real pillar
                page, a definitive cost guide, and city-specific pages for Clayton, Chesterfield,
                and Wildwood — then layering Google Business Profile, Local Service Ads, and
                tight geo-targeted PPC on top. None of the refacing specialists in St. Louis are
                running Google Ads, so the paid channel is genuinely uncontested. Total cash
                investment stays inside the $1,000/month budget; the biggest cost is the time to
                write content and collect reviews. Expected payback: 1 closed $25K project per
                month covers everything.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Channel Mix */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="Where the Money Goes">
                The Four-Channel Mix
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Each channel does something different. SEO + GBP do the heavy lifting long-term;
                LSA + PPC bring the fast leads while SEO ramps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel) => (
                <div
                  key={channel.name}
                  className="bg-white rounded-sm shadow-sm p-6 flex flex-col"
                >
                  <h3 className="font-elegant text-2xl text-ink mb-4 pb-3 border-b border-brass/30">
                    {channel.name}
                  </h3>
                  <dl className="space-y-3 mb-4 flex-1">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-brass font-sans">
                        Cost
                      </dt>
                      <dd className="text-base text-ink font-sans">{channel.cost}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-brass font-sans">
                        Time
                      </dt>
                      <dd className="text-base text-ink font-sans">{channel.timeInvest}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-brass font-sans">
                        Ramp-Up
                      </dt>
                      <dd className="text-base text-ink font-sans">{channel.ramp}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-brass font-sans">
                        Lead Volume
                      </dt>
                      <dd className="text-base text-ink font-sans">{channel.leadVolume}</dd>
                    </div>
                  </dl>
                  <p className="text-sm text-ink/70 leading-relaxed pt-3 border-t border-ink/10">
                    {channel.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Keyword Targets */}
      <Section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="The Research">
                Keyword Targets
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Filtered for local intent, reasonable CPC, and project-size fit. Volumes from
                Semrush US database.
              </p>
            </div>

            {/* Tier 1 */}
            <div className="mb-12">
              <div className="flex items-baseline gap-4 mb-6">
                <h3 className="font-elegant text-2xl text-ink">Tier 1 — Launch Immediately</h3>
                <span className="text-sm text-brass uppercase tracking-widest font-sans">
                  PPC + SEO
                </span>
              </div>
              <div className="space-y-2">
                {tier1Keywords.map((k) => (
                  <div key={k.kw} className="flex items-center gap-4">
                    <div className="w-64 md:w-80 flex-shrink-0">
                      <p className="text-base font-sans text-ink">{k.kw}</p>
                    </div>
                    <div className="flex-1 bg-parchment rounded-sm h-8 relative overflow-hidden">
                      <div
                        className="bg-brass h-full rounded-sm transition-all"
                        style={{ width: `${(k.vol / maxVol) * 100}%` }}
                      />
                    </div>
                    <div className="w-36 md:w-44 text-right flex-shrink-0">
                      <p className="text-sm font-sans text-ink">
                        {k.vol.toLocaleString()}/mo · ${k.cpc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 2 */}
            <div className="mb-12">
              <div className="flex items-baseline gap-4 mb-6">
                <h3 className="font-elegant text-2xl text-ink">Tier 2 — Add at $1K Budget</h3>
                <span className="text-sm text-brass uppercase tracking-widest font-sans">
                  Higher CPC, Pure Intent
                </span>
              </div>
              <div className="space-y-2">
                {tier2Keywords.map((k) => (
                  <div key={k.kw} className="flex items-center gap-4">
                    <div className="w-64 md:w-80 flex-shrink-0">
                      <p className="text-base font-sans text-ink">{k.kw}</p>
                    </div>
                    <div className="flex-1 bg-parchment rounded-sm h-8 relative overflow-hidden">
                      <div
                        className="bg-umber h-full rounded-sm"
                        style={{ width: `${Math.max((k.vol / 210) * 100, 5)}%` }}
                      />
                    </div>
                    <div className="w-36 md:w-44 text-right flex-shrink-0">
                      <p className="text-sm font-sans text-ink">
                        {k.vol}/mo · ${k.cpc || '—'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avoided */}
            <div>
              <div className="flex items-baseline gap-4 mb-6">
                <h3 className="font-elegant text-2xl text-ink">
                  Avoided — Save for SEO Only
                </h3>
                <span className="text-sm text-oxblood uppercase tracking-widest font-sans">
                  Too Expensive to Bid
                </span>
              </div>
              <div className="bg-parchment rounded-sm p-6 border border-oxblood/20">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs uppercase tracking-widest text-ink/50 font-sans border-b border-ink/10">
                      <th className="pb-2">Keyword</th>
                      <th className="pb-2 text-right">Volume</th>
                      <th className="pb-2 text-right">CPC</th>
                      <th className="pb-2 text-right">Why Skip</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10">
                    {avoidedKeywords.map((k) => (
                      <tr key={k.kw}>
                        <td className="py-3 font-sans text-ink">{k.kw}</td>
                        <td className="py-3 text-right font-sans text-ink/70">{k.vol}</td>
                        <td className="py-3 text-right font-sans text-ink/70">${k.cpc}</td>
                        <td className="py-3 text-right font-sans text-ink/60 text-sm italic">
                          {k.why}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Kitchen — secondary SEO cluster */}
            <div className="mt-12">
              <div className="flex items-baseline gap-4 mb-6">
                <h3 className="font-elegant text-2xl text-ink">
                  Kitchen Remodeling — Secondary Cluster
                </h3>
                <span className="text-sm text-brass uppercase tracking-widest font-sans">
                  Organic / SEO Only
                </span>
              </div>
              <div className="bg-parchment border-l-4 border-brass p-6 rounded-sm">
                <p className="text-base text-ink/80 leading-relaxed mb-4">
                  Refacing stays the primary head term and the only PPC play. Kitchen
                  remodeling is a <strong>secondary, organic-only</strong> push: the volume
                  is large but the CPCs ($7.71–$11.36) blow the budget, so we pursue it through
                  the renamed{' '}
                  <code className="bg-white px-2 py-1 rounded text-sm">
                    /services/kitchen-remodeling
                  </code>{' '}
                  hub page and the city{' '}
                  <code className="bg-white px-2 py-1 rounded text-sm">
                    /locations/[city]/kitchen-remodeling
                  </code>{' '}
                  pages — never paid search.
                </p>
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs uppercase tracking-widest text-ink/50 font-sans border-b border-ink/10">
                      <th className="pb-2">Keyword</th>
                      <th className="pb-2 text-right">Volume</th>
                      <th className="pb-2 text-right">CPC</th>
                      <th className="pb-2 text-right">Channel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10">
                    {[
                      { kw: 'kitchen remodel', vol: '49,500', cpc: '7.71', ch: 'SEO' },
                      { kw: 'kitchen remodeling', vol: '33,100', cpc: '7.71', ch: 'SEO' },
                      { kw: 'kitchen remodeling near me', vol: '18,100', cpc: '11.36', ch: 'SEO' },
                      { kw: 'custom kitchen cabinets', vol: '8,100', cpc: '4.33', ch: 'SEO' },
                      { kw: 'kitchen cabinetry', vol: '3,600', cpc: '0', ch: 'SEO' },
                    ].map((k) => (
                      <tr key={k.kw}>
                        <td className="py-3 font-sans text-ink">{k.kw}</td>
                        <td className="py-3 text-right font-sans text-ink/70">{k.vol}</td>
                        <td className="py-3 text-right font-sans text-ink/70">${k.cpc}</td>
                        <td className="py-3 text-right font-sans text-brass text-sm uppercase tracking-wider">
                          {k.ch}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Area */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="The Geography">
                Service Area
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Tight geo-targeting on the three primary cities. PPC + LSA only run in these
                areas plus their affluent neighbors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  city: 'Clayton',
                  zip: '63105, 63124, 63130',
                  why: 'Affluent core. Tudor, Colonial, mid-century homes — high refacing demand.',
                },
                {
                  city: 'Chesterfield',
                  zip: '63005, 63017',
                  why: 'Family homes with substantial kitchens. Mix of refacing and full remodels.',
                },
                {
                  city: 'Wildwood',
                  zip: '63038, 63040',
                  why: 'Wooded lots, established kitchens from 90s/00s. Strong refacing fit.',
                },
              ].map((c) => (
                <div
                  key={c.city}
                  className="bg-white p-8 rounded-sm shadow-sm text-center border-2 border-brass/40"
                >
                  <p className="font-elegant text-3xl text-ink mb-2">{c.city}</p>
                  <p className="text-xs uppercase tracking-widest text-brass font-sans mb-4">
                    {c.zip}
                  </p>
                  <p className="text-sm text-ink/70 leading-relaxed">{c.why}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-sm border border-ink/10">
              <p className="font-sans text-sm text-ink/60 uppercase tracking-widest mb-3">
                Bid Adjustment +20% in Affluent Neighbors
              </p>
              <p className="text-base text-ink/80 leading-relaxed">
                Ladue (63124), Frontenac (63131), Town &amp; Country (63017, 63131), Webster
                Groves (63119), Kirkwood (63122), Des Peres (63131)
              </p>
              <p className="font-sans text-sm text-oxblood uppercase tracking-widest mt-6 mb-3">
                Explicitly Excluded
              </p>
              <p className="text-base text-ink/80 leading-relaxed">
                St. Louis City south side · Florissant · Hazelwood · Most of St. Charles County
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Competition */}
      <Section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="The Landscape">
                The Competition
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-3xl mx-auto">
                Three refacing specialists in the St. Louis SERP. Critically:{' '}
                <strong>none of them run Google Ads.</strong> The paid channel is uncontested.
              </p>
            </div>

            <div className="space-y-4">
              {competitors.map((c) => {
                const threatColors: Record<string, string> = {
                  high: 'bg-oxblood',
                  medium: 'bg-brass',
                  low: 'bg-umber/40',
                  self: 'bg-walnut',
                };
                const threatLabels: Record<string, string> = {
                  high: 'High Threat',
                  medium: 'Moderate',
                  low: 'Low Threat',
                  self: 'You',
                };
                return (
                  <div
                    key={c.domain}
                    className={`bg-parchment rounded-sm overflow-hidden border ${
                      c.threat === 'self' ? 'border-walnut/30' : 'border-ink/10'
                    }`}
                  >
                    <div className="flex">
                      <div className={`w-2 ${threatColors[c.threat]}`} />
                      <div className="flex-1 p-6">
                        <div className="flex flex-wrap items-baseline gap-3 mb-3">
                          <h3 className="font-elegant text-2xl text-ink">{c.name}</h3>
                          <span className="text-sm text-ink/50 font-sans">{c.domain}</span>
                          <span
                            className={`text-xs uppercase tracking-widest font-sans px-2 py-1 rounded-sm ${
                              c.threat === 'high'
                                ? 'bg-oxblood/10 text-oxblood'
                                : c.threat === 'medium'
                                  ? 'bg-brass/20 text-brass'
                                  : c.threat === 'self'
                                    ? 'bg-walnut/10 text-walnut'
                                    : 'bg-umber/10 text-umber'
                            }`}
                          >
                            {threatLabels[c.threat]}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex-1 bg-white rounded-sm h-6 relative overflow-hidden border border-ink/5">
                            <div
                              className={`h-full ${
                                c.threat === 'self' ? 'bg-walnut' : 'bg-ink/30'
                              }`}
                              style={{
                                width: `${Math.max((c.traffic / maxTraffic) * 100, 1)}%`,
                              }}
                            />
                          </div>
                          <p className="text-sm font-sans text-ink/70 w-48 text-right">
                            {c.traffic.toLocaleString()} organic visits/mo
                          </p>
                        </div>
                        <p className="text-sm text-ink/70 leading-relaxed">
                          {c.note}{' '}
                          <span className="ml-2 inline-block">
                            {c.ppc ? (
                              <span className="text-oxblood">⚠ Running PPC</span>
                            ) : (
                              <span className="text-brass">✓ No PPC</span>
                            )}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 bg-parchment border-l-4 border-brass p-6 rounded-sm">
              <p className="font-sans text-xs uppercase tracking-widest text-brass mb-2">
                The Insight
              </p>
              <p className="text-base text-ink/80 leading-relaxed">
                Fresh Faced Cabinets does 92% of their traffic from{' '}
                <em>one cost-guide page</em> — a play we&apos;ve chosen not to follow, since
                we no longer showcase pricing. Classic Kitchen Refacing is St. Louis-based but
                pulls only 82 visits/month — beatable in 4–6 months. MidAmerica is functionally
                a non-competitor.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Funnel */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="The Math">
                Lead Funnel (Monthly Target)
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Steady-state assumption: month 4+ of combined SEO, GBP, LSA, and PPC.
              </p>
            </div>

            <div className="space-y-2">
              {funnelStages.map((stage, idx) => {
                const colors = ['bg-brass', 'bg-brass/85', 'bg-brass/70', 'bg-brass/55', 'bg-walnut'];
                return (
                  <div key={stage.label} className="flex flex-col items-center">
                    <div
                      className={`${colors[idx]} text-walnut py-5 px-6 rounded-sm shadow-sm transition-all`}
                      style={{ width: `${stage.width}%`, minWidth: '200px' }}
                    >
                      <p
                        className={`font-elegant text-xl md:text-2xl font-semibold text-center ${
                          idx === 4 ? 'text-parchment' : ''
                        }`}
                      >
                        {stage.label}
                      </p>
                      <p
                        className={`text-xs text-center mt-1 font-sans ${
                          idx === 4 ? 'text-parchment/70' : 'text-walnut/70'
                        }`}
                      >
                        {stage.sub}
                      </p>
                    </div>
                    {idx < funnelStages.length - 1 && (
                      <svg
                        className="w-6 h-6 text-ink/30 my-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Site Pages Built */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="What's Live">
                Site Pages Built for This Strategy
              </Heading>
            </div>

            <div className="bg-parchment rounded-sm overflow-hidden border border-ink/10">
              <table className="w-full">
                <thead className="bg-walnut text-parchment">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-widest font-sans">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-widest font-sans">
                      Page
                    </th>
                    <th className="px-6 py-3 text-right text-xs uppercase tracking-widest font-sans">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {pagesBuilt.map((p) => (
                    <tr key={p.url}>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs uppercase tracking-widest font-sans px-2 py-1 rounded-sm ${
                            p.status === 'New'
                              ? 'bg-brass/20 text-brass'
                              : p.status === 'Rebuilt' || p.status === 'Expanded'
                                ? 'bg-walnut/10 text-walnut'
                                : 'bg-ink/10 text-ink/60'
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-sans text-ink">
                        <p>{p.label}</p>
                        <p className="text-xs text-ink/50 mt-1">{p.url}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={p.url}
                          className="text-brass hover:underline font-sans text-sm"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Runbooks */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" eyebrow="The Playbooks">
                Operational Runbooks
              </Heading>
              <p className="mt-4 text-lg text-ink/70 font-elegant max-w-2xl mx-auto">
                Click any section to expand. Full setup steps, weekly cadence, and expected
                results for each channel.
              </p>
            </div>

            <div className="space-y-4">
              {/* GBP Runbook */}
              <details className="group bg-white rounded-sm shadow-sm overflow-hidden">
                <summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-parchment/50 transition-colors">
                  <div>
                    <h3 className="font-elegant text-2xl text-ink">
                      Google Business Profile
                    </h3>
                    <p className="text-sm text-ink/60 mt-1">
                      Map Pack ranking · Free · 60–120 day timeline · 2 hrs/week
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-brass transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-8 border-t border-ink/10">
                  <GbpRunbook />
                </div>
              </details>

              {/* LSA Runbook */}
              <details className="group bg-white rounded-sm shadow-sm overflow-hidden">
                <summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-parchment/50 transition-colors">
                  <div>
                    <h3 className="font-elegant text-2xl text-ink">Local Service Ads</h3>
                    <p className="text-sm text-ink/60 mt-1">
                      Pay-per-lead · $200–$400/mo · 2–4 week setup · 30 min/week
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-brass transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-8 border-t border-ink/10">
                  <LsaRunbook />
                </div>
              </details>

              {/* Google Ads Runbook */}
              <details className="group bg-white rounded-sm shadow-sm overflow-hidden">
                <summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-parchment/50 transition-colors">
                  <div>
                    <h3 className="font-elegant text-2xl text-ink">Google Ads (PPC)</h3>
                    <p className="text-sm text-ink/60 mt-1">
                      Same-day leads · $400–$500/mo · 3–4 hr setup · 1 hr/week
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-brass transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-8 border-t border-ink/10">
                  <GoogleAdsRunbook />
                </div>
              </details>
            </div>
          </div>
        </Container>
      </Section>

      {/* Print + footer */}
      <Section tone="walnut" className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-parchment/80 text-sm font-sans uppercase tracking-widest mb-6">
              End of Strategy Document
            </p>
            <PrintButton />
            <p className="text-parchment/50 text-xs mt-8 font-sans">
              This page is intentionally hidden — not indexed, not in the sitemap. URL only.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

// ──────────────────────────────────────────────────────────────────
// Runbook content components — each renders the corresponding
// marketing/*.md runbook in styled, readable form.
// ──────────────────────────────────────────────────────────────────

function RunbookSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-elegant text-2xl text-brass">{number}</span>
        <h4 className="font-elegant text-xl text-ink">{title}</h4>
      </div>
      <div className="ml-10 space-y-3 text-ink/80 leading-relaxed text-base">{children}</div>
    </div>
  );
}

function GbpRunbook() {
  return (
    <div className="pt-6">
      <div className="bg-parchment/50 p-5 rounded-sm border-l-4 border-brass mb-6">
        <p className="text-base text-ink/80 leading-relaxed">
          <strong>Goal:</strong> Rank in the Google Map Pack (the 3-pack above organic results)
          for &quot;cabinet refacing near me&quot; and similar queries from Clayton, Chesterfield,
          and Wildwood searchers.
        </p>
        <p className="text-base text-ink/80 leading-relaxed mt-3">
          <strong>Why this matters most:</strong> The Map Pack often produces more leads than
          $1,000/month of paid clicks. Highest free leverage in the entire strategy.
        </p>
      </div>

      <RunbookSection number="01" title="Foundation (Week 1 — ~6 hours)">
        <p>
          <strong>Verify the profile is claimed</strong> at business.google.com. If unverified,
          request verification (postcard or phone — 5–14 days).
        </p>
        <p>
          <strong>Categories:</strong> Primary &quot;Cabinet store&quot; or &quot;Custom Cabinet
          Maker.&quot; Secondary: Cabinet maker, Kitchen remodeler, Cabinet refinishing service,
          Woodworker, Carpenter, Furniture maker.
        </p>
        <p>
          <strong>Service area</strong> (add as separate cities, not radius): St. Louis, Clayton,
          Chesterfield, Wildwood, Town and Country, Ladue, Frontenac, Kirkwood, Webster Groves,
          Creve Coeur, Ballwin, Des Peres.
        </p>
        <p>
          <strong>Business name:</strong>{' '}
          <code className="bg-parchment px-2 py-1 rounded text-sm">
            Professional Wood Interiors
          </code>
          {' '}— do NOT add keywords. Google penalizes name-stuffing.
        </p>
        <p>
          <strong>Description (750 char):</strong> Lead with &quot;Professional Wood Interiors
          has been handcrafting custom cabinets and refacing kitchens for St. Louis families
          since 1985...&quot; — full text in{' '}
          <code className="bg-parchment px-2 py-1 rounded text-sm">
            marketing/google-business-profile.md
          </code>
          .
        </p>
        <p>
          <strong>Photos:</strong> Logo, cover, 3–5 shop interior, 3–5 at-work, team, plus 15+
          tagged project photos pulled from{' '}
          <code className="bg-parchment px-2 py-1 rounded text-sm">/public/images/gallery/</code>.
        </p>
        <p>
          <strong>Add 11 service entries</strong> — each as a separate Service with description
          + link (e.g., &quot;Cabinet Refacing in Clayton&quot; →{' '}
          <code className="bg-parchment px-2 py-1 rounded text-sm">
            /locations/clayton/cabinet-refacing
          </code>
          ).
        </p>
      </RunbookSection>

      <RunbookSection number="02" title="Reviews Push (Weeks 1–8) — Target 25+ Reviews">
        <p>
          <strong>Get the short review link:</strong> GBP dashboard → &quot;Get more
          reviews&quot; → copy g.page link.
        </p>
        <p>
          <strong>Day-of-walkthrough:</strong> Hand the client a printed card with the review
          link as QR code. Verbal ask: &quot;If you&apos;re happy with the work, a Google review
          would mean the world to us — it&apos;s how most of our new clients find us.&quot;
        </p>
        <p>
          <strong>Day +3 (text or email):</strong> Polite follow-up with the link.
        </p>
        <p>
          <strong>Day +14:</strong> One more nudge if no review yet.
        </p>
        <p>
          <strong>Past clients:</strong> Pull the last 24 months of clients. Reach out
          individually. Even 5 reviews from this can move the needle.
        </p>
        <p>
          <strong>Respond to every review:</strong> 5-star = short warm reply. Below 5 = within
          24 hours, never defensive, take complaint offline. Response rate is itself a ranking
          signal.
        </p>
      </RunbookSection>

      <RunbookSection number="03" title="Posts (Ongoing — 1/week)">
        <p>
          <strong>Project showcases (weekly):</strong> Photo + 1–2 sentence caption. Example:
          &quot;Just wrapped a cabinet refacing project in Chesterfield. Walnut shaker doors,
          brushed brass hardware, three days on-site.&quot;
        </p>
        <p>
          <strong>Tip/education (every other week):</strong> Quick refacing or kitchen advice
          that demonstrates expertise.
        </p>
        <p>
          <strong>Offer/CTA (monthly):</strong> &quot;Booking refacing consultations through
          [month]. Free in-home assessment, fixed written quote.&quot;
        </p>
        <p>
          <strong>Cadence:</strong> 1 post/week minimum. Set a recurring 15-minute calendar block.
        </p>
      </RunbookSection>

      <RunbookSection number="04" title="Q&amp;A Pre-Population (Week 2)">
        <p>
          Pre-populate the Q&amp;A section by asking from a separate Google account, then
          answering from the business account. Questions: service area, refacing cost, project
          duration, financing, in-home presence requirement. Full Q&amp;A text in the runbook
          file.
        </p>
      </RunbookSection>

      <RunbookSection number="05" title="Local Citations Audit">
        <p>
          Business name, address, phone must match{' '}
          <code className="bg-parchment px-2 py-1 rounded text-sm">lib/business.ts</code>{' '}
          exactly across: Yelp, Houzz, Angi, BBB, Yellow Pages, Foursquare, Apple Maps, Bing
          Places, Facebook, LinkedIn, NextDoor.
        </p>
        <p>
          Inconsistent citations are one of the biggest local SEO killers and one of the easiest
          fixes.
        </p>
      </RunbookSection>

      <div className="mt-8 p-5 bg-walnut/5 rounded-sm border border-walnut/20">
        <p className="font-sans text-xs uppercase tracking-widest text-walnut mb-2">
          What &quot;Winning&quot; Looks Like in 90 Days
        </p>
        <ul className="space-y-1 text-ink/80 text-sm">
          <li>· 25+ 5-star reviews</li>
          <li>· Map Pack position 1–3 for &quot;cabinet refacing near me&quot; in target cities</li>
          <li>· 50+ profile views/week</li>
          <li>· 5+ phone calls/week from GBP listing</li>
        </ul>
      </div>
    </div>
  );
}

function LsaRunbook() {
  return (
    <div className="pt-6">
      <div className="bg-parchment/50 p-5 rounded-sm border-l-4 border-brass mb-6">
        <p className="text-base text-ink/80 leading-relaxed">
          <strong>What LSAs are:</strong> Pay-per-lead ads that appear <em>above</em> the Map
          Pack and PPC results, with a &quot;Google Guaranteed&quot; badge.
        </p>
        <p className="text-base text-ink/80 leading-relaxed mt-3">
          <strong>Why this beats PPC at small budgets:</strong> Avg LSA lead cost in cabinet
          industry is $25–$70. PPC at $5–$11/click × 10 clicks per lead = $50–$110/lead. LSA
          wins on cost-per-acquired-customer.
        </p>
      </div>

      <RunbookSection number="01" title="Eligibility Check (Day 1)">
        <p>
          Requirements: Missouri business license, general liability insurance ($1M+), workers&apos;
          comp, background check ($45 via Pinkerton). Cabinet refacing, cabinet making, and
          kitchen remodeling are all eligible LSA categories.
        </p>
        <p>
          Start at{' '}
          <code className="bg-parchment px-2 py-1 rounded text-sm">
            ads.google.com/local-services-ads
          </code>
          . 5-minute eligibility form.
        </p>
      </RunbookSection>

      <RunbookSection number="02" title="Application (Days 1–7)">
        <p>
          <strong>Use the same Google account as GBP.</strong> Don&apos;t create a separate one.
        </p>
        <p>
          <strong>Service area:</strong> St. Louis metro, narrowed to Clayton + Chesterfield +
          Wildwood + surrounding affluent areas. Same as GBP for consistency.
        </p>
        <p>
          <strong>Job categories</strong> (priority order): Cabinet refacing (primary), Kitchen
          remodeler (secondary), Carpenter (catch-all).
        </p>
        <p>
          <strong>Documents to upload:</strong> Business license, liability insurance, workers&apos;
          comp, driver&apos;s licenses (Dave + any on-site employees), EIN/W-9.
        </p>
        <p>
          <strong>Realistic approval timeline: 2–4 weeks.</strong> Background check is the
          slowest step.
        </p>
      </RunbookSection>

      <RunbookSection number="03" title="Budget &amp; Bidding (Day of Activation)">
        <p>
          <strong>Weekly budget:</strong> Start at $150–$250/week ($600–$1,000/month). Adjust
          after 30 days based on lead quality.
        </p>
        <p>
          <strong>Math:</strong> At $40 avg/lead, $200/week = 5 leads/week = 20 leads/month.
          Closing rate ~10–25% = 2–5 closed projects/month. One closed lead/month at $25K
          already pays back.
        </p>
        <p>
          <strong>Bidding strategy:</strong> &quot;Maximize Leads&quot; (Google&apos;s
          auto-bidding) for first 60 days. After data: switch to &quot;Maximize Job Type&quot;
          and bid more aggressively on refacing leads.
        </p>
        <p>
          <strong>Dispute bad leads</strong> within 30 days via the LSA dashboard. Google
          credits ~60–70% of disputed leads in similar industries.
        </p>
      </RunbookSection>

      <RunbookSection number="04" title="Lead Handling SOP">
        <p>
          <strong>Phone leads — answer within 3 rings.</strong> Google tracks. Qualify in first 2
          minutes: service type, city, timeline, budget realism.
        </p>
        <p>
          <strong>Message leads — reply within 1 hour, always.</strong> Even &quot;Thanks, can I
          call you in 15 minutes?&quot; counts. Google measures response speed.
        </p>
        <p>
          <strong>Track every lead</strong> in a spreadsheet: date, type, source, city, service,
          qualified Y/N, consultation booked Y/N, closed Y/N, lead cost.
        </p>
      </RunbookSection>

      <div className="mt-8 p-5 bg-walnut/5 rounded-sm border border-walnut/20">
        <p className="font-sans text-xs uppercase tracking-widest text-walnut mb-2">
          Expected Results
        </p>
        <ul className="space-y-1 text-ink/80 text-sm">
          <li>
            <strong>Month 1:</strong> 10–20 leads, 2–4 consultations, 0–1 closed (just paid back)
          </li>
          <li>
            <strong>Month 2:</strong> 25–40 leads, 6–10 consultations, 1–3 closed (profitable)
          </li>
          <li>
            <strong>Month 3+:</strong> 35–50 leads/month steady-state, 10–15 consultations, 3–5
            closed
          </li>
        </ul>
      </div>
    </div>
  );
}

function GoogleAdsRunbook() {
  return (
    <div className="pt-6">
      <div className="bg-parchment/50 p-5 rounded-sm border-l-4 border-brass mb-6">
        <p className="text-base text-ink/80 leading-relaxed">
          <strong>Strategy:</strong> Tight geo, tight keyword list, manual CPC bidding,
          conservative spend, great landing page (the rebuilt{' '}
          <code className="bg-parchment px-2 py-1 rounded text-sm">
            /services/cabinet-refacing
          </code>
          ).
        </p>
        <p className="text-base text-ink/80 leading-relaxed mt-3">
          <strong>At this budget, discipline beats volume.</strong> Every wasted click
          compounds.
        </p>
      </div>

      <RunbookSection number="01" title="Account Structure">
        <p>One campaign, three ad groups:</p>
        <ul className="ml-4 space-y-1 text-sm">
          <li>
            · <strong>Ad Group 1: Refacing — Generic</strong> · max CPC $5.50 ·
            phrase-match refacing/resurfacing terms
          </li>
          <li>
            · <strong>Ad Group 2: Refacing — Near Me</strong> · max CPC $9.00 · all &quot;near
            me&quot; variants
          </li>
          <li>
            · <strong>Ad Group 3: Refacing — Local</strong> · max CPC $11.00 · exact-match St.
            Louis / Clayton / Chesterfield / Wildwood
          </li>
        </ul>
      </RunbookSection>

      <RunbookSection number="02" title="Campaign Settings (Critical)">
        <p>
          <strong>Network:</strong> Search ONLY. Turn OFF Display (will burn budget). Search
          Partners OFF initially.
        </p>
        <p>
          <strong>Locations:</strong> Clayton, Chesterfield, Wildwood, Town and Country, Ladue,
          Frontenac, Webster Groves, Kirkwood. NOT broad &quot;St. Louis metro.&quot;
        </p>
        <p>
          <strong>Location option:</strong> &quot;Presence: People in or regularly in your
          targeted locations&quot; — NOT &quot;Interested in.&quot;
        </p>
        <p>
          <strong>Exclude:</strong> St. Louis City south side (63116, 63118, 63111), Florissant,
          Hazelwood, most of St. Charles County.
        </p>
        <p>
          <strong>Budget:</strong> $30/day = $900/month. Stays inside the $500–$1K range.
        </p>
        <p>
          <strong>Bidding:</strong> Manual CPC for first 90 days. Do NOT use &quot;Maximize
          Conversions&quot; — needs 30+ conversions/month to optimize.
        </p>
        <p>
          <strong>Day-parting:</strong> Mon–Fri 8am–8pm, Sat–Sun 9am–6pm. Overnight paused.
          +15% Tue–Wed evening (research peak).
        </p>
        <p>
          <strong>Device:</strong> Mobile +10%, Tablet -20%.
        </p>
      </RunbookSection>

      <RunbookSection number="03" title="Negative Keywords (Apply at Campaign Level)">
        <p>
          The most important list in the entire campaign. Without it, broad terms will burn
          budget on tire-kickers:
        </p>
        <div className="bg-parchment/50 p-4 rounded-sm font-mono text-sm text-ink/70 leading-relaxed">
          diy · &quot;do it yourself&quot; · kit · video · youtube · tutorial · &quot;how
          to&quot; · cheap · free · &quot;peel and stick&quot; · &quot;contact paper&quot; ·
          wholesale · ikea · &quot;home depot&quot; · lowes · paint · spray ·
          &quot;painting tutorial&quot; · career · job · hiring · salary · calculator · software
        </div>
        <p className="text-sm text-ink/60 italic mt-2">
          Full ~50-item list in marketing/google-ads-campaign.md
        </p>
      </RunbookSection>

      <RunbookSection number="04" title="Ad Copy (Responsive Search Ads)">
        <p>2 RSAs per ad group. Sample headlines:</p>
        <ul className="ml-4 space-y-1 text-sm text-ink/70">
          <li>· Cabinet Refacing in St. Louis</li>
          <li>· Family-Owned Cabinet Refacing</li>
          <li>· Save 40-50% vs. New Cabinets</li>
          <li>· Cabinet Refacing in Clayton, MO</li>
          <li>· Solid-Wood Doors, Built Locally</li>
          <li>· Free In-Home Consultation</li>
          <li>· Refacing Done in About a Week</li>
          <li>· 40+ Years Refacing St. Louis Kitchens</li>
        </ul>
        <p>
          <strong>Sitelinks:</strong> Cost Guide, Refacing in Clayton, Chesterfield, Wildwood,
          See Our Work, Free Consultation.
        </p>
        <p>
          <strong>Callouts:</strong> Family-Owned Since 1985, Solid-Wood Construction, Free
          In-Home Consultation, About a Week On-Site, No Pressure, No Surprises.
        </p>
      </RunbookSection>

      <RunbookSection number="05" title="Conversion Tracking (DO BEFORE LAUNCH)">
        <p>
          <strong>Without conversion tracking, you can&apos;t tell what works.</strong> Set up
          before flipping the switch:
        </p>
        <p>
          · <strong>Form submission</strong> — fires on{' '}
          <code className="bg-parchment px-1 rounded text-sm">/contact-us</code> form success
        </p>
        <p>
          · <strong>Phone call</strong> — Google call tracking via call extension (auto-tracks)
        </p>
        <p>
          · <strong>Value per conversion:</strong> Set to $200 per form submission as a baseline,
          calibrate after 90 days.
        </p>
      </RunbookSection>

      <RunbookSection number="06" title="First 30 Days — What to Watch">
        <p>
          <strong>Daily (5 min):</strong> Check spend pace. Should be $25–$35/day. If burning
          $50+, pause and investigate.
        </p>
        <p>
          <strong>Weekly (1 hour):</strong>
        </p>
        <ul className="ml-4 space-y-1 text-sm text-ink/70">
          <li>· Review search terms report — add negatives for any garbage queries</li>
          <li>· Check device performance (mobile vs. desktop)</li>
          <li>· Check geo performance — pause underperformers, boost winners</li>
          <li>· Review ad copy — kill weakest variant, build a new one</li>
        </ul>
        <p>
          <strong>Monthly (1 hour):</strong> Calculate cost per acquired customer, ROAS. Adjust
          budget up if ROAS &gt; 5x, down if &lt; 2x.
        </p>
      </RunbookSection>

      <div className="mt-8 p-5 bg-walnut/5 rounded-sm border border-walnut/20">
        <p className="font-sans text-xs uppercase tracking-widest text-walnut mb-2">
          Expected Results
        </p>
        <ul className="space-y-1 text-ink/80 text-sm">
          <li>
            <strong>Month 1:</strong> 80–150 clicks, 4–8 leads, 1–2 closed projects
          </li>
          <li>
            <strong>Month 2:</strong> 6–12 leads, 1–3 closed
          </li>
          <li>
            <strong>Month 3:</strong> Quality Score lowering effective CPC. 10–18 leads, 2–4
            closed
          </li>
          <li>
            <strong>Steady state:</strong> ~10–15 PPC leads/month. Combined with GBP + LSA: 4–6
            closed/month.
          </li>
        </ul>
      </div>
    </div>
  );
}
