import { Link } from 'react-router-dom';

export default function Schedule() {
  return (
    <div className="flex-1 w-full max-w-[1200px] mx-auto p-4 md:p-8">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Link className="text-text-secondary text-sm font-medium leading-normal hover:text-primary" to="/">Home</Link>
        <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
        <a className="text-text-secondary text-sm font-medium leading-normal hover:text-primary" href="#">Book Storage</a>
        <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
        <span className="text-text-main dark:text-white text-sm font-medium leading-normal">Select Time</span>
      </div>

      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Pilih Waktu Kedatangan</h1>
          <p className="text-text-secondary text-base font-normal leading-normal">Appointment Booking System — Antar Sendiri (Self Drop-off)</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Calendar */}
        <div className="lg:col-span-4 xl:col-span-3">
          <div className="bg-white dark:bg-[#1a2e1a] rounded-xl shadow-sm border border-[#e7f3e7] dark:border-white/10 p-4">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4 px-1">
              <button className="text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full p-1 transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <p className="text-text-main dark:text-white text-base font-bold leading-tight">January 2026</p>
              <button className="text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full p-1 transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-y-2">
              {/* Weekday Headers */}
              <div className="text-text-secondary text-[11px] font-bold uppercase text-center py-2">S</div>
              <div className="text-text-secondary text-[11px] font-bold uppercase text-center py-2">M</div>
              <div className="text-text-secondary text-[11px] font-bold uppercase text-center py-2">T</div>
              <div className="text-text-secondary text-[11px] font-bold uppercase text-center py-2">W</div>
              <div className="text-text-secondary text-[11px] font-bold uppercase text-center py-2">T</div>
              <div className="text-text-secondary text-[11px] font-bold uppercase text-center py-2">F</div>
              <div className="text-text-secondary text-[11px] font-bold uppercase text-center py-2">S</div>
              {/* Days */}
              {/* Empty start days (Jan 1 2026 is Thu) */}
              <div className="col-span-4"></div>
              {/* 1: Holiday (X) */}
              <button className="group h-10 w-full flex items-center justify-center relative">
                <div className="flex items-center justify-center size-8 rounded-full text-red-400 group-hover:bg-red-50 dark:group-hover:bg-red-900/20">
                  <span className="text-sm font-medium relative z-10 opacity-50">1</span>
                  <span className="material-symbols-outlined absolute text-lg text-red-500/50">close</span>
                </div>
              </button>
              {/* 2: Selected (Filled Primary) */}
              <button className="group h-10 w-full flex items-center justify-center">
                <div className="flex items-center justify-center size-8 rounded-full bg-primary text-text-main shadow-md ring-2 ring-primary ring-offset-2 dark:ring-offset-[#1a2e1a]">
                  <span className="text-sm font-bold">2</span>
                </div>
              </button>
              {/* 3: Available (Circle Outline) */}
              <button className="group h-10 w-full flex items-center justify-center">
                <div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white group-hover:bg-primary/10 transition-colors">
                  <span className="text-sm font-medium">3</span>
                </div>
              </button>
              {/* 4: Available (Circle Outline) */}
              <button className="group h-10 w-full flex items-center justify-center">
                <div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white group-hover:bg-primary/10 transition-colors">
                  <span className="text-sm font-medium">4</span>
                </div>
              </button>
              {/* 5: Unavailable (X) */}
              <button className="group h-10 w-full flex items-center justify-center relative">
                <div className="flex items-center justify-center size-8 rounded-full text-gray-400 dark:text-gray-500 group-hover:bg-gray-100 dark:group-hover:bg-white/5">
                  <span className="text-sm font-medium relative z-10 opacity-50">5</span>
                  <span className="material-symbols-outlined absolute text-lg text-gray-400/50">close</span>
                </div>
              </button>
              {/* 6: Available */}
              <button className="group h-10 w-full flex items-center justify-center">
                <div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white group-hover:bg-primary/10 transition-colors">
                  <span className="text-sm font-medium">6</span>
                </div>
              </button>
              {/* 7: Available */}
              <button className="group h-10 w-full flex items-center justify-center">
                <div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white group-hover:bg-primary/10 transition-colors">
                  <span className="text-sm font-medium">7</span>
                </div>
              </button>
              {/* 8: Available */}
              <button className="group h-10 w-full flex items-center justify-center">
                <div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white group-hover:bg-primary/10 transition-colors">
                  <span className="text-sm font-medium">8</span>
                </div>
              </button>
              {/* 9: Available */}
              <button className="group h-10 w-full flex items-center justify-center">
                <div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white group-hover:bg-primary/10 transition-colors">
                  <span className="text-sm font-medium">9</span>
                </div>
              </button>
              {/* Demo mix similar to original HTML */}
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">10</div></button>
              <button className="group h-10 w-full flex items-center justify-center relative text-gray-400"><span className="absolute material-symbols-outlined opacity-40">close</span>11</button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">12</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">13</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">14</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">15</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">16</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">17</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">18</div></button>
              <button className="group h-10 w-full flex items-center justify-center relative text-gray-400"><span className="absolute material-symbols-outlined opacity-40">close</span>19</button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">20</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">21</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">22</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">23</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">24</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">25</div></button>
              <button className="group h-10 w-full flex items-center justify-center relative text-gray-400"><span className="absolute material-symbols-outlined opacity-40">close</span>26</button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">27</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">28</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">29</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">30</div></button>
              <button className="group h-10 w-full flex items-center justify-center"><div className="flex items-center justify-center size-8 rounded-full border border-primary text-text-main dark:text-white hover:bg-primary/10">31</div></button>
            </div>
            <div className="mt-6 flex flex-col gap-2 border-t border-[#e7f3e7] dark:border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <div className="size-4 rounded-full border border-primary"></div>
                <span className="text-xs text-text-secondary">Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-4 rounded-full bg-primary"></div>
                <span className="text-xs text-text-secondary">Selected</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-4 text-gray-400">
                  <span className="material-symbols-outlined text-sm">close</span>
                </div>
                <span className="text-xs text-text-secondary">Unavailable / Holiday</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Time Slots */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
          {/* Selected Date Header */}
          <div className="flex items-center gap-3 pb-2 border-b border-[#e7f3e7] dark:border-white/10">
            <span className="material-symbols-outlined text-primary text-3xl">calendar_month</span>
            <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">Selasa, 2 Januari 2026</h3>
          </div>
          {/* Slot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Slot 1: Available (Green) */}
            <button className="group relative flex flex-col items-start gap-2 rounded-lg border border-[#e7f3e7] dark:border-white/10 bg-white dark:bg-[#1a2e1a] p-5 hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-full flex justify-between items-center">
                <span className="text-text-main dark:text-white text-2xl font-bold">09:00</span>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-[#e7f3e7] dark:bg-white/10 text-text-main dark:text-white">Start</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span className="text-green-600 dark:text-green-400 text-sm font-bold">5 slot available</span>
              </div>
              <span className="text-text-secondary text-xs">Hingga 10:00</span>
            </button>
            {/* Slot 2: Selected */}
            <button className="relative flex flex-col items-start gap-2 rounded-lg border-2 border-primary bg-primary/10 dark:bg-primary/20 p-5 shadow-sm">
              <div className="absolute top-0 right-0 p-2">
                <div className="size-6 rounded-full bg-primary flex items-center justify-center text-text-main">
                  <span className="material-symbols-outlined text-base font-bold">check</span>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-text-main dark:text-white text-2xl font-bold">10:00</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span className="text-green-700 dark:text-green-300 text-sm font-bold">3 slot available</span>
              </div>
              <span className="text-text-main dark:text-white text-xs opacity-70">Hingga 11:00</span>
            </button>
            {/* Slot 3: Low Availability (Yellow) */}
            <button className="group relative flex flex-col items-start gap-2 rounded-lg border border-[#e7f3e7] dark:border-white/10 bg-white dark:bg-[#1a2e1a] p-5 hover:border-yellow-400 hover:shadow-md transition-all">
              <div className="w-full flex justify-between items-center">
                <span className="text-text-main dark:text-white text-2xl font-bold">11:00</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="size-2 rounded-full bg-yellow-400"></div>
                <span className="text-yellow-600 dark:text-yellow-400 text-sm font-bold">1 slot available</span>
              </div>
              <span className="text-text-secondary text-xs">Hingga 12:00</span>
            </button>
            {/* Slot 4: Full (Red/Disabled) */}
            <div className="relative flex flex-col items-start gap-2 rounded-lg border border-transparent bg-gray-100 dark:bg-white/5 p-5 opacity-70 cursor-not-allowed">
              <div className="w-full flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-500 text-2xl font-bold line-through">12:00</span>
                <span className="text-xs font-black px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 tracking-wider">PENUH</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="size-2 rounded-full bg-red-500"></div>
                <span className="text-red-500 text-sm font-bold">0 slot available</span>
              </div>
              <span className="text-gray-400 text-xs">Hingga 13:00</span>
            </div>
            {/* Slot 5: Available */}
            <button className="group relative flex flex-col items-start gap-2 rounded-lg border border-[#e7f3e7] dark:border-white/10 bg-white dark:bg-[#1a2e1a] p-5 hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-full flex justify-between items-center">
                <span className="text-text-main dark:text-white text-2xl font-bold">13:00</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span className="text-green-600 dark:text-green-400 text-sm font-bold">4 slot available</span>
              </div>
              <span className="text-text-secondary text-xs">Hingga 14:00</span>
            </button>
            {/* Slot 6: Available */}
            <button className="group relative flex flex-col items-start gap-2 rounded-lg border border-[#e7f3e7] dark:border-white/10 bg-white dark:bg-[#1a2e1a] p-5 hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-full flex justify-between items-center">
                <span className="text-text-main dark:text-white text-2xl font-bold">14:00</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span className="text-green-600 dark:text-green-400 text-sm font-bold">2 slot available</span>
              </div>
              <span className="text-text-secondary text-xs">Hingga 15:00</span>
            </button>
            {/* Slot 7: Available */}
            <button className="group relative flex flex-col items-start gap-2 rounded-lg border border-[#e7f3e7] dark:border-white/10 bg-white dark:bg-[#1a2e1a] p-5 hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-full flex justify-between items-center">
                <span className="text-text-main dark:text-white text-2xl font-bold">15:00</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span className="text-green-600 dark:text-green-400 text-sm font-bold">6 slot available</span>
              </div>
              <span className="text-text-secondary text-xs">Hingga 16:00</span>
            </button>
          </div>
        </div>
      </div>
      {/* Footer / Action Bar */}
      <div className="mt-12 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#e7f3e7] dark:border-white/10">
        <button className="w-full sm:w-auto px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-text-main dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          Kembali
        </button>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="text-right hidden sm:block">
            <p className="text-sm text-text-secondary">Pilihan Anda:</p>
            <p className="text-base font-bold text-text-main dark:text-white">2 Jan 2026, 10:00 WIB</p>
          </div>
          <Link to="/order-summary" className="w-full sm:w-auto px-10 py-3 rounded-lg bg-primary text-text-main font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 transition-all flex items-center justify-center gap-2">
            Konfirmasi Jadwal
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
