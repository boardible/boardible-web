export type IconName =
  | "smartphone"
  | "tv"
  | "groups"
  | "gamepad"
  | "bolt"
  | "cloudUpload"
  | "analytics"
  | "devices"
  | "globe"
  | "network"
  | "share";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "smartphone":
      return (
        <svg {...commonProps}>
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 5.5H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="18.2" r="1" fill="currentColor" />
        </svg>
      );
    case "tv":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 20H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 16V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "groups":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4.5 18.5C5.2 15.9 7.1 14.5 9.8 14.5C12.5 14.5 14.3 15.9 15 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14.2 14.8C16.2 15 17.8 16.2 18.8 18.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "gamepad":
      return (
        <svg {...commonProps}>
          <path d="M7.5 8.5H16.5C18.8 8.5 20.5 10.2 20.5 12.5C20.5 14.7 19.1 16.6 17.1 17.2L15.6 13.8H8.4L6.9 17.2C4.9 16.6 3.5 14.7 3.5 12.5C3.5 10.2 5.2 8.5 7.5 8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 11.2V14.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.5 12.7H10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="15.5" cy="11.7" r="0.9" fill="currentColor" />
          <circle cx="17.4" cy="13.6" r="0.9" fill="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...commonProps}>
          <path d="M13.5 2.5L6.5 13H11L10.5 21.5L17.5 11H13L13.5 2.5Z" fill="currentColor" />
        </svg>
      );
    case "cloudUpload":
      return (
        <svg {...commonProps}>
          <path d="M8 18.5H17C19.5 18.5 21.5 16.5 21.5 14C21.5 11.7 19.8 9.9 17.7 9.6C17 6.8 14.5 4.8 11.6 4.8C8.5 4.8 5.8 7.1 5.4 10.1C3.4 10.5 2 12.2 2 14.3C2 16.6 3.9 18.5 6.2 18.5H8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15.5V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.8 11.8L12 9.5L14.2 11.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M4 19.5H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="6" y="11" width="2.8" height="6.5" rx="1" fill="currentColor" />
          <rect x="10.6" y="8" width="2.8" height="9.5" rx="1" fill="currentColor" />
          <rect x="15.2" y="5" width="2.8" height="12.5" rx="1" fill="currentColor" />
        </svg>
      );
    case "devices":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="13" height="9" rx="1.8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 18H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.5 14V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="17.5" y="7.5" width="3.5" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "globe":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.8 12H20.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 3.8C14.4 6.1 15.7 9 15.7 12C15.7 15 14.4 17.9 12 20.2C9.6 17.9 8.3 15 8.3 12C8.3 9 9.6 6.1 12 3.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "network":
      return (
        <svg {...commonProps}>
          <path d="M4 8.5C8.8 4.2 15.2 4.2 20 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6.8 11.6C10 8.8 14 8.8 17.2 11.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.7 14.7C11.3 13.4 12.7 13.4 14.3 14.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="18" r="1.2" fill="currentColor" />
        </svg>
      );
    case "share":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="12" r="2" fill="currentColor" />
          <circle cx="18" cy="7" r="2" fill="currentColor" />
          <circle cx="18" cy="17" r="2" fill="currentColor" />
          <path d="M7.8 11L16.2 7.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.8 13L16.2 16.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}