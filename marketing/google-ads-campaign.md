# Google Ads Campaign Setup Runbook

**Goal**: Generate qualified cabinet refacing and kitchen remodeling leads from Clayton, Chesterfield, and Wildwood for a $500–$1,000/month budget.

**Strategy**: Tight geo, tight keyword list, manual CPC bidding, conservative spend, and a great landing page (the rebuilt `/services/cabinet-refacing`). At this budget, discipline beats volume.

**Setup time**: 3–4 hours
**Ongoing time**: 1 hour/week for the first 90 days, then 30 minutes/week

---

## Account structure

### One campaign, three ad groups

```
Campaign: ProWood — Cabinet Refacing (Search)
├── Ad Group 1: Refacing — Generic
├── Ad Group 2: Refacing — Near Me
└── Ad Group 3: Refacing — Local
```

**Why one campaign**: At $500–$1,000/month, splitting into multiple campaigns spreads data too thin to optimize. Use ad groups within one campaign.

**Why not kitchen remodeling**: Kitchen remodel terms are higher CPC ($10–$13) and broader intent. Save them for SEO. PPC budget concentrates on refacing where CPCs are $4–$10 and intent is clearer.

---

## Campaign settings

### Network
- ✅ Google Search
- ❌ Display Network (turn this OFF — Display will burn budget on irrelevant impressions)
- ❌ Search Partners (start off; can test on later)

### Geography
**Locations** (target these specifically — do NOT use St. Louis metro broadcast):
- Clayton, MO
- Chesterfield, MO
- Wildwood, MO
- Town and Country, MO
- Ladue, MO
- Frontenac, MO
- Webster Groves, MO (light test)
- Kirkwood, MO (light test)

**Location options**: "Presence: People in or regularly in your targeted locations" (NOT "People interested in your targeted locations" — that targets too broadly)

**Excluded locations**: Add explicitly to prevent waste:
- St. Louis City south side (zip codes 63116, 63118, 63111, etc.)
- Florissant, MO
- Hazelwood, MO
- Most of St. Charles County (we have Chesterfield/Wildwood as edge of service)

### Languages
- English

### Budget
- Start: **$30/day** ($900/month) — well within $500–$1,000 budget
- After 30 days of data, adjust to $20–$40/day based on conversion volume

### Bidding strategy
- **Manual CPC** for first 90 days. Do NOT use "Maximize Conversions" or "Target CPA" — these need 30+ conversions/month to optimize, and at this budget you won't generate enough signal.
- Set **max CPC bids** per ad group (see below)
- After 90 days with enough conversion data, can test switching to **Enhanced CPC**

### Ad rotation
- "Rotate ads indefinitely" for the first 60 days while you A/B test
- After 60 days, switch to "Optimize: prefer best performing ads"

### Schedule (day-parting)
- **Mon–Fri**: 8am–8pm
- **Sat–Sun**: 9am–6pm
- **Overnight**: paused
- **Bid adjustments**:
  - Tue–Wed evening (6pm–8pm): +15% (research peak for home projects)
  - Sat morning (9am–12pm): +10%
  - Sunday afternoon (1pm–5pm): +10%

### Device bid adjustments
- **Desktop**: +0% baseline
- **Mobile**: +10% (most "near me" searches happen on mobile)
- **Tablet**: -20%

---

## Ad Group 1: Refacing — Generic

**Theme**: People searching for cabinet refacing generally — we capture them with geo-targeting.

**Max CPC bid**: $5.50

**Keywords** (all phrase match):
```
"cabinet refacing"
"kitchen cabinet refacing"
"refacing kitchen cabinets"
"reface cabinets"
"reface kitchen cabinets"
"kitchen cabinet resurfacing"
"refacing cabinets"
"cabinet resurfacing"
```

**Negative keywords** (add at campaign level — apply to all ad groups):
```
diy
"do it yourself"
kit
"do yourself"
video
youtube
tutorial
how to
how-to
cheap
free
"peel and stick"
"contact paper"
wholesale
laminate sheet
"laminate roll"
ikea
"home depot"
lowes
"big box"
hinge only
hardware only
"just hardware"
veneer roll
veneer sheet
wrap
paint
spray
"cabinet paint"
"painting tips"
"painting tutorial"
"painting kitchen cabinets"
career
job
hiring
salary
estimate calculator
calculator
software
"cabinet design software"
```

---

## Ad Group 2: Refacing — Near Me

