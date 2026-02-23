'use client'

import { useState } from 'react'
import { Clock, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', message: '' })
    alert('Terima kasih! Kami akan menghubungi Anda segera.')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Hubungi Kami</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Siap membantu Anda mewujudkan solusi dapur impian. Hubungi kami kapan saja untuk konsultasi gratis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-secondary p-8 rounded-lg">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">Lokasi</h3>
            <p className="text-foreground/70">
              Jl. Raya Tajur, Tarikolot, Kec. Citeureup,<br />
              Kabupaten Bogor, Jawa Barat 16810
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">Jam Operasional</h3>
            <p className="text-foreground/70">
              Senin - Jumat: 08:00 - 17:00<br />
              Sabtu: 09:00 - 13:00<br />
              Minggu: Tutup
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-lg font-bold text-primary mb-2">Telepon</h3>
            <p className="text-foreground/70">
              085720774322<br />
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-muted rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Nomor Telepon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="Masukkan nomor telepon"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="Ceritakan kebutuhan Anda..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
