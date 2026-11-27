import Hero from "@/components/Hero";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  { n: "01", title: "Heritage, in motion", copy: "Traditional Indian techniques find new expression through unexpected forms, textures and proportions." },
  { n: "02", title: "A modern sensibility", copy: "Contemporary silhouettes, thoughtful restraint and a point of view shaped by the world around us." },
  { n: "03", title: "Made to be felt", copy: "An ongoing conversation between material, memory and the hands that bring every idea to life." }
];

export default function Home() {
  return <main className="site-shell grain">
    <Hero/>
    <section id="vision" className="bg-[#f4f0e9] px-7 py-28 md:px-16 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[.7fr_1.3fr]">
        <div><p className="eyebrow text-[#9a8260]">The philosophy / 001</p><p className="display-title mt-5 text-4xl md:text-5xl">A dialogue between<br/>two worlds.</p></div>
        <div><h2 className="display-title max-w-[850px] text-4xl leading-[1.12] md:text-6xl">Rooted in the richness of Indian craft. Designed for the rhythm of <i>today.</i></h2><p className="mt-8 max-w-[570px] text-sm leading-7 text-[#71665b]">ARSHU DESIGNER explores the space where cultural memory meets contemporary expression — creating an Indo-Western language that honours its origins while looking forward.</p></div>
      </div>
    </section>
    <section id="collections" className="bg-[#e9e2d7] px-7 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex items-end justify-between"><div><p className="eyebrow text-[#9a8260]">Selected expressions / 002</p><h2 className="display-title mt-4 text-5xl md:text-7xl">The language<br/><i>of form.</i></h2></div><span className="eyebrow hidden md:block">Craft · Culture · Couture</span></div>
        <div className="grid gap-px bg-[#b9ad9d] md:grid-cols-3">{pillars.map((p) => <article key={p.n} className="group min-h-[300px] bg-[#e9e2d7] p-8 transition-colors hover:bg-[#ded4c6] md:p-10"><p className="eyebrow text-[#9a8260]">{p.n} / Perspective</p><h3 className="display-title mt-20 text-3xl">{p.title}</h3><p className="mt-5 max-w-[280px] text-xs leading-6 text-[#71665b]">{p.copy}</p><ArrowUpRight className="mt-8 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></article>)}</div>
      </div>
    </section>
    <section id="journal" className="bg-[#f4f0e9] px-7 py-28 md:px-16 md:py-36"><div className="mx-auto max-w-[1400px]"><p className="eyebrow text-[#9a8260]">The journal / 003</p><div className="mt-8 grid gap-10 md:grid-cols-2"><h2 className="display-title text-5xl leading-[1.05] md:text-7xl">Every thread<br/>holds a story.</h2><div className="flex flex-col justify-end"><p className="max-w-md text-sm leading-7 text-[#71665b]">From first sketches and colour studies to finished looks and the movement of the runway — discover the process behind each creation.</p><a href="#contact" className="eyebrow mt-8 inline-flex items-center gap-4">Discover the creative process ↗</a></div></div></div></section>
    <footer id="contact" className="bg-[#282521] px-7 py-16 text-[#f4f0e9] md:px-16"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="eyebrow text-[#c8b28a]">The next chapter begins here</p><h2 className="display-title mt-5 text-6xl md:text-8xl">Let’s create<br/><i>meaning.</i></h2></div><div className="text-xs leading-7 text-[#c4b9ab]"><p>ARSHU DESIGNER</p><p>Where Indian Craft Meets Contemporary Fashion</p><p className="mt-5">Email · WhatsApp · Instagram</p></div></div><div className="mx-auto mt-20 max-w-[1400px] border-t border-white/20 pt-6"><p className="eyebrow text-white/50">© 2026 ARSHU DESIGNER · All rights reserved</p></div></footer>
  </main>;
}