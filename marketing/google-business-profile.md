# Google Business Profile Optimization Runbook

**Goal**: Rank in the Google Map Pack (the 3-pack at the top of local search) for "cabinet refacing near me", "cabinet refacing st louis", and similar queries from Clayton / Chesterfield / Wildwood searchers.

**Why this is the highest-leverage free move**: The Map Pack sits *above* organic results and PPC ads for local-intent queries. Getting into the 3-pack often produces more leads than $1,000/month of paid clicks.

**Estimated time investment**: ~6 hours upfront, then ~2 hours/week ongoing for 90 days, then ~1 hour/week ongoing.

---

## Phase 1: Foundation (Week 1 — ~6 hours)

### 1.1 Verify the profile is claimed
- Sign in to [business.google.com](https://business.google.com) with the email controlling the listing
- If unverified, request verification (postcard or phone — usually 5–14 days)
- If someone else claimed it (rare but possible), follow Google's [ownership transfer](https://support.google.com/business/answer/4566671) process

### 1.2 Complete every profile field — 100% completion is a ranking signal
Walk through every section and fill it out:

**Business name**: `Professional Wood Interiors`
- Do not add keywords ("Professional Wood Interiors - Cabinet Refacing St. Louis"). Google penalizes keyword stuffing in business names.

**Categories**:
- Primary: **Cabinet store** (or **Custom Cabinet Maker** if available — Google's category list evolves)
- Secondary (add all that apply):
  - Cabinet maker
  - Kitchen remodeler
  - Cabinet refinishing service
  - Woodworker
  - Carpenter
  - Furniture maker

**Address**: 12031 Wesford Dr, Maryland Heights, MO 63043 (from `lib/business.ts`)

**Service area**: Add as separate metro/cities — don't just use a radius:
- St. Louis, MO
- Clayton, MO
- Chesterfield, MO
- Wildwood, MO
- Town and Country, MO
- Ladue, MO
- Frontenac, MO
- Kirkwood, MO
- Webster Groves, MO
- Creve Coeur, MO
- Ballwin, MO
- Des Peres, MO

**Hours**: Match `BUSINESS_HOURS` in `lib/business.ts` exactly. If hours change seasonally, update them — Google flags stale hours.

**Phone**: (314) 437-9988

**Website**: https://www.professionalwoodinteriors.com

**Appointments link**: https://www.professionalwoodinteriors.com/contact-us

**Description** (750 char limit — use most of it):
```
Professional Wood Interiors has been handcrafting custom cabinets and refacing kitchens for St. Louis families since 1985. We're a family-owned shop building everything by hand — solid-wood doors, dovetailed drawers, hand-applied finishes — for homes in Clayton, Chesterfield, Wildwood, and across the St. Louis metro. Our specialties: cabinet refacing (40–50% less than full replacement), custom kitchen cabinetry, built-in bookcases, and entertainment centers. Free in-home consultation with no pressure to move forward. Same team from first call through final walkthrough.
```

**Year established**: 1985

**Attributes** (check all that apply):
- Online estimates: Yes
- Onsite services: Yes
- Identifies as women/family-owned: Family-owned

### 1.3 Add services (one-by-one — this is critical for category ranking)

For each service below, add as a separate **Service** entry with description and link:

| Service Name | Link |
|---|---|
| Cabinet Refacing | /services/cabinet-refacing |
| Kitchen Remodeling | /services/custom-kitchen-cabinetry |
| Custom Kitchen Cabinets | /services/custom-kitchen-cabinetry |
| Custom Bookcases | /services/custom-bookcases |
| Entertainment Centers | /services/entertainment-centers |
| Cabinet Refacing in Clayton | /locations/clayton/cabinet-refacing |
| Cabinet Refacing in Chesterfield | /locations/chesterfield/cabinet-refacing |
| Cabinet Refacing in Wildwood | /locations/wildwood/cabinet-refacing |
| Kitchen Remodeling in Clayton | /locations/clayton/kitchen-remodeling |
| Kitchen Remodeling in Chesterfield | /locations/chesterfield/kitchen-remodeling |
| Kitchen Remodeling in Wildwood | /locations/wildwood/kitchen-remodeling |

Each service should have a 1–2 sentence description that includes the city + service keyword naturally.

### 1.4 Upload photos (Google rewards photo activity heavily)

Required uploads, in this order:
1. **Logo** — 250x250 minimum, transparent PNG, square
2. **Cover photo** — landscape orientation, ideally an exterior shop shot or a hero kitchen project
3. **Interior** — 3–5 shop photos
4. **At work** — 3–5 photos of crew working (with permission)
5. **Team** — Dave + key staff
6. **Products/Projects** — minimum 15 project photos, each tagged:
   - Title: e.g., "Cabinet Refacing in Chesterfield, MO"
   - Caption: 1–2 sentences mentioning city + service

Pull project photos from `public/images/gallery/` — there are 86 catalogued. Upload at least 20 to start.

---

## Phase 2: Reviews push (Weeks 1–8)

**Target**: 25+ Google reviews with avg 4.8+ stars within 60 days.

### 2.1 Generate the review link
1. In your GBP dashboard, go to "Get more reviews"
2. Copy the short link (looks like `g.page/r/...`)
3. Save it — you'll use this everywhere

### 2.2 Build a review-request workflow
Create a simple, repeatable sequence:

**Day of final walkthrough**:
- Hand the client a printed card with the review link as QR code + URL
- Verbal ask: "If you're happy with the work, a Google review would mean the world to us — it's how most of our new clients find us."

**Day +3 (text or email)**:
> "Hi [Name] — Dave from Professional Wood Interiors. Hope you're enjoying the new [kitchen/refacing/bookcases]! If you have a minute, would you mind leaving a quick Google review? Link here: [your g.page link]. Thanks again for trusting us with this project."

**Day +14**:
- If no review yet, one more polite follow-up

### 2.3 Past clients
Pull a list of all past clients from the last 24 months. Reach out individually with a personal note. Even 5 reviews from this exercise can move the needle.

### 2.4 Respond to every review
- 5-star reviews: short, warm response ("Thank you, [Name] — it was a pleasure working on your [project]. Wishing you many great meals in the new kitchen.")
- Anything below 5: respond within 24 hours, professional, never defensive. Take it offline if it's a complaint: "I'd like to make this right — could you call me directly at (314) 437-9988?"

Response rate is itself a ranking signal.

---

## Phase 3: Posts (Ongoing — 1 post/week)

Google rewards GBP profiles with active "Posts" — short updates that show in the profile.

**Post types to rotate**:
1. **Project showcase** (weekly) — Photo + 1–2 sentence caption about a recent project. Example: *"Just wrapped a cabinet refacing project in Chesterfield. Walnut shaker doors, brushed brass hardware, three days on-site. Photos below."*
2. **Tip/education** (every other week) — Example: *"Quick tip: if your cabinet doors are sagging but the boxes feel solid, refacing is almost always the right call. The doors are the part that wear; the boxes usually outlast them."*
3. **Offer/CTA** (monthly) — Example: *"Booking refacing consultations through [month]. Free in-home assessment, fixed written quote, no follow-up pressure."*

**Cadence**: 1 post/week minimum. Set a recurring 15-minute calendar block.

---

## Phase 4: Q&A section (Week 2)

Pre-populate the Q&A section with FAQs. Visitors and Google both read this.

Add these by asking from a separate Google account, then answering from the business account:

| Question | Answer |
|---|---|
| Do you serve Clayton/Chesterfield/Wildwood? | Yes — those are our primary service areas. We work throughout the St. Louis metro. |
| How much does cabinet refacing cost? | Typically 40–50% less than full cabinet replacement. For a real number we'd need to see your kitchen — the consultation is free. |
| How long does a refacing project take? | About a week on-site for most kitchens, after a 2–4 week shop build. |
| Do you offer financing? | We don't offer in-house financing but we're happy to provide the itemized quote you'd need for a HELOC or home improvement loan. |
| Do I need to be home during installation? | Helpful if you're around the first morning and the final walkthrough, but you don't need to be home every day. |

---

## Phase 5: Track and tune (Ongoing)

### Metrics to monitor (weekly)
- **Profile views** (search + maps)
- **Direct vs. discovery searches** — discovery (% who found you searching a service vs. your name) shows SEO is working
- **Calls** triggered from GBP
- **Direction requests**
- **Website clicks** from GBP

### What "winning" looks like in 90 days
- 25+ 5-star reviews
- Map Pack position 1–3 for "cabinet refacing near me" when searching from a Clayton/Chesterfield/Wildwood IP
- 50+ profile views/week
- 5+ phone calls/week from GBP listing

### If you're not in the Map Pack by day 90
Top causes (in priority order):
1. Review velocity too slow — need 1+ new review per week
2. Inconsistent NAP (name/address/phone) across the web — audit citations on Yelp, Houzz, Angi, BBB, Yellow Pages
3. Insufficient photo activity — keep uploading
4. Service area too broad — narrow if needed
5. Competitor with stronger backlinks — needs a longer-term SEO push

---

## Local citations (NAP consistency)

While building reviews, audit these directories — your business name, address, and phone must match `lib/business.ts` exactly:

- Yelp
- Houzz
- Angi (formerly Angie's List)
- BBB
- Yellow Pages
- Foursquare
- Apple Maps
- Bing Places
- Facebook Business Page
- LinkedIn Company Page
- NextDoor (claim the business listing)

Inconsistent citations are one of the biggest local SEO killers and one of the easiest fixes.

---

**Owner**: Dave (with Mason supporting setup)
**Cadence**: ~1 hour/week ongoing after initial setup
**Expected timeline to Map Pack ranking**: 60–120 days for primary keywords
