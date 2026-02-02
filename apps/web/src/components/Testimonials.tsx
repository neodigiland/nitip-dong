import { useState, useEffect, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface Review {
  id: string;
  name: string;
  university: string;
  rating: number;
  content: string;
  photoUrl: string;
  createdAt: string;
}

// Default testimonials (fallback)
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

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(defaultTestimonials);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const adminReviews = JSON.parse(saved) as Review[];
      if (adminReviews.length > 0) {
        setReviews(adminReviews);
      }
    }
  }, []);

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
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="layout-container flex justify-center px-4 lg:px-40">
        <div className="w-full max-w-[1280px]">
          <RevealOnScroll>
            <div className="mb-12 text-center">
               <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-300">
                <span className="material-symbols-outlined mr-1 text-[16px]">stars</span>
                Testimoni
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Kata Mereka Tentang Kami
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Kepuasan mahasiswa adalah prioritas utama kami.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="relative group">
              {/* Navigation Buttons */}
              <button
                onClick={() => scrollCarousel('left')}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-[#0d1b0d] hover:border-primary transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll left"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-[#0d1b0d] hover:border-primary transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              {/* Carousel */}
              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {reviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="flex-shrink-0 w-[320px] sm:w-[350px] snap-start rounded-2xl bg-white p-8 shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="flex gap-1 text-yellow-400 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="material-symbols-outlined text-lg filled">
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic relative">
                      <span className="absolute -top-4 -left-2 text-6xl text-slate-100 dark:text-slate-700 font-serif opacity-50">"</span>
                      {review.content}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="size-12 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white dark:border-slate-700 shadow-md">
                        {review.photoUrl ? (
                          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${review.photoUrl}")` }}></div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 dark:bg-slate-700">
                            <span className="material-symbols-outlined text-2xl">person</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-base font-bold text-slate-900 dark:text-white">{review.name}</p>
                        <p className="text-sm font-medium text-primary">{review.university}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
