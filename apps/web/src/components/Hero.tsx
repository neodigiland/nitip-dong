import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

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
      {/* Premium Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-forest/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          
          {/* Left: Text Content */}
          <div className="flex flex-1 flex-col gap-8 text-left py-10 lg:py-0">
            <ScrollReveal>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-forest/5 border border-forest/10 px-4 py-2 text-sm font-semibold text-forest mb-4">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                Solusi Titip Barang #1 Mahasiswa
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-forest">
                Titip Barang,
                <br />
                <motion.span 
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-text-secondary max-w-lg">
                Layanan penitipan barang premium untuk mahasiswa. Keamanan 24/7, asuransi penuh, dan layanan antar-jemput gratis.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/location" 
                className="btn-primary text-lg"
              >
                <span className="material-symbols-outlined mr-2 text-xl">location_on</span>
                Cari Lokasi Terdekat
              </Link>
              <a 
                href="https://wa.me/6289643728134" 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary text-lg"
              >
                <span className="material-symbols-outlined mr-2 text-xl text-primary">chat</span>
                Konsultasi Gratis
              </a>
            </ScrollReveal>

            {/* Trust Badges */}
            <ScrollReveal delay={0.6}>
              <div className="pt-8 border-t border-forest/10">
                <p className="text-sm font-medium text-text-secondary mb-4">Dipercaya mahasiswa dari:</p>
                <div className="flex flex-wrap items-center gap-6">
                  {universities.map((uni, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-center px-4 py-2 rounded-lg bg-slate-100/80 border border-slate-200/50"
                      title={uni.full}
                    >
                      <span className="text-sm font-bold text-slate-400 tracking-wide">{uni.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Social Proof */}
            <ScrollReveal delay={0.7} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="h-10 w-10 rounded-full border-2 border-white shadow-sm bg-gradient-to-br from-slate-200 to-slate-300"
                    style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 10}')`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-primary text-sm gap-0.5">
                  {'★★★★★'.split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <p className="text-sm font-medium text-text-secondary">
                  <span className="text-forest font-bold">500+</span> Mahasiswa Puas
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right: Floating Bento Grid */}
          <div className="flex-1 relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            
            {/* Main Feature Card - Security */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute z-30 top-[5%] left-[10%] animate-float-1"
            >
              <div className="glass-card p-6 w-[200px]">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center mb-4 shadow-glow">
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
              <div className="glass-card p-5 w-[180px]">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3">
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
              <div className="glass-card p-5 w-[170px]">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl text-amber-500">location_on</span>
                </div>
                <h3 className="font-bold text-forest text-base mb-1">5+ Lokasi</h3>
                <p className="text-xs text-text-secondary">Dekat kampusmu</p>
              </div>
            </motion.div>

            {/* Central Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[280px] sm:w-[320px] lg:w-[380px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-soft-xl ring-4 ring-white/50"
            >
              <img 
                src="/hero-aesthetic.png" 
                alt="Happy Student with Storage" 
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-transparent" />
              
              {/* Bottom Stats Card */}
              <div className="absolute bottom-6 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-glass border border-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-text-secondary font-medium">Rating Kepuasan</p>
                    <p className="text-2xl font-bold text-forest">4.9<span className="text-lg text-primary">★</span></p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-forest">thumb_up</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pickup Service Card */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute z-20 bottom-[5%] right-[10%] animate-float-1"
            >
              <div className="glass-card p-5 w-[190px]">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
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
