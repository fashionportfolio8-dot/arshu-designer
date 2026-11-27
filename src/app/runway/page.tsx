import { ArrowUpRight } from "lucide-react";

const looks = [
  { number: "01", name: "The feminine silhouette", note: "Fluid drape · sculpted structure · intricate detail", style: "from-[#c9b8a2] via-[#e5d9c9] to-[#8e7b66]" },
  { number: "02", name: "The masculine silhouette", note: "Tailored form · layered texture · quiet confidence", style: "from-[#8b7a68] via-[#c6b59f] to-[#e6dbcc]" }
];

export default function RunwayPage() {
  return <main className="min-h-screen overflow-hidden bg-[#24211e] text-[#f4f0e9]">
    <header className="flex items-center justify-between px-7 py-7 md:px-16"><a href="/" className="display-title text-xl tracking-[.12em]">ARSHU<span className="ml-2 font-sans text-[8px] tracking-[.3em]">DESIGNER</span></a><a href="/" className="eyebrow text-white/60 transition-colors hover:text-white">← Back to portfolio</a></header>
    <section className="relative px-7 pb-20 pt-20 text-center md:px-16 md:pb-28 md:pt-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[min(80vw,900px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(180,154,107,.16),transparent_68%)]"/>
      <p className="eyebrow relative text-[#c8b28a]">The digital atelier · 001</p>
      <h1 className="display-title relative mt-8 text-6xl leading-[.95] md:text-[clamp(5rem,11vw,10rem)]">The runway<br/><i>is a canvas.</i></h1>
      <p className="relative mx-auto mt-9 max-w-xl text-sm leading-7 text-white/60">An exploration of movement, silhouette and presence. A digital stage for the meeting of Indian craft and contemporary form.</p>
      <div className="relative mx-auto mt-20 flex h-[360px] max-w-[1000px] items-center justify-center overflow-hidden border border-white/10 bg-[#302c27] md:h-[480px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(207,184,148,.17),transparent_55%)]"/>
        <div className="absolute bottom-0 left-1/2 h-[85%] w-[38%] -translate-x-1/2 bg-gradient-to-b from-[#bba68a]/5 via-[#bba68a]/10 to-[#bba68a]/20 [clip-path:polygon(36%_0,64%_0,100%_100%,0_100%)]"/>
        <div className="absolute bottom-0 left-1/2 h-[85%] w-px -translate-x-1/2 bg-[#d6c2a1]/30"/>
        <div className="absolute left-6 top-6 text-left"><p className="eyebrow text-[#c8b28a]">Stage study / 01</p><p className="mt-2 text-[10px] tracking-[.2em] text-white/40">LIGHT · SPACE · MOVEMENT</p></div>
        <div className="relative z-10 text-center"><p className="display-title text-4xl text-[#e8ddcf]/80 md:text-6xl">A new<br/><i>perspective.</i></p><p className="eyebrow mt-6 text-white/40">Runway environment preview</p></div>
        <p className="absolute bottom-6 right-6 eyebrow text-white/40">ARSHU / 2026</p>
      </div>
    </section>
    <section className="bg-[#f4f0e9] px-7 py-24 text-[#24211e] md:px-16 md:py-32"><div className="mx-auto max-w-[1200px]"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow text-[#9a8260]">The casting / 002</p><h2 className="display-title mt-4 text-5xl md:text-7xl">Two expressions.<br/><i>One language.</i></h2></div><p className="max-w-sm text-sm leading-7 text-[#71665b]">The runway will bring both womenswear and menswear into one considered visual world.</p></div>
      <div className="grid gap-5 md:grid-cols-2">{looks.map((look) => <article key={look.number} className="group"><div className={`relative flex aspect-[4/5] items-end overflow-hidden bg-gradient-to-br ${look.style} p-7 md:p-10`}><span className="absolute left-7 top-7 eyebrow text-[#30271f]/70">{look.number} / Runway study</span><div className="absolute inset-0 bg-gradient-to-t from-[#28221d]/50 via-transparent to-transparent"/><div className="relative text-[#f4f0e9]"><h3 className="display-title text-4xl md:text-5xl">{look.name}</h3><p className="mt-3 text-xs tracking-wide text-white/75">{look.note}</p></div></div></article>)}</div>
      <div className="mt-14 flex flex-col justify-between gap-5 border-t border-[#c9bfb2] pt-7 md:flex-row md:items-center"><p className="max-w-xl text-xs leading-6 text-[#71665b]">This is the visual direction preview. The final runway scene, model movement and garment imagery will be built around your runway reference image and supplied fashion assets.</p><a href="/final-outfit" className="eyebrow inline-flex items-center gap-3">Explore final looks <ArrowUpRight size={14}/></a></div>
    </div></section>
    <footer className="flex flex-col justify-between gap-4 px-7 py-8 md:flex-row md:items-center md:px-16"><p className="eyebrow text-white/40">© 2026 ARSHU DESIGNER</p><a href="/" className="eyebrow text-[#c8b28a]">Return to the beginning ↑</a></footer>
  </main>;
}