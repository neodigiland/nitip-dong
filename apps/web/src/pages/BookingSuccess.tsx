import { Link } from 'react-router-dom';

export default function BookingSuccess() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center py-10 px-4 sm:px-6">
      <div className="w-full max-w-[520px] flex flex-col gap-6">
        {/* Success Message */}
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-text-main dark:text-white">Booking Berhasil!</h1>
          <p className="text-slate-500 dark:text-slate-400">Tunjukkan QR Code ini kepada petugas kami.</p>
        </div>

        {/* The Ticket Card */}
        <div className="bg-white dark:bg-[#1a2e1a] rounded-xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 relative">
          {/* Ticket Header Status */}
          <div className="bg-primary/10 dark:bg-primary/20 p-4 flex items-center justify-center gap-2 border-b border-primary/10">
            <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Confirmed</span>
          </div>

          {/* QR Section */}
          <div className="p-8 pb-6 flex flex-col items-center bg-white dark:bg-[#152615]">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              {/* QR Code Placeholder */}
              <div 
                className="size-48 bg-slate-900 bg-center bg-cover rounded-lg" 
                data-alt="Black and white QR code pattern for booking verification" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDU9PM2vxB-M1pOaj6WuO4fNrHZY9HhyIzImGBKxGN8LV7aBheHwRtRNyJTjEjEOH39JMVNKNqvCm90LCrGTLUuRsa-8FtKbc9JJILTAGZg5jg6iLn-RB5wN_XoyW_5EhOuBVy9XgEttsBooeq6WNuFibFsdQP0aFAM_Xr075Q71FkXBsviGLdYcc5BW4dNaCb6HUubFQ0gFMADXpBlIhS48Bcv3pFhmu2SSa46rf5PfRNpNDtokP78KItx_ZMzCHownOOTzqdW7LRx")'}}
              >
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Booking Reference</p>
              <h2 className="text-3xl font-mono font-bold text-slate-900 dark:text-white tracking-wider">#8829-AZ</h2>
            </div>
          </div>

          {/* Perforation Line */}
          <div className="relative h-px w-full ticket-perforation my-2">
            <div className="half-circle left-[-12px]"></div>
            <div className="half-circle right-[-12px]"></div>
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-8 pt-4 bg-white dark:bg-[#152615]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Date */}
              <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span className="text-xs font-semibold uppercase tracking-wide">Tanggal</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-slate-100">Senin,</p>
                <p className="font-medium text-slate-600 dark:text-slate-300 text-sm">24 Jan 2026</p>
              </div>
              {/* Time */}
              <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span className="text-xs font-semibold uppercase tracking-wide">Waktu</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-slate-100">14:00 - 15:00</p>
                <p className="font-medium text-slate-600 dark:text-slate-300 text-sm">WIB</p>
              </div>
              {/* Location */}
              <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="text-xs font-semibold uppercase tracking-wide">Lokasi</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-slate-100">Gudang Utama</p>
                <p className="font-medium text-slate-600 dark:text-slate-300 text-sm">Depok</p>
              </div>
            </div>
          </div>

          {/* Warning/Instruction Footer inside Card */}
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 border-t border-amber-100 dark:border-amber-900/30 flex gap-3 items-start">
            <span className="material-symbols-outlined text-amber-600 dark:text-amber-500 shrink-0 mt-0.5">info</span>
            <p className="text-xs md:text-sm text-amber-900 dark:text-amber-400 leading-relaxed">
              Harap datang tepat waktu. QR Code ini hanya berlaku pada jam yang telah ditentukan untuk proses check-in barang.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="group flex items-center justify-center gap-2 bg-primary hover:bg-[#0fd60f] text-black font-bold py-3.5 px-6 rounded-lg transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined">download</span>
              <span>SIMPAN QR</span>
            </button>
            <button className="group flex items-center justify-center gap-2 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-700 dark:text-slate-200 font-bold py-3.5 px-6 rounded-lg transition-all hover:bg-slate-50 dark:hover:bg-white/5 active:scale-[0.98]">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">share</span>
              <span>SHARE</span>
            </button>
          </div>
          <Link to="/" className="mt-2 text-center text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors py-2">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
