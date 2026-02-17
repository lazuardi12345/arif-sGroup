import { ArrowRight } from 'lucide-react'

export default function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Konsultasi',
      description: 'Kami mendengarkan kebutuhan Anda dan merancang solusi terbaik yang sesuai dengan budget dan visi bisnis Anda.',
    },
    {
      number: '02',
      title: 'Implementasi',
      description: 'Tim profesional kami menginstal dan mengintegrasikan semua peralatan dengan standar kualitas tertinggi.',
    },
    {
      number: '03',
      title: 'Dukungan',
      description: 'Kami memberikan training lengkap, maintenance rutin, dan support teknis untuk kesuksesan jangka panjang Anda.',
    },
  ]

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Alur Kerja Kami</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Proses tiga tahap yang sistematis untuk memberikan hasil terbaik bagi Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <span className="text-6xl font-bold text-primary/20">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-end">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline for mobile */}
        <div className="md:hidden mt-12 space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-12 bg-primary/20 mt-2"></div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
