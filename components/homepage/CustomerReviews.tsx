import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

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

export function CustomerReviews() {
  const featuredReview = reviews.find((r) => r.featured);
  const regularReviews = reviews.filter((r) => !r.featured);

  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Heading eyebrow="Customer Reviews" accent="italic">
            What Our Clients Say
          </Heading>
          <p className="mt-6 text-ink/70 text-lg max-w-3xl mx-auto leading-relaxed">
            See what homeowners across St. Louis and surrounding areas say about working with Professional Wood Interiors.
          </p>
        </div>

        {/* Featured Review */}
        {featuredReview && (
          <Card className="p-8 md:p-12 mb-12 border-2 border-brass/20 bg-parchment/90">
            <div className="flex flex-col items-center text-center">
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

        {/* Regular Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularReviews.map((review, idx) => (
            <Card key={idx} className="p-6 flex flex-col">
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
              <span className="flex items-center gap-2">
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
  );
}
