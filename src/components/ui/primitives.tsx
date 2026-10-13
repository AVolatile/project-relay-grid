import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";
export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  icon?: IconName | false;
  className?: string;
}) {
  return (
    <Link className={`button button-${variant} ${className}`} href={href}>
      {children}
      {icon && <Icon name={icon} size={17} />}
    </Link>
  );
}
export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "success" | "warning" | "danger";
}) {
  return (
    <span className={`badge badge-${tone}`}>
      <span className="status-dot" />
      {children}
    </span>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
export function SectionIntro({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-intro ${light ? "on-dark" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function Avatar({
  initials,
  size = "normal",
}: {
  initials: string;
  size?: "normal" | "small";
}) {
  return (
    <span className={`avatar avatar-${size}`} aria-hidden="true">
      {initials}
    </span>
  );
}
