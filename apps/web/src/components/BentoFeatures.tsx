import RevealOnScroll from './RevealOnScroll';
import { Link } from 'react-router-dom';

export default function BentoFeatures() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-forest/5 border border-forest/10 px-4 py-2 text-sm font-semibold text-forest mb-6">
              <span className="material-symbols-outlined text-primary text-[18px]">category</span>
              Keunggulan Kami
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-forest tracking-tight mb-4">
              Kenapa <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Nitip Dong?</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Keamanan premium, harga mahasiswa. Semua yang kamu butuhkan untuk menitipkan barang dengan tenang.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Large Card - CCTV 24 Jam (Spans 2 columns on lg) */}
          <RevealOnScroll delay={100} className="lg:col-span-2">
            <div className="glass-card-hover p-8 relative overflow-hidden group min-h-[280px] h-full">
              {/* Background Pattern */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center mb-6 shadow-glow">
                  <span className="material-symbols-outlined text-3xl text-forest">videocam</span>
                </div>
                <h3 className="text-2xl font-bold text-forest mb-3">Pengawasan CCTV 24/7</h3>
                <p className="text-text-secondary leading-relaxed max-w-md">
                  Gudang kami dilengkapi sistem CCTV modern dengan monitoring real-time sepanjang waktu. Keamanan barangmu adalah prioritas utama kami.
                </p>
                
                {/* Feature Highlights */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Rekaman HD', 'Akses Cloud', 'Notifikasi Real-time'].map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-forest/5 rounded-full text-sm font-medium text-forest">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Small Card - Asuransi */}
          <RevealOnScroll delay={200}>
            <div className="glass-card-hover p-6 relative overflow-hidden group min-h-[280px] h-full">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-2xl text-blue-500">verified_user</span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">Asuransi Penuh</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Setiap barang yang dititipkan dilindungi asuransi. Ganti rugi 100% jika terjadi kerusakan atau kehilangan.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Medium Card - Harga Mahasiswa */}
          <RevealOnScroll delay={300}>
            <div className="glass-card-hover p-6 relative overflow-hidden group min-h-[240px] h-full">
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-2xl text-amber-500">savings</span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">Harga Mahasiswa</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Tarif spesial mulai dari <span className="font-bold text-forest">Rp 50.000/bulan</span>. Bayar sesuai durasi yang kamu butuhkan.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Medium Card - Lokasi Strategis */}
          <RevealOnScroll delay={400}>
            <div className="glass-card-hover p-6 relative overflow-hidden group min-h-[240px] h-full">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-rose-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-2xl text-rose-500">location_on</span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">Lokasi Strategis</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Gudang tersedia di berbagai kota dekat kampus-kampus utama. Mudah dijangkau kapan saja.
                </p>
                <Link to="/location" className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 group-hover:gap-2 transition-all">
                  Lihat Lokasi <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          {/* Large Card - Layanan Jemput (Most Popular - Shimmer) */}
          <RevealOnScroll delay={500}>
            <div className="glass-card-hover p-6 relative overflow-hidden group min-h-[240px] h-full shimmer-border">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-emerald-400 text-xs font-bold text-forest shadow-glow">
                Paling Populer
              </div>
              
              <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-2xl text-primary">local_shipping</span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">Layanan Jemput</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Tidak perlu repot antar barang. Tim kami akan datang menjemput langsung ke tempatmu.
                </p>
                <Link to="/delivery-method" className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 group-hover:gap-2 transition-all">
                  Cek Area Jemputan <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>

        </div>

        {/* Bottom CTA */}
        <RevealOnScroll delay={600}>
          <div className="text-center mt-16">
            <Link 
              to="/pricing" 
              className="btn-primary text-lg"
            >
              Lihat Harga Lengkap
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </RevealOnScroll>
        
      </div>
    </section>
  );
}