**Theme**: High commercial intent — they want a contractor *now*. Geo-targeting locks them to your area.

**Max CPC bid**: $9.00 (worth more — higher intent)

**Keywords** (all phrase match):
```
"cabinet refacing near me"
"cabinet refinishing near me"
"refacing cabinets near me"
"cabinet refacers near me"
"kitchen cabinet refacing near me"
"cabinet refacing companies near me"
"reface kitchen cabinets near me"
```

---

## Ad Group 3: Refacing — Local (St. Louis / Clayton / Chesterfield / Wildwood)

**Theme**: Exact-match local searches. Smallest volume but highest intent and intent-purity.

**Max CPC bid**: $11.00 (these convert; worth more)

**Keywords** (mix of exact and phrase):
```
[cabinet refacing st louis]
[cabinet refacing saint louis]
[cabinet refacing clayton mo]
[cabinet refacing chesterfield mo]
[cabinet refacing wildwood mo]
"cabinet refacing st louis"
"cabinet refacing clayton"
"cabinet refacing chesterfield"
"cabinet refacing wildwood"
"cabinet refinishing st louis"
"kitchen cabinet refacing st louis"
```

---

## Ad copy (Responsive Search Ads)

Build **2 RSAs per ad group**. Below are templates — each ad needs 15 headlines and 4 descriptions (Google rotates them):

### Headlines (mix and match — Google selects best)

```
Cabinet Refacing in St. Louis
Family-Owned Cabinet Refacing
Save 40-50% vs. New Cabinets
Cabinet Refacing in Clayton, MO
Cabinet Refacing in Chesterfield
Cabinet Refacing in Wildwood, MO
Solid-Wood Doors, Built Locally
Free In-Home Consultation
Refacing Done in About a Week
Custom Doors, Drawer Fronts, Finish
40+ Years Refacing St. Louis Kitchens
Family-Owned Since 1985
Get a Real Written Quote
No Pressure, No Surprise Charges
Handcrafted in Our STL Shop
```

### Descriptions

```
Handcrafted solid-wood doors, drawer fronts & finishes. 40–50% less than new cabinets. About a week on-site. Free in-home consultation. Call (314) 437-9988.

Family-owned St. Louis shop building cabinet refacing projects since 1985. We come to your home, measure, and give you a real written quote. Call (314) 437-9988.

Keep your cabinet boxes; get a brand-new kitchen look. Solid-wood doors, soft-close hinges, your choice of hardware. Free consultation — no follow-up pressure.

Cabinet refacing for Clayton, Chesterfield, and Wildwood homes. Built locally, installed by our own crew, finished in about a week. Free in-home assessment.
```

### Path fields
- Path 1: `Cabinet-Refacing`
- Path 2: `St-Louis`

(Final URL: `https://www.professionalwoodinteriors.com/services/cabinet-refacing`)

### Call extensions
- Phone: (314) 437-9988
- "Show your phone number with ads" — enabled
- Mobile call-only ads — optional add for AdGroup 2 (Near Me) since mobile traffic is high there

### Sitelink extensions (add 4–6)
- "Cabinet Refacing Cost Guide" → `/cabinet-refacing-cost`
- "Refacing in Clayton" → `/locations/clayton/cabinet-refacing`
- "Refacing in Chesterfield" → `/locations/chesterfield/cabinet-refacing`
- "Refacing in Wildwood" → `/locations/wildwood/cabinet-refacing`
- "See Our Work" → `/showroom/kitchens`
- "Free Consultation" → `/contact-us`

### Callout extensions
- "Family-Owned Since 1985"
- "Solid-Wood Construction"
- "Free In-Home Consultation"
- "About a Week On-Site"
- "No Pressure, No Surprises"
- "40-50% Less Than Replacement"

### Structured snippet extension
- Header: "Services"
- Values: "Cabinet Refacing, Kitchen Remodeling, Custom Cabinets, Built-In Bookcases, Entertainment Centers"

---

## Landing page

**Send all traffic to**: `/services/cabinet-refacing` (the rebuilt pillar page)

**Why this matters**: Google's Quality Score factors landing page relevance heavily. A great LP can reduce your effective CPC by 30–50%. The rebuilt pillar page covers refacing comprehensively — that's exactly what Google rewards.

For Ad Group 3 (Local), test sending traffic to city-specific pages:
- Clayton ads → `/locations/clayton/cabinet-refacing`
- Chesterfield ads → `/locations/chesterfield/cabinet-refacing`
- Wildwood ads → `/locations/wildwood/cabinet-refacing`

