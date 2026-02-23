'use client'

import { useState } from 'react'
import { Flame, Wind, Droplet, Wrench, Filter, ArrowLeft, ChevronRight, X, ChevronLeft } from 'lucide-react'

export function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null)

  const categories = [
    { id: 'all', name: 'Semua Produk', icon: Filter },
    { id: 'cooking', name: 'Peralatan Memasak', icon: Flame },
    { id: 'exhaust', name: 'Exhaust Hood', icon: Wind },
    { id: 'cooling', name: 'Cold Storage', icon: Droplet },
    { id: 'service', name: 'Service & Parts', icon: Wrench },
  ]

  const products = [
    { id: 1, category: 'cooking', name: 'Foodtray Stainless', description: 'Wadah makanan stainless steel standar katering higienis.', specs: ['Material: SS 304', 'Food Grade', 'Tahan Panas'], image: '/assets/produk/Foodtray.png' },
    { id: 2, category: 'cooking', name: 'Kitchen Sink 1 Bak', description: 'Wastafel cuci piring stainless steel satu lubang bak.', specs: ['Single Bowl', 'Stainless Steel', 'Kaki Kokoh'], image: '/assets/produk/Wastafel-SS-1-Bak.png' },
    { id: 3, category: 'cooking', name: 'Kitchen Sink 2 Bak + Side Storage', description: 'Wastafel 2 lubang dengan meja penyimpanan samping.', specs: ['Double Bowl', 'Extra Workspace', 'Heavy Duty'], image: '/assets/produk/Wastafel-ss-2-bak.png' },
    { id: 4, category: 'cooking', name: 'Kitchen Sink 2 Bak + Center Storage', description: 'Wastafel 2 lubang dengan area simpan di bagian tengah.', specs: ['Custom Layout', 'Material SS 201/304', 'Ergonomis'], image: '/assets/produk/Wastafel-SS-2-Bak-Cuci.png' },
    { id: 5, category: 'cooking', name: 'Kitchen Sink 2 Bak Standar', description: 'Wastafel cuci piring stainless 2 lubang model standar.', specs: ['Double Bowl', 'Stainless Steel', 'Anti Karat'], image: '/assets/produk/Wastafel-SS-2-Bak-Cuci-SS.png' },
    { id: 6, category: 'cooking', name: 'Kitchen Sink 3 Bak', description: 'Wastafel cuci piring 3 lubang untuk kapasitas cuci besar.', specs: ['Triple Bowl', 'Kapasitas Besar', 'Industri Standard'], image: '/assets/produk/Wastafel-3-Bak-Cuci.png' },
    { id: 7, category: 'cooking', name: 'Kompor High Pressure 1 Tungku', description: 'Kompor gas tekanan tinggi untuk memasak cepat.', specs: ['High Pressure', 'Body Stainless', 'Kaki Adjustable'], image: '/assets/produk/Kompor-1-Tungku-Hight.png' },
    { id: 8, category: 'exhaust', name: 'Exhaust Hood Fullset', description: 'Sistem pengisap asap dapur lengkap dengan filter.', specs: ['Include Blower', 'Oil Filter', 'Ducting System'], image: '/assets/produk/Hood-Full-Set.png' },
    { id: 9, category: 'cooling', name: 'Kompor Low Pressure 1 Tungku', description: 'Kompor gas tekanan rendah untuk masakan katering.', specs: ['Low Pressure', 'Hemat Gas', 'Body Stainless'], image: '/assets/produk/Kompor-1-Tungku-Low.png' },
    { id: 10, category: 'cooling', name: 'Kompor High Pressure 2 Tungku', description: 'Kompor gas tekanan tinggi dengan 2 lubang tungku.', specs: ['Dual Burner', 'High Pressure', 'Industrial Grade'], image: '/assets/produk/Kompor-2-Tungku-Hight.png' },
    { id: 11, category: 'service', name: 'Meja Dapur Stainless', description: 'Meja kerja dapur stainless steel kuat dan higienis.', specs: ['Worktop Solid', 'Bawah Rak Strip', 'SS Material'], image: '/assets/produk/Meja-Dapur-2-Rak-SS.png' },
    { id: 12, category: 'service', name: 'Oven Pengering Foodtray', description: 'Alat pengering nampan makanan dengan sistem pemanas.', specs: ['Heat System', 'Large Capacity', 'Steril'], image: '/assets/produk/Oven-Pengering-Foodtray.png' },
    { id: 13, category: 'service', name: 'Pengikat Foodtray (10/5)', description: 'Aksesori pengikat tumpukan nampan makanan.', specs: ['Isi 10 & 5', 'Distribusi Aman', 'Material Awet'], image: '/assets/produk/Pengikat-Foodtray-Isi-10&5.png' },
    { id: 14, category: 'service', name: 'Rak Bumbu 5 Susun', description: 'Rak penyimpanan botol bumbu dapur 5 tingkat.', specs: ['5 Tingkat', 'Kecil Ringkas', 'Anti Karat'], image: '/assets/produk/Rak-Bumbu-Dapur-5-Susun-1.png' },
    { id: 15, category: 'service', name: 'Rak 4 Susun Slotted', description: 'Rak penyimpanan 4 tingkat model berjarak (slotted).', specs: ['4 Tingkat', 'Airflow Slotted', 'Heavy Duty'], image: '/assets/produk/Rak-Sususn-SS-Grigi.png' },
    { id: 16, category: 'service', name: 'Rak 4 Susun Solid', description: 'Rak penyimpanan 4 tingkat model plat solid.', specs: ['4 Tingkat Solid', 'Stainless Steel', 'Kapasitas Besar'], image: '/assets/produk/Rak-Sususn-Stainlees.png' },
    { id: 17, category: 'service', name: 'Rak 5 Susun Slotted', description: 'Rak penyimpanan 5 tingkat model berjarak.', specs: ['5 Tingkat', 'Sirkulasi Udara Baik', 'SS 201/304'], image: '/assets/produk/Rak-Sususn-SS.png' },
    { id: 18, category: 'service', name: 'Rak 5 Susun Solid', description: 'Rak penyimpanan 5 tingkat model plat solid.', specs: ['5 Tingkat Solid', 'Extra Space', 'Kuat & Kokoh'], image: '/assets/produk/Rak-Susun-SS-2.png' },
    { id: 19, category: 'service', name: 'Rice Steamer 12 Tray', description: 'Mesin kukus nasi kapasitas 12 tray untuk katering.', specs: ['12 Tray', 'Steam Power', 'Stainless Steel'], image: '/assets/produk/Rice-Steamer-12-Tray.png' },
    { id: 20, category: 'service', name: 'Trolley 2 Tier', description: 'Trolley dorong 2 tingkat untuk distribusi barang.', specs: ['2 Tingkat', 'Roda Lockable', 'Handle Nyaman'], image: '/assets/produk/Service-Trolley-2-Tiers.png' },
    { id: 21, category: 'service', name: 'Trolley 3 Tier', description: 'Trolley dorong 3 tingkat kapasitas sedang.', specs: ['3 Tingkat', 'Multifungsi', 'Stainless Steel'], image: '/assets/produk/Service-Trolley-3-Tiers.png' },
    { id: 22, category: 'service', name: 'Trolley Cooling Rak', description: 'Trolley rak untuk mendinginkan nampan makanan.', specs: ['Slot Tray', 'Mobile Unit', 'Anti Karat'], image: '/assets/produk/Trolley-Cooling-Rak.png' },
    { id: 23, category: 'service', name: 'Trolley Barang Lipat', description: 'Trolley pengangkut barang model lipat praktis.', specs: ['Bisa Dilipat', 'Stainless Steel', 'Roda Heavy Duty'], image: '/assets/produk/Troli-Barang-Lipat-SS.png' },
    { id: 24, category: 'service', name: 'Meja Rak Dapur Stainless', description: 'Meja kerja dapur stainless steel kuat dan higienis.', specs: ['Worktop Solid', 'Bawah Rak Strip', 'SS Material'], image: '/assets/produk/Meja-Dapur-SS.png' },
    { id: 25, category: 'service', name: 'Meja Pemorsian Komplit Stainless', description: 'Meja kerja pemorsian stainless steel kuat dan higienis.', specs: ['Worktop Solid', 'Bawah Rak Strip', 'SS Material'], image: '/assets/produk/Meja-Pemorsian-Komplit.png' },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  const getCategoryLabel = (cat: string) => categories.find(c => c.id === cat)?.name ?? cat

  const openLightbox = (index: number) => {
    setLightbox({ index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  const prevImage = () => {
    if (!lightbox) return
    setLightbox({ index: (lightbox.index - 1 + filteredProducts.length) % filteredProducts.length })
  }

  const nextImage = () => {
    if (!lightbox) return
    setLightbox({ index: (lightbox.index + 1) % filteredProducts.length })
  }

  const currentProduct = lightbox !== null ? filteredProducts[lightbox.index] : null

  return (
    <div className="min-h-screen" style={{ background: '#F7F8FA', fontFamily: "'Syne', 'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .card-hover { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.12); }
        .img-zoom img { transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .img-zoom:hover img { transform: scale(1.08); }
        .filter-pill { transition: all 0.2s ease; }
        .filter-pill:hover { transform: translateY(-1px); }
        .spec-tag { background: #F0F1F3; border: 1px solid #E2E4E8; border-radius: 6px; padding: 3px 10px; font-size: 11px; font-weight: 500; color: #555; letter-spacing: 0.02em; }
        .badge { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 9px; border-radius: 99px; }
        .grid-masonry { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(5, 10, 20, 0.92);
          backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .lightbox-content {
          position: relative;
          display: flex;
          align-items: center;
          gap: 24px;
          max-width: 90vw;
          width: 100%;
          padding: 0 16px;
        }
        .lightbox-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 90vh;
          flex: 1;
          max-width: 860px;
          margin: 0 auto;
          animation: scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .lightbox-img-wrap {
          position: relative;
          background: #F3F4F6;
          flex-shrink: 0;
        }
        .lightbox-img-wrap img {
          width: 100%;
          max-height: 60vh;
          object-fit: contain;
          display: block;
        }
        .lightbox-info {
          padding: 24px 28px;
        }
        .lb-nav-btn {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .lb-nav-btn:hover { background: rgba(255,255,255,0.2); transform: scale(1.1); }
        .lb-close {
          position: absolute; top: 16px; right: 16px;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          z-index: 10;
        }
        .lb-close:hover { background: rgba(220,38,38,0.7); }
      `}</style>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && currentProduct && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>

            {/* Prev */}
            <button className="lb-nav-btn" onClick={prevImage}>
              <ChevronLeft size={22} />
            </button>

            {/* Card */}
            <div className="lightbox-card">
              {/* Close */}
              <button className="lb-close" onClick={closeLightbox}>
                <X size={16} />
              </button>

              {/* Image */}
              <div className="lightbox-img-wrap">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/F3F4F6/AAAAAA?text=Produk' }}
                />
                {/* counter */}
                <div style={{
                  position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)',
                  background: 'rgba(0,0,0,0.5)', borderRadius: '99px',
                  padding: '4px 14px', color: 'rgba(255,255,255,0.8)',
                  fontSize: '12px', fontWeight: 600, backdropFilter: 'blur(4px)',
                  whiteSpace: 'nowrap',
                }}>
                  {lightbox.index + 1} / {filteredProducts.length}
                </div>
              </div>

              {/* Info */}
              <div className="lightbox-info">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '10px' }}>
                  <div>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: '#60A5FA',
                      background: 'rgba(59,130,246,0.1)', padding: '2px 10px',
                      borderRadius: '99px', display: 'inline-block', marginBottom: '8px',
                    }}>
                      {getCategoryLabel(currentProduct.category)}
                    </span>
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1a2744', fontFamily: 'Syne, sans-serif', lineHeight: 1.2 }}>
                      {currentProduct.name}
                    </h2>
                  </div>
                  <span style={{ fontSize: '13px', color: '#bbb', fontWeight: 600, flexShrink: 0 }}>
                    #{String(currentProduct.id).padStart(2, '0')}
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.7, marginBottom: '16px', fontWeight: 300 }}>
                  {currentProduct.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {currentProduct.specs.map((spec, idx) => (
                    <span key={idx} className="spec-tag">{spec}</span>
                  ))}
                </div>

                <button
                  onClick={() => window.location.href = '/#kontak'}
                  style={{
                    background: '#1a2744', color: 'white',
                    padding: '12px 28px', borderRadius: '10px',
                    fontWeight: 700, fontSize: '14px', cursor: 'pointer',
                    border: 'none', fontFamily: 'Syne, sans-serif',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  Tanya Harga <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Next */}
            <button className="lb-nav-btn" onClick={nextImage}>
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <div
        style={{ background: 'linear-gradient(135deg, #1a2744 0%, #0f1b36 50%, #162040 100%)', position: 'relative', overflow: 'hidden' }}
        className="text-white pt-24 pb-20 px-4"
      >
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '280px', height: '280px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '10%', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto relative">
          <a href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 500, marginBottom: '32px', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          >
            <ArrowLeft size={14} /> Kembali ke Beranda
          </a>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '99px', padding: '4px 14px', marginBottom: '20px' }}>
                <span style={{ width: 6, height: 6, background: '#60A5FA', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#93C5FD', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Katalog Resmi</span>
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.05, marginBottom: '16px', fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}>
                Peralatan Dapur<br /><span style={{ color: '#60A5FA' }}>Stainless Steel</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', fontWeight: 300, maxWidth: '480px', lineHeight: 1.7 }}>
                Jelajahi 25 koleksi peralatan dapur berkualitas industri — dirancang untuk ketahanan dan higienitas optimal.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[{ num: '25', label: 'Produk' }, { num: '5', label: 'Kategori' }, { num: 'SS 304', label: 'Material' }].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Syne, sans-serif' }}>{s.num}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STICKY FILTER ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(247,248,250,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #E5E7EB', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className="filter-pill"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '9px 18px', borderRadius: '10px', whiteSpace: 'nowrap', fontWeight: 600, fontSize: '13px', cursor: 'pointer', border: isActive ? '1.5px solid #1a2744' : '1.5px solid #E5E7EB', background: isActive ? '#1a2744' : 'white', color: isActive ? 'white' : '#555', fontFamily: 'Syne, sans-serif' }}
                >
                  <cat.icon size={14} />
                  {cat.name}
                  {isActive && (
                    <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '99px', padding: '1px 7px', fontSize: '11px', fontWeight: 700 }}>
                      {cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div style={{ marginBottom: '24px' }}>
          <p style={{ color: '#888', fontSize: '14px', fontWeight: 400 }}>
            Menampilkan <strong style={{ color: '#1a2744' }}>{filteredProducts.length}</strong> produk
            {selectedCategory !== 'all' && ` dalam ${getCategoryLabel(selectedCategory)}`}
          </p>
        </div>

        <div className="grid-masonry">
          {filteredProducts.map((product, index) => {
            const isHovered = hoveredId === product.id
            return (
              <div
                key={product.id}
                className="card-hover"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: isHovered ? '1.5px solid #1a2744' : '1.5px solid #EAECF0', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              >
                {/* Image — clickable */}
                <div
                  className="img-zoom"
                  onClick={() => openLightbox(index)}
                  style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#F3F4F6', cursor: 'zoom-in' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/F3F4F6/AAAAAA?text=Produk' }}
                  />
                  {/* hover overlay hint */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(26,39,68,0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s',
                    ...(isHovered ? { background: 'rgba(26,39,68,0.25)' } : {}),
                  }}>
                    {isHovered && (
                      <div style={{ background: 'white', borderRadius: '99px', padding: '8px 18px', fontSize: '12px', fontWeight: 700, color: '#1a2744', fontFamily: 'Syne, sans-serif', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                        🔍 Lihat Gambar
                      </div>
                    )}
                  </div>
                  {/* category badge */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span className="badge" style={{ background: 'rgba(26,39,68,0.85)', color: 'white', backdropFilter: 'blur(8px)' }}>
                      {getCategoryLabel(product.category)}
                    </span>
                  </div>
                  {/* product number */}
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(26,39,68,0.7)', borderRadius: '8px', padding: '4px 10px', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 700, fontFamily: 'Syne, sans-serif', backdropFilter: 'blur(4px)', letterSpacing: '0.06em' }}>
                    #{String(product.id).padStart(2, '0')}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1a2744', marginBottom: '6px', fontFamily: 'Syne, sans-serif', lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#777', marginBottom: '14px', lineHeight: 1.6, fontWeight: 300 }}>
                    {product.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                    {product.specs.map((spec, idx) => (
                      <span key={idx} className="spec-tag">{spec}</span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div style={{ padding: '12px 20px', borderTop: '1px solid #F0F1F3', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: '#aaa', fontWeight: 500 }}>Tersedia</span>
                  <button
                    onClick={() => window.location.href = '/#kontak'}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: isHovered ? '#1a2744' : '#888', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Syne, sans-serif', transition: 'color 0.2s' }}
                  >
                    Tanya Harga <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div style={{ background: 'linear-gradient(135deg, #1a2744 0%, #0f1b36 100%)', marginTop: '60px', padding: '80px 16px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-3xl mx-auto" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '99px', padding: '4px 14px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#93C5FD', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Custom Order</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, color: 'white', marginBottom: '16px', fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Butuh Produk Custom?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', marginBottom: '36px', fontWeight: 300, lineHeight: 1.7 }}>
            Kami siap memproduksi peralatan dapur sesuai spesifikasi unik kebutuhan bisnis Anda.
          </p>
          <button
            onClick={() => window.location.href = '/#kontak'}
            style={{ background: 'white', color: '#1a2744', padding: '14px 36px', borderRadius: '10px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', border: 'none', fontFamily: 'Syne, sans-serif', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)' }}
          >
            Hubungi Kami Sekarang →
          </button>
        </div>
      </div>
    </div>
  )
}