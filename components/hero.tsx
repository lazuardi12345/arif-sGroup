export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-white to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Solusi Peralatan Dapur Umum & Perlengkapan Profesiona
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kami menghadirkan rangkaian peralatan dapur industri dan solusi infrastruktur dapur umum berkualitas tinggi untuk kebutuhan restoran, hotel, serta korporat modern Anda.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg">
            Konsultasi Sekarang
          </button>
        </div>

<div className="mt-16 relative h-[500px] bg-secondary rounded-2xl shadow-2xl overflow-hidden border border-primary/10">
  <img 
    src="/assets/gambarHero1.png" 
    alt="Solusi MBG Kitchen" 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
      </div>
    </section>
  )
}
