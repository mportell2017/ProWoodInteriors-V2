"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Container } from "./ui/Container";

export default function Footer() {
  const settings = useQuery(api.queries.getSiteSettings);
  const [logoFailed, setLogoFailed] = useState(false);

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/our-story", label: "Our Story" },
    { href: "/services", label: "Services" },
    { href: "/showroom", label: "Showroom" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const services = [
    { href: "/services/custom-cabinetry", label: "Custom Cabinetry" },
    { href: "/services/cabinet-refacing", label: "Cabinet Refacing" },
    { href: "/services/bookcases", label: "Bookcases" },
    { href: "/services/entertainment-centers", label: "Entertainment Centers" },
  ];

  const serviceAreas = [
    { href: "/locations/st-louis", label: "St. Louis" },
    { href: "/locations/chesterfield", label: "Chesterfield" },
    { href: "/locations/clayton", label: "Clayton" },
    { href: "/locations/wildwood", label: "Wildwood" },
    { href: "/locations/st-peters", label: "St. Peters" },
    { href: "/locations/st-charles", label: "St. Charles" },
    { href: "/locations/wentzville", label: "Wentzville" },
  ];

  return (
    <footer className="bg-parchment border-t border-umber/40 py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Left Column */}
          <div>
            <Link href="/" className="block mb-4">
              {logoFailed ? (
                <span className="font-serif text-base tracking-wide text-primary-brown">
                  Professional Wood Interiors
                </span>
              ) : (
                <Image
                  src="/images/pro-wood-interiors-logo.webp"
                  alt="Professional Wood Interiors Logo"
                  width={200}
                  height={64}
                  className="h-10 w-auto"
                  onError={() => setLogoFailed(true)}
                />
              )}
            </Link>
            <p className="text-sm text-primary-brown/80 mb-4">
              Your trusted custom cabinetry and built-ins for St. Louis, Missouri since 1985.
            </p>
            {settings && (
              <>
                <p className="text-sm text-primary-brown/80 mb-2">{settings.address}</p>
                <p className="text-sm text-primary-brown/80">
                  <a href={`tel:${settings.phone.replace(/\D/g, "")}`} className="hover:text-primary-red">
                    {settings.phone}
                  </a>
                </p>
              </>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-primary-brown mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-brown/80 hover:text-primary-red transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-serif font-semibold text-primary-brown mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-sm text-primary-brown/80 hover:text-primary-red transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-serif font-semibold text-primary-brown mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-sm text-primary-brown/80 hover:text-primary-red transition-colors">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-tan/40 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-brown/60">
            © {new Date().getFullYear()} Copyright Professional Wood Interiors
          </p>
          <p className="text-xs text-primary-brown/60 mt-4 md:mt-0">
            Developed by [Your Name]
          </p>
        </div>
      </Container>
    </footer>
  );
}
