import { Check } from 'lucide-react'

export default function MBGProgram() {
  const features = [
    {
      title: 'Desain Dapur Kustom',
      description: 'Perencanaan layout dapur umum dan instalasi peralatan yang dirancang khusus untuk efisiensi alur kerja operasional Anda.',
    },
    {
      title: 'Standar Industri Premium',
      description: 'Material stainless steel berkualitas tinggi yang tahan lama dan memenuhi standar sanitasi internasional untuk dapur umum.',
    },
    {
      title: 'Instalasi & Perawatan',
      description: 'Layanan terpadu mulai dari pemasangan hingga pemeliharaan rutin oleh teknisi ahli untuk menjamin kelancaran dapur Anda.',
    },
  ]

  return (
    <section id="mbg" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Solusi Dapur Umum & Fasilitas Terpadu</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Kami menyediakan ekosistem peralatan dapur profesional untuk mendukung operasional dapur umum, restoran, dan proyek berskala besar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-1 bg-primary/10 rounded-full">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}