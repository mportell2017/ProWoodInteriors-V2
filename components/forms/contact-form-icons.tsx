type IconProps = { className?: string };

export const KitchenIcon = ({ className }: IconProps) => (
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

export const BathroomIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="12" width="24" height="14" rx="1" />
    <line x1="16" y1="12" x2="16" y2="26" />
    <path d="M8 12 L8 9 Q16 6 24 9 L24 12" />
    <line x1="8" y1="19" x2="12" y2="19" />
    <line x1="20" y1="19" x2="24" y2="19" />
  </svg>
);

export const BookcaseIcon = ({ className }: IconProps) => (
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

export const EntertainmentIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="8" width="28" height="18" rx="1" />
    <rect x="6" y="10" width="12" height="8" rx="0.5" />
    <line x1="20" y1="8" x2="20" y2="26" />
    <line x1="20" y1="17" x2="30" y2="17" />
    <path d="M8 21 Q9 19 10 21 Q11 19 12 21 Q13 19 14 21 Q15 19 16 21" />
  </svg>
);

export const HomeOfficeIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="16" width="28" height="4" rx="0.5" />
    <line x1="4" y1="20" x2="4" y2="28" />
    <line x1="28" y1="20" x2="28" y2="28" />
    <rect x="4" y="4" width="10" height="10" rx="0.5" />
    <rect x="18" y="4" width="10" height="10" rx="0.5" />
    <line x1="4" y1="9" x2="14" y2="9" />
    <line x1="18" y1="9" x2="28" y2="9" />
    <rect x="12" y="21" width="8" height="3" rx="0.5" />
    <line x1="15" y1="22.5" x2="17" y2="22.5" />
  </svg>
);

export const RefacingIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="6" y="4" width="14" height="24" rx="1" />
    <rect x="8" y="6" width="10" height="9" rx="0.5" />
    <rect x="8" y="17" width="10" height="9" rx="0.5" />
    <rect x="16" y="8" width="12" height="20" rx="1" strokeDasharray="2 2" />
    <path d="M22 4 L22 8" />
    <path d="M20 6 L22 4 L24 6" />
  </svg>
);

export const MudroomIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="4" width="24" height="24" rx="1" />
    <line x1="12" y1="4" x2="12" y2="28" />
    <line x1="20" y1="4" x2="20" y2="28" />
    <line x1="4" y1="16" x2="28" y2="16" />
    <circle cx="8" cy="10" r="1.5" />
    <circle cx="16" cy="10" r="1.5" />
    <circle cx="24" cy="10" r="1.5" />
    <line x1="4" y1="22" x2="28" y2="22" strokeWidth={2} />
  </svg>
);

export const OtherIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M22 4 L28 10 L12 26 L4 28 L6 20 Z" />
    <line x1="18" y1="8" x2="24" y2="14" />
    <line x1="22" y1="22" x2="22" y2="28" />
    <line x1="19" y1="25" x2="25" y2="25" />
  </svg>
);

export type ProjectType = {
  id: string;
  label: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

export const projectTypes: ProjectType[] = [
  { id: "kitchen", label: "Kitchen", Icon: KitchenIcon },
  { id: "bathroom", label: "Bathroom", Icon: BathroomIcon },
  { id: "bookcases", label: "Bookcases", Icon: BookcaseIcon },
  { id: "entertainment", label: "Entertainment", Icon: EntertainmentIcon },
  { id: "home-office", label: "Home Office", Icon: HomeOfficeIcon },
  { id: "refacing", label: "Refacing", Icon: RefacingIcon },
  { id: "mudroom", label: "Mudroom", Icon: MudroomIcon },
  { id: "other", label: "Other", Icon: OtherIcon },
];

export const timelineOptions = [
  { value: "", label: "Select timeline..." },
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "researching", label: "Just researching" },
];
