import { Link } from 'react-router-dom';

import Seo from '../components/Seo'

export default function DeliveryMethod() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-[#e0e9e0] font-display">
      <Seo 
        title="Metode Serah Terima - Nitip Dong"
        description="Pilih metode pengiriman barang ke gudang: antar sendiri (gratis) atau layanan jemput (pickup service) langsung dari kosanmu."
      />
      <div className="layout-container flex h-full grow flex-col">
        {/* Header / Navbar Placeholder */}
        <div className="w-full flex items-center p-4 lg:px-40">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Kembali
          </Link>
        </div>

        {/* Content Container */}
        <div className="px-4 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-text-main dark:text-white tracking-tight text-[32px] font-bold leading-tight">Metode Serah Terima Barang</h1>
                <p className="text-text-secondary dark:text-[#8cb88c] text-sm font-normal leading-normal">Pilih cara yang paling nyaman untukmu menaruh barang di gudang kami.</p>
              </div>
            </div>

            {/* Selection Grid */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Antar Sendiri */}
              <div 
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a201a] shadow-sm min-h-[180px] flex flex-col"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-full bg-white dark:bg-[#2d4a2d] p-3 shadow-sm border border-primary/20">
                      <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">Gratis</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight mb-2">Antar Sendiri</h3>
                    <p className="text-text-secondary dark:text-[#a0cfa0] text-sm font-normal leading-relaxed mb-3">Kamu antar barang ke gudang sendiri. Lebih fleksibel waktunya.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Layanan Jemput */}
              <div 
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a201a] shadow-sm min-h-[180px] flex flex-col"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-full bg-gray-50 dark:bg-[#2a2f2a] p-3 border border-gray-100 dark:border-gray-700 transition-colors">
                      <span className="material-symbols-outlined text-gray-400 text-3xl">home_work</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-text-main dark:text-gray-300">Biaya Tambahan</p>
                      <span className="text-xs text-gray-400">Mulai dari Rp 50.000</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight mb-2">Layanan Jemput</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed mb-3">Kurir kami jemput di kosanmu. Kamu tinggal duduk manis.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary / Additional Info */}
            <div className="px-4 py-2">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex items-start gap-3 border border-blue-100 dark:border-blue-800">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 mt-0.5">info</span>
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  <span className="font-bold">Info:</span> Untuk layanan jemput, silakan konsultasikan lokasi dan biaya terlebih dahulu melalui WhatsApp admin kami.
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex px-4 py-6 mt-auto">
              <a 
                href="https://wa.me/6289643728134?text=Halo%20Admin%2C%20saya%20mau%20tanya%20tentang%20layanan%20titip%20barang" 
                target="_blank" 
                rel="noreferrer"
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-[#25D366] hover:bg-[#20bd5a] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg"
              >
                <span className="truncate">Konsultasi via WhatsApp</span>
                <span className="material-symbols-outlined ml-2">chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
