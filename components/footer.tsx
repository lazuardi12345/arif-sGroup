export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Arif's Group</h3>
            <p className="text-white/80 text-sm">
              Solusi dapur profesional terpercaya untuk restoran, hotel, dan korporat sejak 40+ tahun.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Equipment</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Exhaust Hood</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Refrigeration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#mbg" className="hover:text-white transition-colors">Program MBG</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">Proses</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Jl. Industri No. 123</li>
              <li>Jakarta, Indonesia</li>
              <li>+62 81 2345 67890</li>
              <li className="pt-2"><a href="https://wa.me/6281234567890" className="hover:text-white transition-colors">Chat WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              &copy; {currentYear} Arif's Group. All rights reserved.
            </p>
            <p className="text-white/60 text-xs">
              V.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
