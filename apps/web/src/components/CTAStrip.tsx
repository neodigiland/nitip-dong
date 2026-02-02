import RevealOnScroll from './RevealOnScroll';
import { Link } from 'react-router-dom';

export default function CTAStrip() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-forest via-forest-light to-forest">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[100px]" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <RevealOnScroll>
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">flight_takeoff</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Sudah Siap <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Liburan?</span>
          </h2>
          
          <p className="text-lg md:text-xl font-medium text-white/80 max-w-xl mx-auto leading-relaxed mb-10">
            Jangan biarkan barang-barang di kosan jadi beban pikiran. Titipin aja di Nitip Dong sekarang, dijamin aman dan hemat!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/location" 
              className="flex h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-2xl bg-primary px-8 text-lg font-bold text-forest shadow-lg shadow-primary/30 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1"
            >
              <span className="material-symbols-outlined mr-2">location_on</span>
              Cari Lokasi
            </Link>
            <a 
              href="https://wa.me/6289643728134" 
              target="_blank" 
              rel="noreferrer"
              className="group flex h-14 min-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-8 text-lg font-bold text-white transition-all hover:bg-white hover:text-forest hover:-translate-y-1"
            >
              <span className="material-symbols-outlined">chat</span>
              Hubungi Kami
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
