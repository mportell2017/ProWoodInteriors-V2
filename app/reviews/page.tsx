import Navigation from "@/components/Navigation";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

// Star Rating Component
function StarRating() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-brass"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

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

export default function ReviewsPage() {
  const featuredReview = reviews.find((r) => r.featured);
  const regularReviews = reviews.filter((r) => !r.featured);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Heading eyebrow="Customer Reviews" accent="italic">
            What Our Clients Say
          </Heading>
          <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
            See what homeowners across St. Louis and surrounding areas say about working with Professional Wood Interiors.
          </p>
        </div>
      </Section>

      {/* Featured Review */}
      <Section className="py-0">
        <div className="max-w-5xl mx-auto">
          {featuredReview && (
            <Card className="p-8 md:p-12 mb-12 border-2 border-brass/20 bg-parchment/90">
              <div className="flex flex-col items-center text-center">
                <StarRating />
                <svg
                  className="w-12 h-12 text-brass/40 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-ink/90 text-lg leading-relaxed font-elegant mb-8 max-w-4xl">
                  {featuredReview.quote}
                </blockquote>
                <div>
                  <p className="font-semibold text-ink text-base">{featuredReview.author}</p>
                  {featuredReview.location && (
                    <p className="text-ink/60 text-sm mt-1">{featuredReview.location}</p>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>
      </Section>

      {/* Regular Reviews Grid */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regularReviews.map((review, idx) => (
              <Card key={idx} className="p-6 flex flex-col">
                <StarRating />
                <svg
                  className="w-8 h-8 text-brass/30 mb-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-ink/80 text-sm leading-relaxed mb-6 flex-grow">
                  {review.quote}
                </blockquote>
                <div className="border-t border-umber/15 pt-4">
                  <p className="font-semibold text-ink text-sm">{review.author}</p>
                  {review.location && (
                    <p className="text-ink/60 text-xs mt-1">{review.location}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <ButtonLink
                href="https://share.google/RBU2XmuVW6UzTBFrR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-oxblood text-white hover:bg-oxblood/90 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-3">
                  {/* Google Logo */}
                  <svg className="w-5 h-5 opacity-30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" fillOpacity="0.5"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" fillOpacity="0.5"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" fillOpacity="0.5"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" fillOpacity="0.5"/>
                  </svg>
                  Read More Reviews on Google
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </ButtonLink>
              <a
                href="https://share.google/RBU2XmuVW6UzTBFrR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/70 hover:text-oxblood text-sm font-medium transition-colors underline decoration-umber/30 hover:decoration-oxblood underline-offset-4"
              >
                Leave a review on Google
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="walnut">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-elegant font-semibold text-parchment mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-parchment/80 text-lg mb-8 leading-relaxed">
            Join the homeowners who trust Professional Wood Interiors for their custom cabinetry needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
