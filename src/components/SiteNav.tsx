"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Vision", "/#vision"],
  ["Collections", "/#collections"],
  ["Studio archive", "/#archive"],
  ["Journal", "/#journal"],
  ["About", "/about"],
  ["Contact", "/#contact"]
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 px-6 py-6 md:px-12">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-[1600px] items-center justify-between">
        <a href="/" aria-label="ARSHU DESIGNER home" className="display-title text-[25px] tracking-[.08em]">
          ARSHU<span className="ml-1 align-top text-[9px] tracking-[.2em]">®</span>
          <span className="block font-sans text-[8px] tracking-[.34em]">DESIGNER</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="eyebrow transition-opacity hover:opacity-50">
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-[#24211e]/30 p-2 lg:hidden"
        >
          {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full flex flex-col gap-6 border-t border-[#24211e]/10 bg-[#f4f0e9] px-7 py-8 shadow-lg lg:hidden"
        >
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="eyebrow">
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
