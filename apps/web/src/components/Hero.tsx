import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import BackgroundAurora from './BackgroundAurora';
import GrainOverlay from './GrainOverlay';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const y3 = useTransform(scrollY, [0, 500], [0, 60]);

  // Cycling Text Logic
  const words = ["Hati Tenang", "Tanpa Ribet", "Pasti Aman", "Hemat Biaya"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  // University logos for trust badges
  const universities = [
    { name: 'UI', full: 'Universitas Indonesia' },
    { name: 'UGM', full: 'Universitas Gadjah Mada' },
    { name: 'ITB', full: 'Institut Teknologi Bandung' },
    { name: 'UNPAD', full: 'Universitas Padjadjaran' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32">
      {/* Premium Aurora Background Animation */}
      <BackgroundAurora />
      <GrainOverlay />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          
          {/* Left: Text Content */}
          <div className="flex flex-1 flex-col gap-8 text-left py-10 lg:py-0">
            <ScrollReveal>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-forest/5 border border-forest/10 px-4 py-2 text-sm font-semibold text-forest mb-4 backdrop-blur-sm shadow-sm ring-1 ring-white/20">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                Solusi Titip Barang #1 Mahasiswa
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight text-forest drop-shadow-sm">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                  className="block"
                >
                  Titip Barang,
                </motion.span>
                <div className="h-2"></div>
                <motion.span 
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary pb-3 filter"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-text-secondary max-w-lg drop-shadow-sm">
                Layanan penitipan barang premium untuk mahasiswa. Keamanan 24/7, asuransi penuh, dan layanan antar-jemput gratis.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/location" 
                className="btn-primary text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-white/50"
              >
                <span className="material-symbols-outlined mr-2 text-xl">location_on</span>
                Cari Lokasi Terdekat
              </Link>
              <a 
                href="https://wa.me/6289643728134" 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md bg-white/60"
              >
                <span className="material-symbols-outlined mr-2 text-xl text-primary">chat</span>
                Konsultasi Gratis
              </a>
            </ScrollReveal>

            {/* Trust Badges */}
            <ScrollReveal delay={0.6}>
              <div className="pt-8 border-t border-forest/5 relative">
                 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent" />
                <p className="text-sm font-medium text-text-secondary mb-4">Dipercaya mahasiswa dari:</p>
                <div className="flex flex-wrap items-center gap-6">
                  {universities.map((uni, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-center px-4 py-2 rounded-xl bg-white/40 backdrop-blur-sm border border-white/40 shadow-sm hover:translate-y-[-2px] transition-transform duration-300"
                      title={uni.full}
                    >
                      <span className="text-sm font-bold text-slate-500 tracking-wide">{uni.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Social Proof */}
            <ScrollReveal delay={0.7} className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="h-12 w-12 rounded-full border-4 border-white/80 shadow-md bg-gradient-to-br from-slate-200 to-slate-300 hover:scale-110 transition-transform duration-300 z-0 hover:z-10 relative"
                    style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 10}')`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-amber-400 text-sm gap-0.5 drop-shadow-sm">
                  {'★★★★★'.split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <p className="text-sm font-medium text-text-secondary">
                  <span className="text-forest font-bold text-base">500+</span> Mahasiswa Puas
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right: Floating Bento Grid */}
          <div className="flex-1 relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
            
            {/* Main Feature Card - Security */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute z-30 top-[5%] left-[10%] animate-float-1"
            >
              <div className="glass-card p-6 w-[200px] shadow-glass-lg backdrop-blur-xl border-white/40">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center mb-4 shadow-glow ring-2 ring-white/50">
                  <span className="material-symbols-outlined text-2xl text-forest">shield_lock</span>
                </div>
                <h3 className="font-bold text-forest text-lg mb-1">CCTV 24 Jam</h3>
                <p className="text-sm text-text-secondary leading-relaxed">Monitoring keamanan sepanjang waktu</p>
              </div>
            </motion.div>

            {/* Insurance Card */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute z-20 top-[25%] right-[5%] animate-float-2"
            >
              <div className="glass-card p-5 w-[180px] shadow-glass-lg backdrop-blur-xl border-white/40">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3 ring-1 ring-blue-500/20">
                  <span className="material-symbols-outlined text-xl text-blue-500">verified_user</span>
                </div>
                <h3 className="font-bold text-forest text-base mb-1">Asuransi</h3>
                <p className="text-xs text-text-secondary">Jaminan penuh barangmu</p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              style={{ y: y3 }}
              className="absolute z-20 bottom-[20%] left-[5%] animate-float-3"
            >
              <div className="glass-card p-5 w-[170px] shadow-glass-lg backdrop-blur-xl border-white/40">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3 ring-1 ring-amber-500/20">
                  <span className="material-symbols-outlined text-xl text-amber-500">location_on</span>
                </div>
                <h3 className="font-bold text-forest text-base mb-1">5+ Lokasi</h3>
                <p className="text-xs text-text-secondary">Dekat kampusmu</p>
              </div>
            </motion.div>

            {/* Central Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[280px] sm:w-[320px] lg:w-[380px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/60 transform-gpu"
            >
              <img 
                src="/hero-aesthetic.png" 
                alt="Happy Student with Storage" 
                className="w-full h-full object-cover transition-transform duration-1000 md:hover:scale-105"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Stats Card */}
              <div className="absolute bottom-6 left-4 right-4 p-4 rounded-3xl bg-white/90 backdrop-blur-lg shadow-glass border border-white/60">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-text-secondary font-medium uppercase tracking-wider mb-0.5">Rating Kepuasan</p>
                    <p className="text-2xl font-bold text-forest flex items-center gap-1">4.9<span className="text-lg text-amber-400">★</span></p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-lg ring-2 ring-white">
                    <span className="material-symbols-outlined text-2xl text-forest">thumb_up</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pickup Service Card */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute z-20 bottom-[5%] right-[10%] animate-float-1 delay-1000"
            >
              <div className="glass-card p-5 w-[190px] shadow-glass-lg backdrop-blur-xl border-white/40">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 ring-1 ring-primary/20">
                  <span className="material-symbols-outlined text-xl text-primary">local_shipping</span>
                </div>
                <h3 className="font-bold text-forest text-base mb-1">Jemput Gratis</h3>
                <p className="text-xs text-text-secondary">Langsung ke kosanmu</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
