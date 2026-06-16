import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MobileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function AiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="6" width="14" height="12" rx="3" />
      <path d="M9 2v4M15 2v4M9 11v2M15 11v2M3 11h2M3 14h2M19 11h2M19 14h2" />
    </svg>
  );
}

export function WebIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 21h10M12 18v3" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
      <path d="M14.5 4.5C17 2 21 3 21 3s1 4-1.5 6.5L13 16l-5-5 6.5-6.5z" />
      <circle cx="15.5" cy="8.5" r="1.5" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 18 18H7z" />
    </svg>
  );
}

export function DesignIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="6.5" cy="11.5" r="2.5" />
      <circle cx="16.5" cy="14.5" r="2.5" />
      <path d="M9 10l2.5-2M9 13l5 1.2" />
    </svg>
  );
}

const map: Record<string, (props: IconProps) => React.ReactElement> = {
  mobile: MobileIcon,
  ai: AiIcon,
  web: WebIcon,
  rocket: RocketIcon,
  cloud: CloudIcon,
  design: DesignIcon,
};

export function ServiceIcon({ name, ...props }: { name: string } & IconProps) {
  const Cmp = map[name] ?? WebIcon;
  return <Cmp {...props} />;
}

export function LogoMark(props: IconProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" {...props}>
      <rect width="32" height="32" rx="8" fill="url(#g)" />
      <path
        d="M21.5 12.5a6 6 0 1 0 .5 5.5h-5"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#6d5dfc" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}
