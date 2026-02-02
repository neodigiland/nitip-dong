import RevealOnScroll from './RevealOnScroll';

export default function Benefits() {
  const benefits = [
    {
      icon: 'verified_user',
      title: 'Keamanan Terjamin',
      description: 'Gudang dilengkapi CCTV 24/7 dan sistem keamanan berlapis untuk menjaga barangmu.'
    },
    {
      icon: 'savings',
      title: 'Harga Mahasiswa',
      description: 'Tarif sewa yang sangat terjangkau, khusus didesain agar ramah di kantong mahasiswa.'
    },
    {
      icon: 'location_on',
      title: 'Lokasi Strategis',
      description: 'Gudang dekat dengan berbagai kampus utama, memudahkan akses drop-off dan pick-up.'
    },
    {
      icon: 'calendar_month',
      title: 'Durasi Fleksibel',
      description: 'Bisa titip harian, mingguan, atau bulanan sesuai kebutuhan liburanmu.'
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="layout-container flex justify-center px-4 lg:px-40">
        <div className="w-full max-w-[960px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="flex flex-col gap-3 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-[#0d1b0d]">
                    <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
