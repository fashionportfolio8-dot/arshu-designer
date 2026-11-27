"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["The Vision", "#vision"], ["Collections", "#collections"], ["The Journal", "#journal"], ["Contact", "#contact"]];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-20 px-6 py-6 md:px-12">
    <nav className="mx-auto flex max-w-[1600px] items-center justify-between">
      <a href="#" className="display-title text-[25px] tracking-[.08em]">ARSHU<span className="ml-1 text-[9px] align-top tracking-[.2em]">®</span><span className="block font-sans text-[8px] tracking-[.34em]">DESIGNER</span></a>
      <div className="hidden items-center gap-9 md:flex">{links.map(([label, href]) => <a key={label} href={href} className="eyebrow transition-opacity hover:opacity-50">{label}</a>)}</div>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden">{open ? <X size={21}/> : <Menu size={21}/>}</button>
    </nav>
    {open && <div className="absolute left-0 right-0 top-full flex flex-col gap-6 bg-[#f4f0e9] px-7 py-8 md:hidden">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="eyebrow">{label}</a>)}</div>}
  </header>;
}