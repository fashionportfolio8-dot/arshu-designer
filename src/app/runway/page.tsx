"use client";

import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";

function RunwayFigure({ variant }: { variant: "feminine" | "masculine" }) {
  return (
    <div className={`runway-figure runway-figure--${variant}`} aria-hidden="true">
      <span className="figure-head" />
      <span className="figure-neck" />
      <span className="figure-body" />
      <span className="figure-arm figure-arm--left" />
      <span className="figure-arm figure-arm--right" />
      <span className="figure-skirt" />
      <span className="figure-leg figure-leg--left" />
      <span className="figure-leg figure-leg--right" />
      <span className="figure-train" />
    </div>
  );
}

export default function RunwayPage() {
  return (
    <main className="runway-page min-h-screen overflow-hidden bg-[#eee8de] text-[#29251f]">
      <header className="relative z-20 flex items-center justify-between px-7 py-7 md:px-16">
        <a href="/" className="display-title text-xl tracking-[.12em]">ARSHU<span className="ml-2 font-sans text-[8px] tracking-[.3em]">DESIGNER</span></a>
        <a href="/" className="eyebrow text-[#6d6255] transition-colors hover:text-[#29251f]">← Back to portfolio</a>
      </header>

      <section className="relative px-6 pb-20 pt-14 md:px-16 md:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[650px] bg-[radial-gradient(ellipse_at_50%_22%,rgba(184,157,117,.2),transparent_66%)]" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[#987d58]">The digital atelier · runway study 001</p>
              <h1 className="display-title mt-7 text-[clamp(4rem,10vw,9.5rem)] leading-[.88]">A walk<br /><i>between worlds.</i></h1>
            </div>
            <p className="max-w-sm pb-2 text-sm leading-7 text-[#766b5e]">An imagined runway where the poetry of Indian craft meets the clarity of contemporary couture.</p>
          </div>

          <div className="runway-stage relative mt-16 min-h-[580px] overflow-hidden border border-[#d8cdbd] md:min-h-[720px]">
            <div className="stage-ceiling" />
            <div className="stage-halo" />
            <div className="stage-portal stage-portal--left" />
            <div className="stage-portal stage-portal--right" />
            <div className="stage-floor" />
            <div className="stage-centerline" />
            <div className="stage-caption stage-caption--top"><span>ARSHU / COUTURE PRESENTATION</span><span>NEW DELHI · INDIA</span></div>
            <div className="stage-light stage-light--one" />
            <div className="stage-light stage-light--two" />
            <div className="stage-light stage-light--three" />
            <div className="stage-model stage-model--one"><RunwayFigure variant="feminine" /></div>
            <div className="stage-model stage-model--two"><RunwayFigure variant="masculine" /></div>
            <div className="stage-title">
              <p className="eyebrow text-[#f1e8da]/70">Tradition, reimagined</p>
              <p className="display-title mt-3 text-4xl text-[#fffaf1] md:text-6xl">The art of<br /><i>becoming.</i></p>
            </div>
            <div className="stage-caption stage-caption--bottom"><span>01 — 02 / THE FIRST MOVEMENT</span><span>SCROLL TO EXPLORE <ArrowDown className="inline" size={12} /></span></div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[9px] uppercase tracking-[.2em] text-[#8b7c69]"><span>Concept environment · sculptural ivory architecture</span><span>Motion study / 2026</span></div>
        </div>
      </section>

      <section className="bg-[#f7f3ec] px-7 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-end">
            <div><p className="eyebrow text-[#987d58]">The casting / 002</p><h2 className="display-title mt-5 text-5xl leading-[.98] md:text-7xl">Two expressions.<br /><i>One language.</i></h2></div>
            <p className="max-w-lg text-sm leading-7 text-[#766b5e]">The ARSHU runway celebrates the full spectrum of Indo-Western design: expressive drape, thoughtful tailoring, hand-worked surfaces and silhouettes made for movement.</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <article className="look-study look-study--feminine">
              <div className="look-art"><RunwayFigure variant="feminine" /><span className="look-index">01 / WOMENSWEAR</span><span className="look-mark">Drape<br />in motion</span></div>
              <div className="flex items-start justify-between gap-4 border-b border-[#d9d0c3] py-5"><div><h3 className="display-title text-3xl">The fluid silhouette</h3><p className="mt-2 text-xs text-[#817568]">Sculpted structure · fluid drape · intricate detail</p></div><MoveUpRight size={17} className="mt-1 text-[#987d58]" /></div>
            </article>
            <article className="look-study look-study--masculine">
              <div className="look-art"><RunwayFigure variant="masculine" /><span className="look-index">02 / MENSWEAR</span><span className="look-mark">Quiet<br />confidence</span></div>
              <div className="flex items-start justify-between gap-4 border-b border-[#d9d0c3] py-5"><div><h3 className="display-title text-3xl">The tailored silhouette</h3><p className="mt-2 text-xs text-[#817568]">Modern proportion · layered texture · craft detail</p></div><MoveUpRight size={17} className="mt-1 text-[#987d58]" /></div>
            </article>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-[#d9d0c3] pt-7 md:flex-row md:items-center">
            <p className="max-w-xl text-xs leading-6 text-[#766b5e]">This is an original visual concept built with CSS illustration and motion. Final garment photography, detailed 3D models and collection-specific styling can be added when your fashion assets are ready.</p>
            <a href="/final-outfit" className="eyebrow inline-flex items-center gap-3">Explore final looks <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-4 px-7 py-8 md:flex-row md:items-center md:px-16"><p className="eyebrow text-[#8b7c69]">© 2026 ARSHU DESIGNER</p><a href="/" className="eyebrow text-[#987d58]">Return to the beginning ↑</a></footer>
    </main>
  );
}
