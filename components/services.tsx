import { Zap, Wind, Snowflake, Wrench } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Custom Kitchen Equipment',
      description: 'Peralatan dapur berkualitas premium yang disesuaikan dengan kebutuhan spesifik restoran atau bisnis katering Anda.',
    },
    {
      icon: Wind,
      title: 'Exhaust Hood System',
      description: 'Sistem ventilasi profesional yang efisien untuk menjaga kualitas udara dan kenyamanan di dapur Anda.',
    },
    {
      icon: Snowflake,
      title: 'Refrigeration System',
      description: 'Solusi pendingin canggih dengan teknologi terkini untuk menjaga kesegaran bahan makanan Anda.',
    },
    {
      icon: Wrench,
      title: 'Maintenance Service',
      description: 'Layanan perawatan berkala dan perbaikan profesional untuk memastikan semua peralatan beroperasi optimal.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Layanan Kami</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Solusi lengkap untuk memenuhi semua kebutuhan dapur profesional Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
