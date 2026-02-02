import RevealOnScroll from './RevealOnScroll';
import { useState } from 'react';

export default function FAQHome() {
  const faqs = [
    {
      question: 'Apakah barang saya aman?',
      answer: 'Tentu saja! Gudang kami dilengkapi CCTV 24 jam, sistem keamanan berlapis, dan asuransi untuk setiap barang yang dititipkan. Kami juga melakukan pengecekan kondisi barang saat serah terima.'
    },
    {
      question: 'Berapa biaya penitipannya?',
      answer: 'Biaya dihitung berdasarkan ukuran barang dan durasi penitipan. Kami menawarkan harga khusus mahasiswa yang sangat terjangkau. Hubungi admin kami untuk simulasi harga detail.'
    },
    {
      question: 'Apakah bisa titip kendaraan motor?',
      answer: 'Ya, kami menyediakan area khusus untuk penitipan sepeda motor dengan perlindungan ekstra dari debu dan cuaca. Pastikan STNK tersedia saat penitipan.'
    },
    {
      question: 'Bagaimana jika saya ingin mengambil barang lebih awal?',
      answer: 'Bisa banget! Kamu cukup konfirmasi ke admin minimal H-1 sebelum pengambilan barang agar kami bisa mempersiapkan barangmu.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="layout-container flex justify-center px-4 lg:px-40">
        <div className="w-full max-w-[800px] flex flex-col items-center">
          <RevealOnScroll>
            <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
               <span className="material-symbols-outlined mr-1 text-[16px]">help</span>
               Support
             </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h2 className="text-3xl font-black text-center text-slate-900 dark:text-white md:text-4xl mb-12">
              Pertanyakan yang Sering Diajukan
            </h2>
          </RevealOnScroll>
          
          <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <RevealOnScroll key={index} delay={index * 100 + 200}>
                <div 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                      ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                      : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-lg font-bold ${
                      openIndex === index ? 'text-primary' : 'text-slate-900 dark:text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-primary' : 'text-slate-500'
                    }`}>
                      expand_more
                    </span>
                  </button>
                  <div 
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={600}>
            <div className="mt-10 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">Masih punya pertanyaan lain?</p>
              <a 
                href="https://wa.me/6289643728134?text=Halo%20Admin%2C%20saya%20mau%20tanya-tanya%20tentang%20Nitip%20Dong"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
              >
                <span className="material-symbols-outlined">chat</span>
                Chat WhatsApp Admin
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
