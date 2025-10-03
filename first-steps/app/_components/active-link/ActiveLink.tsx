"use client";
import Link from "next/link";
import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";
interface ActiveLinksProps {
  path: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ path, children }: ActiveLinksProps) => {
  const isActive = usePathname() === path;

  return (
    <Link
      href={path}
      className={`${styles.link} ${isActive ? styles["active-link"] : ""}`}
    >
      {children}
    </Link>
  );
};
