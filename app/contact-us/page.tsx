import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/ui/Container';
import { SoftCTA } from '@/components/homepage/SoftCTA';

export const metadata: Metadata = {
  title: 'Contact Us | Professional Wood Interiors',
  description:
    'Get in touch with Professional Wood Interiors. Call (314) 437-9988, schedule a showroom visit, or send us a message. Serving St. Louis since 1980.',
  openGraph: {
    title: 'Contact Us | Professional Wood Interiors',
    description:
      'Get in touch with Professional Wood Interiors. Call, visit, or send us a message.',
    type: 'website',
    siteName: 'Professional Wood Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Professional Wood Interiors',
    description:
      'Get in touch with Professional Wood Interiors. Call, visit, or send us a message.',
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: 'Call Us',
      description: '(314) 437-9988',
      actionLabel: 'Call Now',
      actionHref: 'tel:3144379988',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email Us',
      description: 'info@prowoodinteriors.com',
      actionLabel: 'Send Email',
      actionHref: 'mailto:info@prowoodinteriors.com',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Visit Our Showroom',
      description: 'St. Louis, Missouri',
      actionLabel: 'Schedule a Visit',
      actionHref: '#contact-form',
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading accent="italic" as="h1">
              Get in Touch
            </Heading>
            <p className="mt-8 text-xl text-ink/70 leading-relaxed font-elegant">
              We&apos;d love to hear about your project. Whether you have detailed plans or just
              an idea, we&apos;re here to help. Give us a call, stop by our showroom, or send us a
              message below.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Methods Section */}
      <Section className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.actionHref}
                  className="group flex flex-col items-center text-center p-8 bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 mb-6 text-brass flex items-center justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-elegant font-semibold text-ink mb-3">
                    {method.title}
                  </h3>
                  <p className="text-lg text-ink/70 leading-relaxed mb-4">{method.description}</p>
                  <span className="inline-flex items-center text-brass font-semibold group-hover:gap-2 transition-all">
                    {method.actionLabel}
                    <svg
                      className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Showroom Appointment Call-Out */}
      <Section tone="parchment" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading as="h2" showDivider={false}>
              Visit Our Showroom
            </Heading>
            <p className="mt-6 text-lg text-ink/80 leading-relaxed font-sans">
              See our craftsmanship firsthand and discuss your project in person. We&apos;ll show
              you wood samples, door styles, finish options, and examples of our work. Our showroom
              is located in St. Louis and visits are by appointment.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:3144379988"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-walnut bg-brass hover:bg-brass/90 rounded-sm shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (314) 437-9988
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-ink border-2 border-ink/30 hover:bg-white/50 rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                Send a Message
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <div id="contact-form">
        <SoftCTA />
      </div>
    </>
  );
}
