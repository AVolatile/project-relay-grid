import Link from "next/link";
export function Symbol({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`brand-symbol ${className}`}
      width="32"
      height="32"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="9" fill="currentColor" />
      <path
        d="M11 29V11h11v9h7v9H18V20"
        fill="none"
        stroke="#14201c"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M26 11h3v3h-3z" fill="#14201c" />
    </svg>
  );
}
export function Logo({
  href = "/",
  light = false,
}: {
  href?: string;
  light?: boolean;
}) {
  return (
    <Link
      className={`logo ${light ? "logo-light" : ""}`}
      href={href}
      aria-label="RelayGrid home"
    >
      <Symbol />
      <span>
        RelayGrid<span className="logo-period">.</span>
      </span>
    </Link>
  );
}
