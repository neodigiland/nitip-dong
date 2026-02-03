import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import Seo from '../components/Seo';

interface Review {
  id: string;
  name: string;
  university: string;
  rating: number;
  content: string;
  photoUrl: string;
  createdAt: string;
}

// Default testimonials (fallback when no admin reviews exist)
const defaultTestimonials: Review[] = [
  {
    id: 'default-1',
    name: 'Andi Pratama',
    university: 'Mahasiswa UI',
    rating: 5,
    content: 'Sangat membantu pas libur semester kemarin. Layanan jemputnya tepat waktu dan abangnya ramah banget. Barang balik dalam kondisi aman.',
    photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmxSyLUD_eMo0t_LrJ0IUAZZnKobsFsmTPPSmmEatwFdthSHzkyrlUWxVhv1IJXfz4id9QaYd1bU-hHfwqyx6vxrm6fPtYhI4Dvxm29aGdeOfUh5i7oiYvvW1CgJSJR9xxIv57MXdt1JM6Ph1MtUNMeeDKd_KO71ND2AcHwtE8_qAlaAYdEQYMxULXhURiIVQTeqh2RuhzCFhEncmWSnK6RLbJ9XKtmvuKbnWdjcsvqST161llgEkp2Nntx0ZAyUxtQ_x8EMnG5-w8',
    createdAt: '2025-01-01',
  },
  {
    id: 'default-2',
    name: 'Jessica Tan',
    university: 'Mahasiswa UGM',
    rating: 5,
    content: 'Penyelamat banget buat anak rantau! Harganya masuk akal buat kantong mahasiswa. Proses bookingnya juga gampang lewat web.',
    photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB24udA9jXDPu9pA3H-mgRQXSIUbc_zKdlvtI6eMhNeMjW0Gxu5f9iJxQhsUVX12oQKCPgzSjSigMRO1T9Ikw1mXXY9KV3ewgOL1GX5T63AT2vo4_Bjk5_NA71eL1kqnAA2A4UANxi_RZnPrpJpLZCRRZK1U98wpcYVPpWWRMMB9eYhjp10k9ZQFvXN_pPiUWJqMDgPu9r7FCvPBkPnBUwWNHbbFaNLf31YcbAIyXC2NdFZ0xiPLI2XipK0rRingi51_HBtCRK-x2bZ',
    createdAt: '2025-01-01',
  },
  {
    id: 'default-3',
    name: 'Rizky Ramadhan',
    university: 'Mahasiswa ITB',
    rating: 4,
    content: 'Opsi antar sendiri bikin lebih hemat. Gudangnya bersih dan penjagaannya ketat. Jadi nggak was-was ninggalin PC di sini.',
    photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUpwELvT-QrTacboExE1JzS3_KwCPrbwn1sLqUKBDsdpSVS3I9WBE2ZHZ9sCXnFMBSxhLdTGTB4IkRrAybtEHdXSGpvEfyNr5Impp7k5jSkKHIFVzUvHod3y0sMV4KIhmntkP5yYAoBjOHRlXv_WurOvtKlXI5vgbm-dpybgtRztuLIQgjlvUbleT1-M02RB0UUUY1AoLybk3YJdTzbcIJkoP9MFvNkwgObspyFmlfRflWxNlmHKEdYv7SInlmh0wSish1wWftduLn',
    createdAt: '2025-01-01',
  },
];

const STORAGE_KEY = 'nitip_dong_reviews';

