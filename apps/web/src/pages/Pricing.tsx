import { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import Seo from '../components/Seo';

export default function Pricing() {
  const [billing, setBilling] = useState('semester');

  return (
    <div className="flex-grow flex flex-col items-center w-full bg-slate-50">
      <Seo 
        title="Harga & Paket - Nitip Dong"
        description="Pilihan paket penitipan barang mahasiswa mulai dari Rp 50rb. Tersedia paket Small, Medium, dan Large dengan diskon semesteran."
      />
      {/* Hero Section */}
      <section className="w-full px-6 py-16 lg:py-24 flex justify-center relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-forest/5 rounded-full blur-[80px]" />
        </div>
        
        <RevealOnScroll className="w-full flex justify-center relative z-10">
          <div className="w-full max-w-[900px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-forest/5 border border-forest/10 px-4 py-2 text-sm font-semibold text-forest mb-6">
              <span className="material-symbols-outlined text-primary text-[18px]">payments</span>
              Harga Transparan
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-forest leading-tight tracking-tight mb-6">
              Simpan Barangmu,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary">
                Liburan Tenang
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Solusi penitipan barang aman, terjangkau, dan fleksibel khusus mahasiswa.
            </p>
            <button 
              onClick={() => document.getElementById('pricing-plans')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg"
            >
              <span className="material-symbols-outlined mr-2">arrow_downward</span>
              Lihat Paket
            </button>
          </div>
        </RevealOnScroll>
      </section>

      {/* Pricing Toggle & Section */}
      <section id="pricing-plans" className="w-full max-w-[1100px] px-6 py-12 flex flex-col gap-10">
        {/* Toggle */}
        <RevealOnScroll>
          <div className="flex justify-center">
            <div className="inline-flex bg-white/80 backdrop-blur-sm p-1.5 rounded-2xl shadow-glass border border-forest/5">
              <label className="cursor-pointer">
                <input 
                  className="peer sr-only" 
                  name="billing" 
                  type="radio" 
                  value="monthly" 
                  checked={billing === 'monthly'} 
                  onChange={() => setBilling('monthly')}
                />
                <span className="block px-6 py-3 rounded-xl text-sm font-bold text-forest/60 peer-checked:bg-white peer-checked:text-forest peer-checked:shadow-soft transition-all">
                  Bulanan
                </span>
              </label>
              <label className="cursor-pointer">
                <input 
                  className="peer sr-only" 
                  name="billing" 
                  type="radio" 
                  value="semester" 
                  checked={billing === 'semester'}
                  onChange={() => setBilling('semester')}
                />
                <span className="block px-6 py-3 rounded-xl text-sm font-bold text-forest/60 peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-emerald-400 peer-checked:text-forest peer-checked:shadow-glow transition-all">
                  Semesteran (Hemat 20%)
                </span>
              </label>
            </div>
          </div>
        </RevealOnScroll>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6 overflow-visible">
          {/* Small Plan */}
          <RevealOnScroll delay={100} className="h-full">
            <div className="glass-card-hover p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-forest">inventory_2</span>
                </div>
                <h3 className="text-xl font-bold text-forest">Small Box</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-forest">
                  {billing === 'semester' ? 'Rp 240rb' : 'Rp 50rb'}
                </span>
                <span className="text-sm text-text-secondary font-medium">
                  /{billing === 'semester' ? 'semester' : 'bulan'}
                </span>
              </div>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">Cocok untuk buku, gadget, sepatu, dan barang printilan.</p>
              <Link to="/location" className="btn-secondary mb-6 text-sm">
                Pilih Paket Small
              </Link>
              <div className="space-y-3 mt-auto pt-6 border-t border-forest/5">
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Muat ~1 Kardus Mie Instan
                </div>
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Dimensi 40x40x40cm
                </div>
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Asuransi Dasar
                </div>
              </div>
            </div>
          </RevealOnScroll>
          
          {/* Medium Plan (Highlighted) */}
          <RevealOnScroll delay={200} className="h-full">
            <div className="glass-card-hover p-8 h-full flex flex-col relative shimmer-border ring-2 ring-primary/30 shadow-soft-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-emerald-400 text-forest text-xs font-bold px-4 py-1.5 rounded-full shadow-glow">
                PALING LARIS
              </div>
              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-glow">
                  <span className="material-symbols-outlined text-2xl text-forest">luggage</span>
                </div>
                <h3 className="text-xl font-bold text-forest">Medium Luggage</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-forest">
                  {billing === 'semester' ? 'Rp 450rb' : 'Rp 95rb'}
                </span>
                <span className="text-sm text-text-secondary font-medium">
                  /{billing === 'semester' ? 'semester' : 'bulan'}
                </span>
              </div>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">Ideal untuk koper besar, bedding set, atau container box.</p>
              <Link to="/location" className="btn-primary mb-6 text-sm">
                Pilih Paket Medium
              </Link>
              <div className="space-y-3 mt-auto pt-6 border-t border-primary/10">
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Muat 2 Koper Besar
                </div>
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Dimensi 100x50x50cm
                </div>
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Asuransi Premium
                </div>
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Gratis Dust Cover
                </div>
              </div>
            </div>
          </RevealOnScroll>
          
          {/* Large Plan */}
          <RevealOnScroll delay={300} className="h-full">
            <div className="glass-card-hover p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-forest">chair</span>
                </div>
                <h3 className="text-xl font-bold text-forest">Large Item</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-forest">
                  {billing === 'semester' ? 'Rp 720rb' : 'Rp 150rb'}
                </span>
                <span className="text-sm text-text-secondary font-medium">
                  /{billing === 'semester' ? 'semester' : 'bulan'}
                </span>
              </div>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">Untuk barang besar seperti sepeda, meja belajar, atau pindahan.</p>
              <Link to="/location" className="btn-secondary mb-6 text-sm">
                Pilih Paket Large
              </Link>
              <div className="space-y-3 mt-auto pt-6 border-t border-forest/5">
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Area Luas 2x2 Meter
                </div>
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Muat Sepeda / Meja
                </div>
                <div className="flex gap-3 text-sm text-forest/80">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Prioritas Pick-up
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="w-full max-w-[1100px] px-6 py-12">
        <RevealOnScroll>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-forest mb-2">Opsi Pengiriman Barang</h2>
            <p className="text-text-secondary">Pilih cara barang sampai ke gudang kami.</p>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Self Drop-off */}
          <RevealOnScroll delay={100} className="h-full">
            <Link to="/location" className="group glass-card-hover flex items-center p-6 cursor-pointer h-full">
              <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center text-forest group-hover:bg-primary group-hover:text-forest transition-colors shrink-0">
                <span className="material-symbols-outlined text-3xl">directions_car</span>
              </div>
              <div className="ml-5 flex-1">
                <h3 className="font-bold text-lg text-forest">Antar Sendiri (Self Drop-off)</h3>
                <p className="text-sm text-text-secondary">Antar barangmu langsung ke lokasi gudang terdekat.</p>
              </div>
              <div className="text-right pl-4">
                <span className="block text-xl font-extrabold text-primary">GRATIS</span>
              </div>
            </Link>
          </RevealOnScroll>
          {/* Pick-up Service */}
          <RevealOnScroll delay={200} className="h-full">
            <Link to="/delivery-method" className="group glass-card-hover flex items-center p-6 cursor-pointer h-full">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-forest transition-colors shrink-0">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <div className="ml-5 flex-1">
                <h3 className="font-bold text-lg text-forest">Layanan Jemput (Pick-up)</h3>
                <p className="text-sm text-text-secondary">Tim kami menjemput barang dari kos/apartemen kamu.</p>
              </div>
              <div className="text-right pl-4">
                <span className="block text-xs text-text-secondary font-medium whitespace-nowrap">Mulai dari</span>
                <span className="block text-xl font-extrabold text-forest">Rp 50rb</span>
              </div>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="w-full max-w-[1100px] px-6 py-12">
        <RevealOnScroll>
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-forest/5 border-b border-forest/10">
                <tr>
                  <th className="px-6 py-5 font-bold text-forest" scope="col">Fitur Keamanan & Layanan</th>
                  <th className="px-6 py-5 text-center text-forest" scope="col">Small</th>
                  <th className="px-6 py-5 text-center text-primary font-bold" scope="col">Medium</th>
                  <th className="px-6 py-5 text-center text-forest" scope="col">Large</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/5">
                <tr className="hover:bg-forest/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-forest">CCTV 24 Jam</td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                </tr>
                <tr className="hover:bg-forest/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-forest">Kontrol Suhu & Kelembaban</td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-slate-300">remove</span></td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                </tr>
                <tr className="hover:bg-forest/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-forest">Asuransi Kehilangan</td>
                  <td className="px-6 py-4 text-center text-text-secondary">Hingga 500rb</td>
                  <td className="px-6 py-4 text-center font-bold text-forest">Hingga 2 Juta</td>
                  <td className="px-6 py-4 text-center text-text-secondary">Hingga 5 Juta</td>
                </tr>
                <tr className="hover:bg-forest/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-forest">Packing Bubble Wrap</td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-slate-300">remove</span></td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                  <td className="px-6 py-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1100px] px-6 py-16">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-forest">Pertanyaan Umum</h2>
            <p className="text-text-secondary">Jawaban untuk keraguanmu menitipkan barang.</p>
          </div>
        </RevealOnScroll>
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* FAQ Item 1 */}
          <RevealOnScroll delay={100}>
            <details className="group glass-card overflow-hidden transition-all duration-300">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-forest hover:bg-forest/5">
                <span>Apakah barang saya aman?</span>
                <span className="transition-transform group-open:rotate-180">
                  <span className="material-symbols-outlined text-primary">expand_more</span>
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                Sangat aman! Gudang kami dilengkapi CCTV 24 jam, penjagaan security, dan sistem kontrol akses. Setiap barang juga disegel dengan security tag unik saat penjemputan.
              </div>
            </details>
          </RevealOnScroll>
          {/* FAQ Item 2 */}
          <RevealOnScroll delay={200}>
            <details className="group glass-card overflow-hidden transition-all duration-300">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-forest hover:bg-forest/5">
                <span>Bisa ambil barang sebelum masa sewa habis?</span>
                <span className="transition-transform group-open:rotate-180">
                  <span className="material-symbols-outlined text-primary">expand_more</span>
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                Bisa banget. Kamu cukup hubungi admin H-1 sebelum pengambilan. Namun, biaya sewa yang sudah dibayarkan untuk paket semesteran tidak dapat dikembalikan (non-refundable).
              </div>
            </details>
          </RevealOnScroll>
          {/* FAQ Item 3 */}
          <RevealOnScroll delay={300}>
            <details className="group glass-card overflow-hidden transition-all duration-300">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-forest hover:bg-forest/5">
                <span>Bagaimana cara hitung dimensinya?</span>
                <span className="transition-transform group-open:rotate-180">
                  <span className="material-symbols-outlined text-primary">expand_more</span>
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                Kami menggunakan ukuran volume P x L x T. Jika kamu bingung, cukup kirimkan foto barangmu ke admin WhatsApp kami, dan kami akan merekomendasikan paket yang paling pas!
              </div>
            </details>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
