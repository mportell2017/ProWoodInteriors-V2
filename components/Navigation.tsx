"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const PHONE = "(314) 437-9988";

export default function Navigation() {
  const [logoFailed, setLogoFailed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinkClassName =
    "relative text-ink/90 hover:text-oxblood transition-all duration-300 text-base font-elegant font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment rounded-sm px-2.5 py-2 whitespace-nowrap after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-oxblood after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center";

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "bg-parchment/90 backdrop-blur-md border-umber/20 shadow-lg"
            : "bg-parchment border-umber/15 shadow-sm"
        )}
      >
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment"
          >
            {logoFailed ? (
              <span className="font-elegant text-xl tracking-wide text-ink">
                Professional Wood Interiors
              </span>
            ) : (
              <Image
                src="/images/pro-wood-interiors-logo.webp"
                alt="Professional Wood Interiors Logo"
                width={200}
                height={64}
                priority
                className="h-12 w-auto"
                onError={() => setLogoFailed(true)}
              />
            )}
          </Link>

          {/* Main Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* Decorative divider */}
            <div className="h-8 w-px bg-umber/20 mx-3" />
            
            <Link href="/" className={navLinkClassName}>
              Home
            </Link>
            <Link href="/our-story" className={navLinkClassName}>
              Our Story
            </Link>
            <div className="relative group">
              <button className={`${navLinkClassName} inline-flex items-center gap-1`}>
                What We Do
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-sm shadow-xl border border-umber/15 py-2 min-w-[240px]">
                  <Link
                    href="/services/custom-kitchen-cabinetry"
                    className="block px-4 py-2.5 text-ink/80 hover:text-oxblood hover:bg-parchment/50 transition-colors font-sans text-sm"
                  >
                    Custom Kitchen Cabinetry
                  </Link>
                  <Link
                    href="/services/cabinet-refacing"
                    className="block px-4 py-2.5 text-ink/80 hover:text-oxblood hover:bg-parchment/50 transition-colors font-sans text-sm"
                  >
                    Cabinet Refacing
                  </Link>
                  <Link
                    href="/services/custom-bookcases"
                    className="block px-4 py-2.5 text-ink/80 hover:text-oxblood hover:bg-parchment/50 transition-colors font-sans text-sm"
                  >
                    Custom Bookcases
                  </Link>
                  <Link
                    href="/services/entertainment-centers"
                    className="block px-4 py-2.5 text-ink/80 hover:text-oxblood hover:bg-parchment/50 transition-colors font-sans text-sm"
                  >
                    Entertainment Centers
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/reviews" className={navLinkClassName}>
              Reviews
            </Link>
            <Link href="/showroom" className={navLinkClassName}>
              Show Room
            </Link>

            {/* Decorative divider */}
            <div className="h-8 w-px bg-umber/20 mx-3" />
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone with icon */}
            <a 
              href="tel:3144379988" 
              className="flex items-center gap-2 text-ink/80 hover:text-oxblood transition-colors group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-oxblood/10 group-hover:bg-oxblood/20 transition-colors">
                <svg className="w-4 h-4 text-oxblood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="font-sans text-base font-semibold tracking-normal">
                {PHONE}
              </span>
            </a>
            
            {/* Contact button with improved styling */}
            <ButtonLink 
              href="/contact-us" 
              size="sm"
              className="bg-oxblood hover:bg-oxblood/90 text-white font-semibold shadow-md hover:shadow-lg shadow-oxblood/20 border border-oxblood transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </ButtonLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink rounded-md hover:bg-umber/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-parchment transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>
    </nav>

      {/* Mobile Menu Drawer - Outside nav for proper positioning */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-walnut/60 backdrop-blur-sm z-[100] lg:hidden animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-parchment shadow-2xl z-[101] lg:hidden overflow-y-auto animate-slideInRight">
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-umber/20">
                <span className="font-elegant text-xl text-ink">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-ink rounded-md hover:bg-umber/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-ink/90 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors font-elegant font-semibold"
                  >
                    Home
                  </Link>
                  <Link
                    href="/our-story"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-ink/90 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors font-elegant font-semibold"
                  >
                    Our Story
                  </Link>

                  {/* Services Submenu */}
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm font-semibold text-umber uppercase tracking-wider">
                      What We Do
                    </div>
                    <div className="ml-4 space-y-1">
                      <Link
                        href="/services/custom-kitchen-cabinetry"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-ink/80 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors"
                      >
                        Custom Kitchen Cabinetry
                      </Link>
                      <Link
                        href="/services/cabinet-refacing"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-ink/80 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors"
                      >
                        Cabinet Refacing
                      </Link>
                      <Link
                        href="/services/custom-bookcases"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-ink/80 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors"
                      >
                        Custom Bookcases
                      </Link>
                      <Link
                        href="/services/entertainment-centers"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-ink/80 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors"
                      >
                        Entertainment Centers
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/reviews"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-ink/90 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors font-elegant font-semibold"
                  >
                    Reviews
                  </Link>
                  <Link
                    href="/showroom"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-ink/90 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors font-elegant font-semibold"
                  >
                    Show Room
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-ink/90 hover:text-oxblood hover:bg-umber/5 rounded-lg transition-colors font-elegant font-semibold"
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-umber/20 space-y-4">
                {/* Phone */}
                <a
                  href="tel:3144379988"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-umber/5 transition-colors"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-oxblood/10">
                    <svg className="w-5 h-5 text-oxblood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="font-sans font-semibold text-ink">
                    {PHONE}
                  </span>
                </a>

                {/* Contact Button */}
                <ButtonLink
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-oxblood hover:bg-oxblood/90 text-white font-semibold shadow-md"
                >
                  <span className="flex items-center justify-center gap-2">
                    Contact Us
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
