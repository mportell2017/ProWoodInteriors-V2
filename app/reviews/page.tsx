import Navigation from "@/components/Navigation";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

const reviews = [
  {
    quote: "Led by Dave Portell, ProWood Interiors is absolutely the best, most professional, and expert group of wood craftspersons around. Our experience with them was outstanding, from start to finish. Design and installation of our massive set of bookcases—double-sided, 9 feet high by 9 feet long—went very smoothly, the finished product was gorgeous, and we could not be happier with the outcome. Dave and his group are wood artists, and they were exacting in their manufacture and installation.",
    author: "Rich & Kathy Bucholz",
    location: "Chesterfield, MO",
    featured: true,
  },
  {
    quote: "OUTSTANDING customer service and craftsmanship! Dave and team at Professional Wood Interiors provided excellent communications, on time work completion, and very reasonable cost. Superb craftsmanship for extensive living room bookcases, fire place mantel, and bar renovations. Absolutely THE BEST team we have worked with for home renovations in three states over the past 20 years!!!",
    author: "David Ferguson",
    location: "Wildwood, MO",
  },
  {
    quote: "Dave was very courteous and did an amazing job on my kitchen. The transformation of the cabinets was night and day and Dave was very patient with all of our decisions. He made a dull kitchen into our dream kitchen. Dave's team is also a fantastic group of guys who worked hard, always took care with their craft and cleaned up behind themselves every time. This is craftsmanship at its best. I would recommend Professional Wood Interiors to anyone. They do fantastic work and they were a pleasure to work with.",
    author: "Kelly Cook",
  },
  {
    quote: "I have been grateful for Dave and his staff for their help, kindness and detailed workmanship on a repair for a piece of artwork I had custom made for a dear friend that became broken in two during the shipping process from Thailand. Professional Wood Interiors were so very nice to take my broken piece in and repair it beautifully with the little time I had before my friend's birthday party. I was so happy with everything and so thankful for their help. I have seen their beautiful work and would highly recommend them.",
    author: "Nancy Alan",
  },
  {
    quote: "Pro Wood Interiors are fantastic to work with. The level of expertise and professionalism is second to none. I would highly recommend David and his staff to anyone looking to do renovations to their home. Our new bookcases in our family room simply are stunning. Looking forward to working with David on our next project.",
    author: "Doug Uthoff",
  },
  {
    quote: "Dave is a true professional. He shows up on time, makes recommendations, cleans up, and honors his bids. There was never a time I thought the work would be subpar, or I would be 'squeezed' for extra upgrades. He showed up when it was convenient to our schedule and always kept us in the loop. It is refreshing to call your contractor and they PICK UP THE PHONE! I would recommend Dave to anyone seeking custom cabinets or refacing done (and I have already). Thank you Dave for making our house a home.",
    author: "Jerry M.",
  },
  {
    quote: "Very happy I found this company. I will be using Professional Wood Interiors again in the future. They went above and beyond. They gave good advice and got the job done fast. I am a very satisfied customer. I wish I had found this company years ago.",
    author: "Beth C.",
  },
];

const GOOGLE_REVIEW_URL = "https://share.google/RBU2XmuVW6UzTBFrR";

function GoogleLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function ReviewsPage() {
  const featuredReview = reviews.find((r) => r.featured);
  const regularReviews = reviews.filter((r) => !r.featured);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-24 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <Heading eyebrow="Customer Reviews" accent="italic">
            What Our Clients Say
          </Heading>
          <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
            See what homeowners across St. Louis and surrounding areas say about working with Professional Wood Interiors.
          </p>

          {/* Trust bar */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-3 border-y border-brass/25">
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 font-display text-lg text-ink">5.0</span>
            </div>
            <span className="hidden sm:block w-px h-5 bg-umber/25" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-ink/65">
              <GoogleLogo className="w-3.5 h-3.5" />
              Reviewed on Google
            </span>
            <span className="hidden sm:block w-px h-5 bg-umber/25" aria-hidden="true" />
            <span className="text-xs tracking-[0.22em] uppercase text-ink/65">
              Every word from real clients
            </span>
          </div>
        </div>
      </Section>

      {/* Leave a Review — Primary CTA */}
      <Section className="py-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-parchment to-parchment/60 border border-brass/25 shadow-[0_30px_60px_-20px_rgba(44,24,16,0.18)]">
            {/* Decorative corner ornaments */}
            <div className="pointer-events-none absolute top-0 left-0 w-16 h-16 border-t border-l border-brass/40" />
            <div className="pointer-events-none absolute top-0 right-0 w-16 h-16 border-t border-r border-brass/40" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-16 h-16 border-b border-l border-brass/40" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 border-b border-r border-brass/40" />

            {/* Subtle brass radial glow */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(181,139,75,0.18) 0%, rgba(181,139,75,0) 60%)",
              }}
            />

            <div className="relative p-8 md:p-14 text-center flex flex-col items-center">
              {/* Brass divider ornament */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brass/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-brass/70" />
                <span className="h-px w-10 bg-brass/50" />
              </div>

              <GoogleLogo className="w-11 h-11 mb-5 drop-shadow-sm" />

              <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
                Loved the craftsmanship?
              </h2>
              <p className="mt-4 max-w-xl text-ink/70 font-elegant text-lg md:text-xl leading-relaxed">
                Share a few words about your experience on Google.
                It helps other homeowners find honest, skilled craftsmen — and means the world to our team.
              </p>

              {/* Animated stars */}
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leave a 5-star review on Google"
                className="group mt-8 inline-flex items-center gap-1.5"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 text-brass/35 transition-all duration-300 ease-out group-hover:text-brass group-hover:scale-110 group-hover:drop-shadow-[0_2px_6px_rgba(181,139,75,0.5)]"
                    style={{ transitionDelay: `${i * 60}ms` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </a>

              {/* Primary CTA */}
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 group inline-flex items-center gap-3 bg-oxblood text-parchment px-8 py-4 text-sm font-medium tracking-[0.14em] uppercase rounded-sm shadow-[0_14px_28px_-8px_rgba(122,29,29,0.45)] hover:shadow-[0_18px_36px_-8px_rgba(122,29,29,0.55)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-parchment">
                  <GoogleLogo className="w-4 h-4" />
                </span>
                Leave Your Review on Google
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <p className="mt-5 text-xs tracking-[0.18em] uppercase text-ink/45">
                Takes less than 30 seconds
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Review — editorial pull-quote */}
      <Section className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-umber/70 font-medium">
              <span className="h-px w-10 bg-umber/35" />
              Featured Review
              <span className="h-px w-10 bg-umber/35" />
            </span>
          </div>

          {featuredReview && (
            <figure className="relative text-center px-4">
              {/* Giant opening quote mark */}
              <span
                aria-hidden="true"
                className="absolute -top-10 left-1/2 -translate-x-1/2 font-display italic text-[10rem] leading-none text-brass/15 select-none pointer-events-none"
              >
                &ldquo;
              </span>

              <div className="relative">
                <div className="flex items-center justify-center gap-1 mb-8">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} className="w-5 h-5 text-brass" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="font-elegant italic text-2xl md:text-[1.75rem] leading-[1.5] text-ink/90 tracking-[-0.005em]">
                  {featuredReview.quote}
                </blockquote>

                <figcaption className="mt-10 flex flex-col items-center">
                  <span className="block w-10 h-px bg-brass/60 mb-5" />
                  <span className="font-display text-lg text-ink">
                    {featuredReview.author}
                  </span>
                  {featuredReview.location && (
                    <span className="mt-1 text-xs tracking-[0.22em] uppercase text-umber/70">
                      {featuredReview.location}
                    </span>
                  )}
                </figcaption>
              </div>
            </figure>
          )}
        </div>
      </Section>

      {/* Regular Reviews Grid */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-umber/70 font-medium">
              <span className="h-px w-10 bg-umber/35" />
              More From Our Clients
              <span className="h-px w-10 bg-umber/35" />
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-umber/15 border border-umber/15 mb-14">
            {regularReviews.map((review, idx) => (
              <figure
                key={idx}
                className="group relative flex flex-col bg-parchment p-8 md:p-9 transition-colors duration-300 hover:bg-parchment/60"
              >
                {/* Brass accent line on hover */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px w-0 bg-brass transition-all duration-500 ease-out group-hover:w-full"
                />

                {/* Header row: number + stars */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display italic text-brass/70 text-sm tracking-wider">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-brass" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <blockquote className="font-elegant text-ink/85 text-[17px] leading-[1.65] mb-8 flex-grow">
                  {review.quote}
                </blockquote>

                <figcaption className="mt-auto">
                  <span className="block w-8 h-px bg-brass/50 mb-3" />
                  <p className="font-display text-ink text-base leading-tight">{review.author}</p>
                  {review.location && (
                    <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-umber/70">
                      {review.location}
                    </p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Secondary link to Google reviews */}
          <div className="text-center">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-ink/70 hover:text-oxblood text-sm font-medium tracking-[0.08em] transition-colors"
            >
              <GoogleLogo className="w-4 h-4" />
              <span className="underline decoration-umber/30 group-hover:decoration-oxblood underline-offset-4">
                Read more reviews on Google
              </span>
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="walnut" className="relative overflow-hidden">
        {/* Subtle brass radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(181,139,75,0.18) 0%, rgba(181,139,75,0) 55%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-brass/45" />
            <span className="w-1.5 h-1.5 rounded-full bg-brass/70" />
            <span className="h-px w-12 bg-brass/45" />
          </div>

          <p className="text-[11px] tracking-[0.32em] uppercase text-brass mb-4">
            Your Project Awaits
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-parchment leading-tight">
            Ready to start <span className="italic text-brass">something</span> of your own?
          </h2>
          <p className="mt-6 text-parchment/70 text-lg leading-relaxed font-elegant max-w-xl mx-auto">
            Join the homeowners who trust Professional Wood Interiors for heirloom-quality cabinetry.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              href="/contact-us"
              className="bg-brass hover:bg-brass/90 text-walnut font-semibold shadow-xl hover:shadow-2xl"
            >
              Get in Touch
            </ButtonLink>
            <ButtonLink
              href="/showroom"
              variant="outline"
              className="border-2 border-parchment/40 text-parchment hover:bg-parchment/10"
            >
              View Our Work
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
