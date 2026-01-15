"use client";

import { cn } from "@/lib/cn";

interface ContactButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
}

export function ContactButton({ variant = "primary", className }: ContactButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (variant === "secondary") {
    return (
      <a
        href="#contact"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300",
          "border-2 border-brass text-brass hover:bg-brass hover:text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-100",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
          className
        )}
      >
        <span>Contact Us</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    );
  }

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg",
        "bg-oxblood text-white hover:bg-oxblood/90 hover:shadow-xl hover:scale-105 active:scale-100",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
        className
      )}
    >
      <span>Get Your Free Consultation</span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
}
