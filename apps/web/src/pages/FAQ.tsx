import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import Seo from '../components/Seo';

export default function FAQ() {
  return (
    <div className="flex-grow w-full bg-slate-50">
      <Seo 
        title="FAQ - Nitip Dong"
        description="Pusat bantuan dan tanya jawab seputar layanan Nitip Dong. Temukan solusi untuk pertanyaanmu di sini."
      />
      {/* Hero Section */}
      <div className="relative w-full py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-light to-forest" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        
        <RevealOnScroll className="flex flex-col items-center justify-center max-w-[960px] mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 text-sm font-bold text-white/90 mb-6">
            <span className="material-symbols-outlined text-primary text-[18px]">help</span>
            FAQ
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Pusat Bantuan
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl">
            Temukan jawaban seputar layanan penyimpanan barang mahasiswa, harga, dan keamanan di sini.
          </p>
        </RevealOnScroll>
      </div>

      {/* Breadcrumbs */}
      <div className="w-full bg-white border-b border-forest/5">
        <div className="max-w-[960px] mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link className="text-text-secondary font-medium hover:text-primary transition-colors" to="/">Beranda</Link>
            <span className="material-symbols-outlined text-text-secondary/50 text-sm">chevron_right</span>
            <span className="text-forest font-bold">FAQ</span>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full max-w-[960px] mx-auto px-6 py-12">

        {/* Content */}
        <div className="flex flex-col gap-8">
          {/* Headline */}
          <RevealOnScroll>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-forest mb-2">Pertanyaan Populer</h2>
              <p className="text-text-secondary">Jawaban cepat untuk hal-hal yang sering ditanyakan mahasiswa.</p>
            </div>
          </RevealOnScroll>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {/* Item 1 */}
            <RevealOnScroll delay={100}>
              <details className="group glass-card overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer select-none hover:bg-forest/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">local_shipping</span>
                    </div>
                    <h3 className="text-forest font-bold text-lg">Apa perbedaan opsi 'Antar Sendiri' dan 'Layanan Jemput'?</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-5 pb-5 pl-[76px] text-text-secondary leading-relaxed">
                  <p className="mb-3"><strong className="text-forest">Antar Sendiri:</strong> Anda membawa barang langsung ke gudang penyimpanan kami. Opsi ini lebih hemat biaya karena tidak ada biaya penjemputan.</p>
                  <p><strong className="text-forest">Layanan Jemput:</strong> Tim kami akan datang ke lokasi Anda (kos/apartemen) untuk mengambil barang. Sangat praktis jika Anda tidak memiliki kendaraan atau barang terlalu banyak. Ada biaya tambahan yang terjangkau untuk layanan ini.</p>
                </div>
              </details>
            </RevealOnScroll>

            {/* Item 2 */}
            <RevealOnScroll delay={200}>
              <details className="group glass-card overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer select-none hover:bg-forest/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">payments</span>
                    </div>
                    <h3 className="text-forest font-bold text-lg">Bagaimana perhitungan biaya penyimpanannya?</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-5 pb-5 pl-[76px] text-text-secondary leading-relaxed">
                  Biaya dihitung berdasarkan <strong>volume barang (per kardus standar atau per item besar)</strong> dan <strong>durasi penyimpanan (bulanan)</strong>. Kami menawarkan diskon khusus untuk penyimpanan jangka panjang (misal: libur semester 3 bulan). Anda dapat melihat simulasi harga di halaman "Harga".
                </div>
              </details>
            </RevealOnScroll>

            {/* Item 3 */}
            <RevealOnScroll delay={300}>
              <details className="group glass-card overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer select-none hover:bg-forest/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">block</span>
                    </div>
                    <h3 className="text-forest font-bold text-lg">Barang apa saja yang TIDAK boleh dititipkan?</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-5 pb-5 pl-[76px] text-text-secondary leading-relaxed">
                  Demi keamanan bersama, kami menolak penitipan:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Barang mudah meledak atau terbakar (bensin, gas, kembang api).</li>
                    <li>Senjata tajam dan senjata api.</li>
                    <li>Narkotika dan obat-obatan terlarang.</li>
                    <li>Makhluk hidup (hewan peliharaan, tanaman).</li>
                    <li>Makanan basah atau yang mudah busuk.</li>
                    <li>Barang hasil curian atau ilegal.</li>
                  </ul>
                </div>
              </details>
            </RevealOnScroll>

            {/* Item 4 */}
            <RevealOnScroll delay={400}>
              <details className="group glass-card overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer select-none hover:bg-forest/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">security</span>
                    </div>
                    <h3 className="text-forest font-bold text-lg">Apakah barang saya aman?</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-5 pb-5 pl-[76px] text-text-secondary leading-relaxed">
                  Sangat aman. Gudang kami dilengkapi dengan <strong>CCTV 24 jam</strong>, sistem kontrol akses yang ketat, dan perlindungan dari hama. Setiap barang juga didata menggunakan sistem barcode untuk memastikan tidak ada yang tertukar. Kami juga menyediakan opsi asuransi tambahan untuk ketenangan pikiran ekstra.
                </div>
              </details>
            </RevealOnScroll>

            {/* Item 5 */}
            <RevealOnScroll delay={500}>
              <details className="group glass-card overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer select-none hover:bg-forest/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">cancel</span>
                    </div>
                    <h3 className="text-forest font-bold text-lg">Bagaimana jika saya ingin membatalkan pesanan?</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-5 pb-5 pl-[76px] text-text-secondary leading-relaxed">
                  Pembatalan dapat dilakukan maksimal <strong>24 jam sebelum jadwal penjemputan/drop-off</strong> untuk mendapatkan pengembalian dana penuh (full refund). Pembatalan di bawah 24 jam akan dikenakan biaya administrasi sebesar 20%. Silakan hubungi Customer Service kami untuk proses pembatalan.
                </div>
              </details>
            </RevealOnScroll>
          </div>

          {/* Still Need Help CTA */}
          <RevealOnScroll>
            <div className="mt-8 glass-card p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">support_agent</span>
                </div>
                <h3 className="text-forest text-2xl font-bold mb-3">Masih belum menemukan jawaban?</h3>
                <p className="text-text-secondary mb-8 max-w-lg mx-auto">Tim support kami siap membantu kamu menjawab pertanyaan spesifik lainnya melalui WhatsApp.</p>
                <a href="https://wa.me/6289643728134?text=Halo%20Admin%2C%20saya%20punya%20pertanyaan%20tentang%20Nitip%20Dong" target="_blank" rel="noreferrer" className="btn-primary">
                  <span className="material-symbols-outlined mr-2">chat</span>
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </main>
    </div>
  );
}
