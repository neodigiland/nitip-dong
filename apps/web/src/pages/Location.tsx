
export default function Location() {
  return (
    <div className="layout-container flex w-full grow flex-col max-w-[1200px] px-4 md:px-10 py-8 mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
    
        <span className="text-[#0d1b0d] dark:text-white font-medium">Lokasi Kami</span>
      </div>

      {/* Header Section */}
      <div className="flex flex-col gap-3 mb-8">
        <h1 className="text-[#0d1b0d] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
          Lokasi Gudang
        </h1>
        <p className="text-[#4c9a4c] dark:text-[#6ec76e] text-base md:text-lg font-normal leading-normal max-w-2xl">
          Silakan antar barang Anda ke lokasi gudang kami berikut ini. Pastikan Anda telah mengemas barang dengan aman sebelum melakukan pengantaran.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Location Details Card */}
        <div className="lg:col-span-1 order-2 lg:order-1 flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1a331a] rounded-xl shadow-sm border border-[#e7f3e7] dark:border-[#2a4a2a] overflow-hidden">
            <div className="p-6 flex flex-col gap-6">
              {/* Address Block */}
              <div className="flex gap-4">
                <div className="shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg dark:text-white">Gudang Utama Depok</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Jl. Margonda Raya No. 123,<br />
                    Pondok Cina, Kecamatan Beji,<br />
                    Kota Depok, Jawa Barat 16424
                  </p>
                </div>
              </div>
              <hr className="border-[#e7f3e7] dark:border-[#2a4a2a]" />
              {/* Hours Block */}
              <div className="flex gap-4">
                <div className="shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg dark:text-white">Jam Operasional</h3>
                  <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between w-full max-w-[200px]">
                      <span>Senin - Sabtu</span>
                      <span className="font-medium">09:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between w-full max-w-[200px] text-red-500">
                      <span>Minggu</span>
                      <span className="font-medium">Tutup</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mt-4">
                <button className="group flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary-dark transition-all text-[#0d1b0d] text-base font-bold leading-normal tracking-[0.015em] shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">map</span>
                  <span className="truncate">BUKA DI MAPS</span>
                </button>
              </div>
            </div>
            <div className="bg-[#f0fdf0] dark:bg-[#152e15] px-6 py-4 border-t border-[#e7f3e7] dark:border-[#2a4a2a]">
              <p className="text-sm text-[#4c9a4c] dark:text-[#6ec76e] flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">info</span>
                Mohon tiba 15 menit sebelum tutup.
              </p>
            </div>
          </div>
          {/* Contact Support */}
          <div className="rounded-xl p-4 border border-[#e7f3e7] dark:border-[#2a4a2a] bg-transparent flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-semibold dark:text-white">Butuh bantuan arah?</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Hubungi admin gudang kami</span>
            </div>
            <a href="https://wa.me/6289643728134?text=Halo%20Admin%2C%20saya%20butuh%20bantuan%20arah%20ke%20gudang" target="_blank" rel="noreferrer" className="size-10 rounded-full bg-white dark:bg-[#1a331a] border border-[#e7f3e7] dark:border-[#2a4a2a] flex items-center justify-center text-primary hover:bg-gray-50 dark:hover:bg-[#254225] transition-colors">
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>
        {/* Right Column: Map Visualization */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="w-full rounded-xl overflow-hidden shadow-md border border-[#e7f3e7] dark:border-[#2a4a2a] bg-white dark:bg-[#1a331a]">
            {/* Map Container */}
            <div className="relative w-full h-[250px] lg:h-[400px] bg-gray-200">
              {/* Placeholder Map Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                data-alt="Detailed street map view of Depok area showing roads and landmarks" 
                data-location="Depok" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-MsSMsRGekEYJmCD9JzRIa36G7o6IzBBMsjpsLMN4XsBt167JBOXVUYkO2lYcfbkJ1O5B_7ez0CWdhRrOY7IDMxRnB1ueKo_rGT7Y1tSozZlSYYspuu_kjIyUui2xR7q-lwJvnkT-8_AXWm5QqT14KUuNhJus-xhoIaELjVwJpbKKsnwmD9wPBv-pSTYXi-ggR90745oXdpnSQL0Rfz02rz4X68cxz_aAhGsvNFCMFkmPfSr2pgGgJxZvgfC46EoyZrDx1kW_jtr7")'}}
              >
              </div>
              {/* Stylized Overlay */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              {/* Map Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-primary text-[#0d1b0d] px-3 py-1 rounded-full text-xs font-bold shadow-lg mb-1 whitespace-nowrap">
                  Nitip Dong Warehouse
                </div>
                <div className="text-primary drop-shadow-md">
                  <span className="material-symbols-outlined text-5xl fill-current">location_on</span>
                </div>
              </div>
              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <div className="bg-white dark:bg-[#1a331a] p-2 rounded shadow text-gray-600 dark:text-gray-300 hover:text-primary cursor-pointer">
                  <span className="material-symbols-outlined block">add</span>
                </div>
                <div className="bg-white dark:bg-[#1a331a] p-2 rounded shadow text-gray-600 dark:text-gray-300 hover:text-primary cursor-pointer">
                  <span className="material-symbols-outlined block">remove</span>
                </div>
              </div>
            </div>
            {/* Mini Photo Gallery */}
            <div className="p-4 grid grid-cols-3 gap-3">
              <div className="aspect-video rounded-lg bg-gray-100 overflow-hidden relative group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  data-alt="Exterior view of the warehouse building with clear signage" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLDUgoNNgcfE7YiRK7PasiKceMN8J5Etm8_YEaysif8OTOGCLd9u1HrTRWvYVFmRcprwBodMHguG_ynAY33wrTQLev7a9jGFl1v8eThDqYBD7xxPclL8lJAXzbNAbH6A7sNJN6s7Mc2r0U3AIAfuUDtirlKgDV4EVLknYgK_RahlXgaD1CNLGlfDMGFPuaCkRQwmRjxlmiLxxLpAlKPTDWbcNMMibbTxED_HVpyPg4WGXlDryQOk3ZiSsarOHajtRHS_czNe4l9Kcd")'}}
                ></div>
              </div>
              <div className="aspect-video rounded-lg bg-gray-100 overflow-hidden relative group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  data-alt="Wide shot of the parking area and loading dock entrance" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbDwpw7aat4P1Qr15ar5n99zbi9Y-aJ0uJRXpeN1Una-4ie9OI_c9qHcBobk18vUTPq83hDuqjgQ77rTJhPrjLhflj6Yx-hCoRs6pjFM0oazxRXtvQO9Ivs6H4x8lOfhTjKJ3USGyuXfM_JWrHALFbGz5TaqKCWdvtlYZpoM3s_KgaIerOmoa8fYKz6rLkSqN-kp60jQoNRJghSb5urd_orFgPDiMWUNYDglZc-yIZvcTgjzWYQesw5J8IKuvxfgHKWCjsVppfUx8B")'}}
                ></div>
              </div>
              <div className="aspect-video rounded-lg bg-gray-100 overflow-hidden relative group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  data-alt="Interior reception desk view with staff ready to assist" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8zPLqMoUERpZrZavqFpeoRPTT9wrFFs9NGzwbwoMt5toMFdtHsFtp6EOY9_8uUkawUrRIY3E9m8U1SoMLWEHiFMtVM3xFjkveg0p4Qh_bxxjy_yVA5bQccxjuQEUvzuxd52S-0UtVRFs_iaVMJe3RQVJy6dY1ZDdenXnBJJIoZx_I-rnpTc5drOVLR6__kXtlU_loxoH6Ja86QK0CVErqCYt7QkdriOW_A47IVhoCZnbCvRo8VEZ2K8HL96VlgruFGPVlnisf-WHJ")'}}
                ></div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">Lihat 5 foto lainnya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
