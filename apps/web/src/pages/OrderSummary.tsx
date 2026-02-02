import { Link } from 'react-router-dom';

export default function OrderSummary() {
  return (
    <div className="flex-grow layout-container w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white tracking-tight mb-2">Ringkasan Biaya</h1>
        <p className="text-text-secondary dark:text-gray-400 text-base">Tinjau pesanan penyimpanan Anda sebelum melakukan pembayaran.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Order Details & Configuration (Span 8) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Section: Storage Item */}
          <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h3 className="font-bold text-lg dark:text-white">Detail Pesanan</h3>
              <button className="text-primary text-sm font-medium hover:underline">Edit Pesanan</button>
            </div>
            <div className="p-4">
              {/* ListItem Component Adapted */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-2">
                <div className="flex items-center justify-center rounded-xl bg-[#e7f3e7] dark:bg-green-900/30 shrink-0 size-16 text-primary">
                  <span className="material-symbols-outlined text-3xl">inventory_2</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-text-main dark:text-white text-lg font-semibold">Paket Mahasiswa (Box Large)</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-text-secondary dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">straighten</span>
                      <span>60 x 40 x 40 cm</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                      <span>1 Semester (6 Bulan)</span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 text-right mt-2 sm:mt-0">
                  <p className="font-bold text-lg dark:text-white">Rp 600.000</p>
                  <p className="text-xs text-text-secondary">@ Rp 100.000 / bulan</p>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Delivery Method */}
          <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg dark:text-white">Metode Pengiriman</h3>
            </div>
            <div className="p-6 flex flex-col gap-6">
              {/* SegmentedButtons Adapted */}
              <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <label className="flex-1 cursor-pointer">
                  <input defaultChecked className="peer sr-only" name="delivery_method" type="radio" value="self" />
                  <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-text-main dark:peer-checked:text-white peer-checked:shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">directions_walk</span>
                    Antar Sendiri
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input className="peer sr-only" name="delivery_method" type="radio" value="pickup" />
                  <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-text-main dark:peer-checked:text-white peer-checked:shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    Layanan Jemput
                  </div>
                </label>
              </div>
              {/* Savings Card / Alert */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#e7f3e7] to-[#d1eec1] dark:from-green-900/40 dark:to-green-800/20 border border-green-200 dark:border-green-800/50 p-5">
                <div className="absolute right-0 top-0 -mt-4 -mr-4 text-green-300 dark:text-green-800/30 opacity-50">
                  <span className="material-symbols-outlined text-[120px] rotate-12">savings</span>
                </div>
                <div className="relative z-10 flex gap-4 items-start">
                  <div className="bg-white dark:bg-green-900 p-2 rounded-full shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-1">✨ Anda hemat Rp 50.000</h4>
                    <p className="text-sm text-green-800 dark:text-green-200 leading-relaxed max-w-lg">
                      Selamat! Anda menghemat biaya pengiriman dengan memilih opsi Antar Sendiri. Silakan antar barang Anda ke lokasi gudang kami.
                    </p>
                    <button className="mt-3 text-sm font-bold text-green-800 dark:text-green-300 hover:underline flex items-center gap-1">
                      Lihat Lokasi Gudang <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Map Preview (Optional Visual Enhancement) */}
              <div className="mt-2">
                <div 
                  className="rounded-lg h-32 w-full bg-cover bg-center relative group cursor-pointer overflow-hidden" 
                  data-alt="Map showing the location of the warehouse in Jakarta" 
                  data-location="Jakarta Warehouse Location" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0CdSdl7A1bmg9kzzbP3gC6cTUWgqm9iFHAampfdr9c9TqoVT8flzQTzx_BCB4GG6aGDqEkFfvFU8pocgSdvl0zBGrRZaCkLFavWZvGyXJIUiwbjx8bGsw5tw-jih1IKG3Qar6bHEgFve0e7D8Yjwdbidq9xqgNuV2_YlAjKoq3FfulTtM6PEgxg_y_y5P2SNuM_E1nC9nyw1Bw1LSn4ZgGnnvm-FJJSh-aq9khc85OL6GIwSP5xhp2IPnRUrImtJ7kPLDftU0u2IN")'}}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-black/80 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      <span className="text-xs font-bold text-gray-900 dark:text-white">Gudang Jakarta Selatan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Right Column: Cost Summary (Span 4) */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-6 flex flex-col h-full">
              <h3 className="font-bold text-xl mb-6 dark:text-white">Rincian Pembayaran</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Sewa Ruang (6 Bulan)</span>
                  <span className="font-semibold text-text-main dark:text-white">Rp 600.000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    Biaya Jemput
                    <span className="material-symbols-outlined text-gray-400 text-xs cursor-help" title="Biaya penjemputan barang dari lokasi Anda">info</span>
                  </span>
                  <div className="text-right">
                    <span className="block font-bold text-primary text-sm">Rp 0</span>
                    <span className="text-[10px] text-primary uppercase tracking-wider font-bold bg-primary/10 px-1.5 py-0.5 rounded">GRATIS</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Biaya Admin</span>
                  <span className="font-semibold text-text-main dark:text-white">Rp 5.000</span>
                </div>
                {/* Promo Code Input (Optional) */}
                <div className="pt-2">
                  <div className="flex gap-2">
                    <input className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-primary focus:border-primary" placeholder="Kode Promo" type="text" />
                    <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Pakai</button>
                  </div>
                </div>
              </div>
              <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-2"></div>
              <div className="flex justify-between items-end mb-8 pt-4">
                <span className="font-bold text-lg text-text-main dark:text-white">TOTAL PEMBAYARAN</span>
                <span className="font-bold text-2xl text-primary">Rp 605.000</span>
              </div>
              <Link to="/booking-success" className="w-full bg-primary hover:bg-primary-dark text-[#0d1b0d] font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
                <span>LANJUT KE PEMBAYARAN</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                <span className="material-symbols-outlined text-sm">lock</span>
                Pembayaran Aman & Terenkripsi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
