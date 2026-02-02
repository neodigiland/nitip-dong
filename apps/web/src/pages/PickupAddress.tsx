import { Link } from 'react-router-dom';

export default function PickupAddress() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex mb-6">
        <ol className="flex items-center space-x-2 text-sm md:text-base">
          <li>
            <Link className="text-primary hover:text-primary/80 font-medium" to="/">Beranda</Link>
          </li>
          <li>
            <span className="text-neutral-400 dark:text-neutral-500">/</span>
          </li>
          <li>
            <Link className="text-primary hover:text-primary/80 font-medium" to="/delivery-method">Layanan Jemput</Link>
          </li>
          <li>
            <span className="text-neutral-400 dark:text-neutral-500">/</span>
          </li>
          <li>
            <span aria-current="page" className="text-neutral-900 dark:text-white font-medium">Input Alamat</span>
          </li>
        </ol>
      </nav>

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 dark:text-white mb-2 leading-tight">
          Di mana kami harus menjemput barangmu?
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Pastikan titik peta sesuai agar kurir mudah menemukan lokasimu.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Address Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-2 mb-6 border-b border-neutral-100 dark:border-neutral-800 pb-4">
              <span className="material-symbols-outlined text-primary">home_pin</span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Detail Alamat</h3>
            </div>
            <div className="space-y-6">
              <label className="block group">
                <span className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 group-focus-within:text-primary transition-colors">Alamat Lengkap</span>
                <textarea className="w-full rounded-lg bg-background-light dark:bg-neutral-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-neutral-900 focus:ring-0 text-neutral-900 dark:text-white placeholder:text-neutral-400 min-h-[140px] resize-none p-4 transition-all shadow-sm" placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan..."></textarea>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block group">
                  <span className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 group-focus-within:text-primary transition-colors">Detail Lokasi (Patokan)</span>
                  <input className="w-full rounded-lg bg-background-light dark:bg-neutral-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-neutral-900 focus:ring-0 text-neutral-900 dark:text-white placeholder:text-neutral-400 h-12 px-4 transition-all shadow-sm" placeholder="Contoh: Pagar hitam, depan warkop" type="text"/>
                </label>
                <label className="block group">
                  <span className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 group-focus-within:text-primary transition-colors">No. WhatsApp</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-neutral-500 font-medium">+62</span>
                    </div>
                    <input className="w-full rounded-lg bg-background-light dark:bg-neutral-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-neutral-900 focus:ring-0 text-neutral-900 dark:text-white placeholder:text-neutral-400 h-12 pl-12 pr-4 transition-all shadow-sm" placeholder="812 xxxx xxxx" type="tel"/>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* Additional Info / Note */}
          <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <span className="material-symbols-outlined text-primary shrink-0">info</span>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Kurir akan menghubungimu melalui WhatsApp sebelum menuju ke lokasi untuk konfirmasi penjemputan. Pastikan nomor yang kamu masukkan aktif dan terhubung dengan WhatsApp.
            </p>
          </div>
        </div>

        {/* Right Column: Map & Summary */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
          {/* Map Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-sm border border-neutral-100 dark:border-neutral-800 relative group">
            {/* Map Header */}
            <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex justify-between items-center bg-white dark:bg-neutral-900 z-10 relative">
              <h3 className="font-bold flex items-center gap-2 text-sm md:text-base text-neutral-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">map</span>
                Titik Penjemputan
              </h3>
              <button className="text-xs font-semibold text-primary hover:text-green-600 transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">my_location</span>
                Gunakan Lokasi Saya
              </button>
            </div>
            {/* Map View */}
            <div className="relative w-full h-[300px] bg-neutral-200 dark:bg-neutral-700">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80" 
                data-alt="Map showing city streets layout" 
                data-location="Jakarta" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0CdSdl7A1bmg9kzzbP3gC6cTUWgqm9iFHAampfdr9c9TqoVT8flzQTzx_BCB4GG6aGDqEkFfvFU8pocgSdvl0zBGrRZaCkLFavWZvGyXJIUiwbjx8bGsw5tw-jih1IKG3Qar6bHEgFve0e7D8Yjwdbidq9xqgNuV2_YlAjKoq3FfulTtM6PEgxg_y_y5P2SNuM_E1nC9nyw1Bw1LSn4ZgGnnvm-FJJSh-aq9khc85OL6GIwSP5xhp2IPnRUrImtJ7kPLDftU0u2IN")'}}
              >
              </div>
              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full drop-shadow-xl z-10">
                <span className="material-symbols-outlined text-6xl text-primary animate-bounce filter drop-shadow-md">location_on</span>
                <div className="w-4 h-2 bg-black/30 rounded-full blur-[2px] absolute bottom-[2px] left-1/2 -translate-x-1/2"></div>
              </div>
              {/* Map Controls Overlay */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
                <button className="size-9 bg-white dark:bg-neutral-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors text-neutral-700 dark:text-neutral-200">
                  <span className="material-symbols-outlined text-xl">add</span>
                </button>
                <button className="size-9 bg-white dark:bg-neutral-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors text-neutral-700 dark:text-neutral-200">
                  <span className="material-symbols-outlined text-xl">remove</span>
                </button>
              </div>
              {/* Search Overlay */}
              <div className="absolute top-4 left-4 right-4 z-10">
                <div className="relative shadow-lg rounded-lg group">
                  <input className="w-full h-11 pl-10 pr-4 rounded-lg border-none focus:ring-2 focus:ring-primary text-sm bg-white/95 backdrop-blur-sm dark:bg-neutral-800/95 text-neutral-900 dark:text-white placeholder:text-neutral-400 transition-all" placeholder="Cari lokasi..." type="text"/>
                  <span className="material-symbols-outlined absolute left-3 top-3 text-neutral-400 text-lg group-focus-within:text-primary transition-colors">search</span>
                </div>
              </div>
            </div>
          </div>
          {/* Cost Summary Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">receipt_long</span>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">Rincian Biaya</h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">Jarak dari gudang</span>
                <span className="font-bold text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">12.5 km</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">Biaya dasar</span>
                <span className="font-medium text-neutral-900 dark:text-white">Rp 20.000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">Biaya per km</span>
                <span className="font-medium text-neutral-900 dark:text-white">Rp 2.000 x 12.5</span>
              </div>
              <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-2"></div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">Total Estimasi</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">Ongkos Kirim</span>
                </div>
                <span className="text-2xl font-black text-primary tracking-tight">Rp 45.000</span>
              </div>
            </div>
            <Link to="/order-summary" className="w-full bg-primary hover:bg-green-500 text-black font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 group">
              Lanjut ke Pembayaran
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
