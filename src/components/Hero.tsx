"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";

const SceneCanvas = dynamic(() => import("@/components/SceneCanvas"), { ssr: false });

export default function Hero() {
  return <section className="relative flex min-h-[760px] h-[100svh] max-h-[1100px] flex-col overflow-hidden bg-[#e9e2d7]">
    <SiteNav/>
    <div className="absolute inset-0 opacity-70"><SceneCanvas/></div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#e9e2d7] via-[#e9e2d7]/85 to-transparent md:via-[#e9e2d7]/55"/>
    <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 items-center px-7 pb-16 pt-32 md:px-16">
      <div className="max-w-[720px]">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="eyebrow mb-8">An exploration of identity · Est. 2026</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .12 }} className="display-title text-[clamp(4.2rem,10vw,9.5rem)] leading-[.83]">Tradition,<br/><i className="font-normal">reimagined.</i></motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .35 }} className="mt-9 max-w-[360px] text-[13px] leading-7 text-[#5c5147]">Where Indian Craft Meets Contemporary Fashion. A study in the poetry of heritage, form and the modern Indian wardrobe.</motion.p>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} href="#collections" className="outline-button pointer-events-auto mt-9 inline-flex">Explore the collection <span className="ml-4">↗</span></motion.a>
      </div>
    </div>
    <div className="relative z-10 flex items-end justify-between px-7 pb-7 md:px-16">
      <span className="eyebrow text-[#6c5e50]">01 — The art of becoming</span><span className="eyebrow text-[#6c5e50]">Scroll to discover ↓</span>
    </div>
  </section>;
}