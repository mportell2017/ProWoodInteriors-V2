import Link from "next/link";
import { Card } from "@/components/ui/Card";

// Icons extracted from SoftCTA component
const KitchenIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="6" width="24" height="20" rx="1" />
    <line x1="4" y1="14" x2="28" y2="14" />
    <line x1="16" y1="6" x2="16" y2="14" />
    <line x1="4" y1="20" x2="28" y2="20" />
    <line x1="8" y1="10" x2="12" y2="10" />
    <line x1="20" y1="10" x2="24" y2="10" />
    <line x1="14" y1="17" x2="18" y2="17" />
    <line x1="14" y1="23" x2="18" y2="23" />
  </svg>
);

const BookcaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="4" width="24" height="24" rx="1" />
    <line x1="4" y1="12" x2="28" y2="12" />
    <line x1="4" y1="20" x2="28" y2="20" />
    <rect x="7" y="5" width="2" height="6" />
    <rect x="10" y="6" width="2" height="5" />
    <rect x="13" y="5" width="3" height="6" />
    <rect x="20" y="13" width="2" height="6" />
    <rect x="23" y="14" width="2" height="5" />
    <rect x="8" y="21" width="2" height="6" />
    <rect x="11" y="22" width="3" height="5" />
  </svg>
);

const EntertainmentIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="8" width="28" height="18" rx="1" />
    <rect x="6" y="10" width="12" height="8" rx="0.5" />
    <line x1="20" y1="8" x2="20" y2="26" />
    <line x1="20" y1="17" x2="30" y2="17" />
    <path d="M8 21 Q9 19 10 21 Q11 19 12 21 Q13 19 14 21 Q15 19 16 21" />
  </svg>
);

const RefacingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="6" y="4" width="14" height="24" rx="1" />
    <rect x="8" y="6" width="10" height="9" rx="0.5" />
    <rect x="8" y="17" width="10" height="9" rx="0.5" />
    <rect x="16" y="8" width="12" height="20" rx="1" strokeDasharray="2 2" />
    <path d="M22 4 L22 8" />
    <path d="M20 6 L22 4 L24 6" />
  </svg>
);

interface Service {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Cabinet Refacing',
    href: '/services/cabinet-refacing',
    icon: RefacingIcon,
    description: 'Transform your kitchen for 40-50% less than full replacement with custom cabinet doors and drawer fronts.',
    features: [
      'Custom door styles',
      'Quick installation',
      'Minimal disruption'
    ]
  },
  {
    title: 'Custom Kitchen Cabinetry',
    href: '/services/custom-kitchen-cabinetry',
    icon: KitchenIcon,
    description: 'Handcrafted cabinets built to fit your exact space with solid wood construction and premium finishes.',
    features: [
      'Dovetail drawers',
      'Soft-close hardware',
      'Perfect fit guaranteed'
    ]
  },
  {
    title: 'Custom Bookcases',
    href: '/services/custom-bookcases',
    icon: BookcaseIcon,
    description: 'Floor-to-ceiling built-in bookcases that maximize storage while adding elegant architectural detail.',
    features: [
      'Custom sizing',
      'Any wood species',
      'Integrated lighting'
    ]
  },
  {
    title: 'Entertainment Centers',
    href: '/services/entertainment-centers',
    icon: EntertainmentIcon,
    description: 'Beautiful media centers with built-in cable management and storage for all your entertainment needs.',
    features: [
      'Custom dimensions',
      'Hidden storage',
      'Fireplace integration'
    ]
  }
];

interface ServiceGridProps {
  city: string;
}

export function ServiceGrid({ city }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link key={service.href} href={service.href} className="group">
            <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brass/10 flex items-center justify-center group-hover:bg-brass/20 transition-colors">
                  <Icon className="w-7 h-7 text-brass" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-ink mb-2 group-hover:text-brass transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-ink/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-ink/60">
                        <svg className="w-4 h-4 text-brass flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-brass font-medium text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
