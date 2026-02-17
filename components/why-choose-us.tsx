import { Award, Users, Zap } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      value: '40+',
      label: 'Tahun Pengalaman',
      description: 'Kepercayaan dari ribuan klien profesional di industri kuliner dan perhotelan.',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Tim Profesional',
      description: 'Teknisi dan desainer berpengalaman siap melayani kebutuhan spesifik Anda.',
    },
    {
      icon: Zap,
      value: '100%',
      label: 'Material Premium',
      description: 'Hanya menggunakan material berkualitas tinggi dengan standar internasional terjamin.',
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Mengapa Memilih Kami</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Komitmen kami adalah memberikan solusi terbaik dengan layanan profesional dan dukungan jangka panjang
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{reason.value}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.label}</h3>
                <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
