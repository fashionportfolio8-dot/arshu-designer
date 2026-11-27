export default function PortfolioSection({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <main className="min-h-screen bg-[#f4f0e9] px-7 py-24 md:px-16">
    <a href="/" className="eyebrow">← ARSHU DESIGNER</a>
    <p className="eyebrow mt-24 text-[#9a8260]">{eyebrow}</p>
    <h1 className="display-title mt-5 text-6xl md:text-8xl">{title}</h1>
    <p className="mt-7 max-w-xl text-sm leading-7 text-[#71665b]">{description}</p>
    <div className="mt-16 grid gap-4 md:grid-cols-3">
      {[1,2,3].map((item) => <div key={item} className="flex aspect-[4/5] items-end border border-[#d2c7b8] bg-gradient-to-br from-[#e9e2d7] via-[#ded4c6] to-[#c8b9a4] p-6"><span className="eyebrow text-[#65584b]">Archive / 0{item}</span></div>)}
    </div>
    <p className="mt-8 text-xs text-[#8a7d70]">Portfolio assets and collection content will be uploaded through the private studio in Phase 4.</p>
  </main>;
}