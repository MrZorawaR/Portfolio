"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "services" },
  { path: "/resume", name: "resume" },
  { path: "/work", name: "work" },
];
const Nav = () => {
    const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              pathname === link.path && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
            > 
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
