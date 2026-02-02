import RevealOnScroll from './RevealOnScroll';

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #064e3b 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[960px] mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-forest/5 border border-forest/10 px-4 py-2 text-sm font-bold text-forest">
              <span className="material-symbols-outlined mr-2 text-primary text-[18px]">route</span>
              Proses Penitipan
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-forest mb-4">
              Cara Kerja Nitip Dong
            </h2>
            <p className="text-lg text-text-secondary max-w-lg mx-auto">
              3 langkah mudah untuk mengamankan barangmu selama liburan.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <RevealOnScroll delay={100}>
            <div className="glass-card-hover p-8 text-center h-full relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-forest font-bold text-sm shadow-glow">
                1
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6 mt-4">
                <span className="material-symbols-outlined text-3xl">edit_document</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Booking Online</h3>
              <p className="text-text-secondary leading-relaxed">
                Isi formulir pemesanan di website. Pilih durasi penitipan, dan tentukan metode pengiriman barang.
              </p>
            </div>
          </RevealOnScroll>
          
          {/* Step 2 */}
          <RevealOnScroll delay={200}>
            <div className="glass-card-hover p-8 text-center h-full relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-forest font-bold text-sm shadow-glow">
                2
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6 mt-4">
                <span className="material-symbols-outlined text-3xl">package_2</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Packing Barang</h3>
              <p className="text-text-secondary leading-relaxed">
                Siapkan barangmu dalam kardus atau container box. Pastikan tertutup rapat dan beri label nama.
              </p>
            </div>
          </RevealOnScroll>
          
          {/* Step 3 */}
          <RevealOnScroll delay={300}>
            <div className="glass-card-hover p-8 text-center h-full relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-forest font-bold text-sm shadow-glow">
                3
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6 mt-4">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Kami Simpan Aman</h3>
              <p className="text-text-secondary leading-relaxed">
                Barang disimpan di gudang kami dengan pengawasan penuh. Tinggal nikmati liburan!
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