City-matched LPs typically convert 10–20% better than the generic pillar for those exact-match queries.

---

## Conversion tracking (DO THIS BEFORE ENABLING ADS)

Without conversion tracking, you can't tell what's working. Set up:

### 1. Google Ads conversion actions
Create these in Google Ads dashboard:
- **Form submission** — fires on `/contact-us` form success (the Next.js API route response)
- **Phone call** — Google call tracking (phone number forwards through Google's number; tracks call duration)

### 2. Implementation
- Google Tag installed in `app/layout.tsx` (one global tag for the whole site)
- Conversion fired via:
  - Form: from the React state when `/api/contact` returns 200 OK
  - Phone: Google's auto-tracking via call extension (no extra code needed)

This is a separate task — the marketing/operational setup. Mason can wire the Google Tag once the account is live.

### 3. Value per conversion
Set "Conversion value" = **$200 per form submission**. (This is a rough estimate of qualified lead value — your closing rate × average project value × profit margin / leads required. Calibrate after 90 days of real data.)

---

## Launch checklist

Before flipping the switch:
- [ ] Conversion tracking installed and tested (submit a test form, confirm Google Ads records it)
- [ ] All 3 ad groups built with keywords + 2 RSAs each
- [ ] Negative keyword list applied at campaign level
- [ ] Geo targeting set (Clayton, Chesterfield, Wildwood + affluent neighbors)
- [ ] Budget set at $30/day
- [ ] Manual CPC bidding selected
- [ ] Ad schedule set (no overnight)
- [ ] Device bid adjustments set
- [ ] Daily budget alerts enabled at $40/day spend (catches runaway spend)
- [ ] Landing pages tested on mobile — form works, phone link works
- [ ] Google Business Profile is verified (LSAs and PPC both feed from GBP signals)

---

## First 30 days — what to watch

### Daily (5 minutes)
- Check spend pace — should be $25–$35/day. If burning $50+/day, pause and investigate.
- Check search terms report — kill any irrelevant queries by adding to negative keyword list

### Weekly (1 hour)
- Review search terms report (Reports → Search Terms)
  - Add any negative keywords you see (e.g., "cabinet refacing video", "cabinet refacing diy")
  - Note any high-volume terms you're not bidding on — consider adding
- Check device performance — is mobile or desktop converting better? Adjust bid adjustment.
- Check geo performance — which cities are converting? Pause underperformers, increase bids on winners.
- Review ad copy performance — pause weakest ad in each ad group; build a new variant

### Monthly (1 hour)
- Calculate cost per acquired customer (`monthly spend ÷ closed projects`)
- Calculate ROAS (`closed project value × profit margin ÷ monthly spend`)
- Adjust budget up if ROAS > 5x, down if ROAS < 2x
- Refresh ad copy with new offers/seasonality

---

## Expected results

**Month 1**: $600–$900 spend. Likely 80–150 clicks. 4–8 leads. 1–2 closed projects (if any — many take 30+ days to close).

**Month 2**: Same spend. Better-targeted by now. 6–12 leads. 1–3 closed projects.

**Month 3**: Quality Score improving (lower effective CPC). 10–18 leads. 2–4 closed projects.

**Steady state (month 4+)**: At $30/day with optimized keywords + negatives, expect ~10–15 leads/month from PPC alone. Combined with GBP and LSA, ProWood should be sustaining 4–6 closed refacing/remodel projects/month.

---

## Common mistakes to avoid

1. **Letting Smart Bidding take over too soon** — Stay manual until you have 30+ conversions to feed automated bidding.
2. **Skipping negatives** — Every wasted click compounds at this budget. Spend 10 minutes/week pruning.
3. **Bidding on broad terms with broad match** — Broad match will burn your budget on "kitchen design software", "cabinet making class", "ikea cabinets". Use phrase + exact only.
4. **Sending traffic to homepage** — The refacing pillar page is the LP. Don't dilute it.
5. **Pausing too quickly when results are slow** — Give it 60 days minimum. Quality Score and lead quality improve as the campaign matures.
6. **Not tracking offline closes** — A lead from PPC who closes 60 days later is still attribution. Track it in the lead spreadsheet so you have a real ROAS number.

---

**Owner**: Mason (setup, weekly optimization) + Dave (lead handling)
**Recommended budget**: $30/day ($900/month) — bottom of $500–$1,000 budget range
**Expected timeline to profitability**: 60–90 days