export default function About() {
  const [reviews, setReviews] = useState<Review[]>(defaultTestimonials);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const adminReviews = JSON.parse(saved) as Review[];
      if (adminReviews.length > 0) {
        setReviews(adminReviews);
      }
    }
  }, []);

  // Scroll carousel left or right
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 370;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex-grow w-full bg-slate-50">
      <Seo 
        title="Tentang Kami - Nitip Dong"
        description="Kenalan dengan Nitip Dong, solusi penitipan barang inovatif karya anak bangsa khusus untuk mahasiswa Indonesia."
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex flex-col justify-center overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-light to-forest" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <RevealOnScroll className="max-w-3xl text-center mx-auto">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 text-sm font-bold text-white/90">
              <span className="material-symbols-outlined text-primary text-[18px]">info</span>
              Tentang Kami
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Mitra Mahasiswa untuk Penyimpanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Tanpa Ribet</span>
            </h1>
            <p className="text-lg text-white/70 sm:text-xl leading-relaxed">
              Kami memahami dinamika kehidupan kampus. Nitip Dong hadir untuk memastikan barangmu aman saat kamu menikmati liburan semester atau magang.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-3xl shadow-soft-lg aspect-[4/3]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7XQ-jMT9A76Rb5lOpBoIeNxOO4o8RY0nlkzHg4AFYSE5Dp49mU1wmjWzkNqvkMsHmk3XdKUe71WEWrmJY4iUESj4hlb7VccNU3zmKTdFQgu8SKT69Lm3KMCiyqryAzDqZrcMMzENRfhtwSBmmkZczapGaT7FW-BMtTOIVV3MqtGuexMXQJiy8l2p_TBMPnAri2z7cfbTmqA4bCA1GIAvzukfdpaTKb89aDnz8qcWMbPIiniFiRNpcXYyKkA5t3_6fI49V6x5LErtJ")' }} />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-forest/5 border border-forest/10 px-4 py-2 text-sm font-bold text-forest mb-6">
                  <span className="material-symbols-outlined text-primary text-[18px]">history_edu</span>
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl mb-6">
                  Cerita Kami
                </h2>
                <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                  <p>
                    Semuanya dimulai dari keresahan sederhana saat libur semester tiba. Melihat teman-teman mahasiswa kerepotan harus mempacking seluruh isi kamar kost atau asrama untuk dibawa pulang ke kampung halaman terasa sangat tidak efisien.
                  </p>
                  <p>
                    Biaya pengiriman kargo yang mahal dan risiko barang rusak di perjalanan menjadi momok tersendiri. Kami berpikir, "Kenapa tidak ada tempat penitipan yang aman, murah, dan fleksibel khusus untuk mahasiswa?"
                  </p>
                  <p className="font-semibold text-forest">
                    Maka lahirlah Nitip Dong. Solusi penyimpanan modern yang dirancang untuk mendukung mobilitas mahasiswa Indonesia.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-text-secondary">
              Kami berkomitmen memberikan layanan terbaik dengan prinsip utama yang memprioritaskan keamanan dan kenyamananmu.
            </p>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <RevealOnScroll delay={100} className="h-full">
              <div className="glass-card-hover p-8 h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-forest">Aman & Terpercaya</h3>
                <p className="text-text-secondary leading-relaxed">
                  Fasilitas penyimpanan kami dilengkapi CCTV 24/7, kontrol suhu, dan asuransi barang untuk ketenangan pikiranmu.
                </p>
              </div>
            </RevealOnScroll>
            {/* Value 2 */}
            <RevealOnScroll delay={200} className="h-full">
              <div className="glass-card-hover p-8 h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">schedule</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-forest">Fleksibel</h3>
                <p className="text-text-secondary leading-relaxed">
                  Atur jadwal penitipan dan pengambilan barang sesuai kebutuhanmu. Kami mengerti jadwal mahasiswa yang dinamis.
                </p>
              </div>
            </RevealOnScroll>
            {/* Value 3 */}
            <RevealOnScroll delay={300} className="h-full">
              <div className="glass-card-hover p-8 h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">savings</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-forest">Ramah Kantong</h3>
                <p className="text-text-secondary leading-relaxed">
                  Harga yang dirancang khusus agar pas di kantong mahasiswa, tanpa biaya tersembunyi yang memberatkan.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl mb-4">
              Dua Cara Mudah untuk Menitip
            </h2>
            <p className="text-lg text-text-secondary">
              Pilih metode serah terima yang paling cocok dengan preferensi dan budget kamu.
            </p>
          </RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Service Option 1 */}
            <RevealOnScroll delay={100} className="h-full">
              <Link to="/location" className="block h-full group glass-card-hover p-8 sm:p-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 text-forest group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">person_pin_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-forest mb-2">Antar Sendiri</h3>
                <p className="text-primary font-semibold mb-4">Pilihan Hemat Biaya</p>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Kamu bisa membawa langsung barang-barangmu ke gudang penyimpanan kami. Cocok buat kamu yang punya kendaraan sendiri.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-forest/80">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span>Bebas biaya penjemputan</span>
                  </li>
                  <li className="flex items-center gap-3 text-forest/80">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span>Jadwal drop-off fleksibel</span>
                  </li>
                </ul>
              </Link>
            </RevealOnScroll>
            {/* Service Option 2 */}
            <RevealOnScroll delay={200} className="h-full">
              <Link to="/delivery-method" className="block h-full group relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest to-forest-light p-8 sm:p-10 shadow-soft-lg hover:shadow-xl transition-all">
                <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 text-white">
                  <span className="material-symbols-outlined text-3xl">local_shipping</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Layanan Jemput</h3>
                <p className="text-primary font-semibold mb-4">Pilihan Hemat Waktu & Tenaga</p>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Lagi sibuk ujian atau mager angkut barang berat? Tim kami siap datang ke kost atau apartemenmu untuk menjemput barang.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/90">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span>Praktis tanpa angkat berat</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span>Armada aman & tertutup</span>
                  </li>
                </ul>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl mb-4">
              Tim Di Balik Layar
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Mahasiswa untuk mahasiswa. Kami memahami kebutuhanmu karena kami pernah berada di posisimu.
            </p>
          </RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Raka Aditya', role: 'Founder & CEO', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZi2C-iWmWNNGEJe1ZUi4uYZtuLIHEQ__N5q8dasj2INOaOIu6I5gXvifqPjkWOsqmJd6g3QdScZiWDRnRXI6iNghzLf9sE3lMgrzkxULISxPMQx8NFDYnk3U-t7eUpXrlIP2vbIotSLG6aE0R_NLVai3jy-FOaqwMsbYXC6SvId16o_Kd1JsJW7IEIlJ7e6Li1tYRf4t91r6GJ7fWTzA7tWyTT4ItGm0WbrwI4i3xXKd6MoHgA5WqKpR0oFs5cwhAlc7ekp-jwDAd' },
              { name: 'Sarah N.', role: 'Operations Lead', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvorQ6HvHiHqA7FDZmO6LYCn_vM1Z_9n69VpunpLyzghip5d6ajfU8NWB4R0XqyzZVcoteVjtQ7LapEiJr2FaPULXx4bufp65ZW-2x4g9am5BzMAbHBnzIjeNSMTaV52YFuvPhA6lOqxTlhF4paVns9mKs3IBXZBYGD3dc2QFSXhl66YPvt5qwV0EDwrZqzeubid0VLkjb4V4QWnefSLxXsQt3nj2BkUotHn9Hy2UDHchAzG7TeP41pYx9fdwoatkJAd9RvOxXFq3b' },
              { name: 'Budi Santoso', role: 'Tech Lead', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFqYGnuu893gXz25ZA5lwkTX03jUtIVqbecSjhr4QLBav1C2x2ctJMxISVGrdQfYK9L13lv8SDDc7pMHFC8BhQsDWdqdj5jWzZLvn9Mw5L2IDquUkW5OAw53ZgQPKeqO_uUhrcW45VynidtF4Tyvc4jLB24R9TJasTDj-OUVfBndV-iCr6hf6n65ldPhZ8xcB2tTrugZJB8b1NYCPF9BcgmDghLqBsZj-fjPuQQBnIn4RJKP8BP5d3mfsQOW7V2vGsBYVPjzan2q2a' },
              { name: 'Dina W.', role: 'Customer Care', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuQc2v_wwXqSeOc5Q0Yo5b0ypPjGjkO6fRLmHBWzh2VoEMe5HZ0wstsTWqJl1x1KeY-34p9mRwlE8W1u6mr3X-7CYrsbwDkXR88DB7b5Mba0d-TA-LQy7Ede1cCUbMsp17bbl8vHcvA_0rV17P-XTXg2Ue6bu2ck7xnfZX24DCJ9oAwZ17BfkrZ2PXYlzXhV0pXVuvfQfgC4rNMlQvaGK28lgCmEDSIdAqXW8ynFKy6YAMAzwSopqPLnyWBqq5X5elBM-9FQLe9FZd' },
            ].map((member, index) => (
              <RevealOnScroll key={member.name} delay={100 * (index + 1)}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-soft">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${member.photo}")` }} />
                  </div>
                  <h3 className="text-lg font-bold text-forest">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-center tracking-tight text-forest sm:text-4xl mb-4">
              Apa Kata Teman Mahasiswa?
            </h2>
            <p className="text-center text-text-secondary mb-12">
              Geser untuk lihat lebih banyak testimoni →
            </p>
          </RevealOnScroll>
          
          {/* Carousel Container */}
          <RevealOnScroll delay={200}>
            <div className="relative group">
              {/* Left Arrow Button */}
              <button
                onClick={() => scrollCarousel('left')}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-2xl bg-white shadow-soft border border-forest/5 text-forest hover:bg-primary hover:text-forest transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll left"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={() => scrollCarousel('right')}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-2xl bg-white shadow-soft border border-forest/5 text-forest hover:bg-primary hover:text-forest transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              {/* Scroll Container */}
              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {reviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="flex-shrink-0 w-[320px] sm:w-[350px] snap-start glass-card p-6 hover:shadow-soft-lg transition-shadow"
                  >
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="material-symbols-outlined text-sm">
                          {star <= review.rating ? 'star' : star - 0.5 <= review.rating ? 'star_half' : 'star'}
                        </span>
                      ))}
                    </div>
                    <p className="text-text-secondary mb-6 italic line-clamp-4">"{review.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
                        {review.photoUrl ? (
                          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${review.photoUrl}")` }} />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-xl">person</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-forest">{review.name}</p>
                        <p className="text-xs text-text-secondary">{review.university}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Gradient Fade Edges */}
              <div className="hidden sm:block absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="hidden sm:block absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
          </RevealOnScroll>
          
          {/* Scroll Indicator Dots */}
          {reviews.length > 3 && (
            <div className="flex justify-center gap-2 mt-6">
              <span className="text-sm text-text-secondary">
                {reviews.length} testimoni tersedia
              </span>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-light to-forest" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        
        <RevealOnScroll className="relative container mx-auto px-6 text-center z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl mb-6">
            Siap Liburan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Tanpa Beban?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan mahasiswa lainnya yang sudah mempercayakan barang mereka kepada Nitip Dong.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6289643728134?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20layanan%20Nitip%20Dong" target="_blank" rel="noreferrer" className="flex min-w-[180px] items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-bold text-forest shadow-lg shadow-primary/30 hover:bg-white hover:-translate-y-1 transition-all">
              <span className="material-symbols-outlined mr-2">chat</span>
              Hubungi Kami
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
