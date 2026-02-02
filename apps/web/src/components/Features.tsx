import RevealOnScroll from './RevealOnScroll';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #064e3b 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[960px] mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col gap-4 text-center mb-12">
            <div className="inline-flex w-fit items-center rounded-full bg-forest/5 border border-forest/10 px-4 py-2 text-sm font-bold text-forest mx-auto">
              <span className="material-symbols-outlined mr-2 text-primary text-[18px]">category</span>
              Layanan Kami
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-forest">
              Pilih Metode <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Pengiriman</span>
            </h2>
            <p className="max-w-[720px] text-lg text-text-secondary mx-auto">
              Sesuaikan dengan kebutuhanmu. Mau lebih hemat atau lebih praktis? Kami punya solusinya.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 - Antar Sendiri */}
          <RevealOnScroll delay={100}>
            <div className="group glass-card-hover p-8 h-full flex flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-forest transition-all group-hover:bg-primary group-hover:text-forest group-hover:shadow-glow">
                <span className="material-symbols-outlined text-3xl">person_pin_circle</span>
              </div>
              <div className="flex flex-col gap-3 mt-6 flex-1">
                <h3 className="text-2xl font-bold text-forest">Antar Sendiri</h3>
                <p className="text-text-secondary leading-relaxed">
                  Hemat biaya pengiriman. Kamu bisa antar barang langsung ke lokasi gudang kami yang strategis dekat kampus.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-forest/5">
                <Link to="/location" className="inline-flex items-center gap-2 text-sm font-bold text-forest transition-colors group-hover:text-primary">
                  <span>Lihat Lokasi Gudang</span>
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
          
          {/* Card 2 - Layanan Jemput */}
          <RevealOnScroll delay={200}>
            <div className="group glass-card-hover p-8 h-full flex flex-col relative shimmer-border">
              <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-primary to-emerald-400 px-3 py-1.5 text-xs font-bold text-forest shadow-glow">
                Paling Populer
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-400 text-forest shadow-glow">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <div className="flex flex-col gap-3 mt-6 flex-1">
                <h3 className="text-2xl font-bold text-forest">Layanan Jemput</h3>
                <p className="text-text-secondary leading-relaxed">
                  Praktis, tinggal duduk manis di kosan. Kurir kami akan datang menjemput barangmu sesuai jadwal yang kamu tentukan.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-primary/10">
                <Link to="/delivery-method" className="inline-flex items-center gap-2 text-sm font-bold text-forest transition-colors hover:text-primary">
                  <span>Cek Area Jemputan</span>
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
