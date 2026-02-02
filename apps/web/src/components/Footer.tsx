import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-forest to-forest-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Nitip Dong Logo" className="h-10 w-10 rounded-xl object-cover ring-2 ring-primary/30" />
              <span className="text-2xl font-extrabold text-white">Nitip Dong</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm mb-6">
              Solusi penitipan barang mahasiswa nomor #1 di Indonesia. Aman, terpercaya, dan terjangkau untuk semua kebutuhanmu.
            </p>
            <div className="flex gap-3">
              <a className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary hover:text-forest flex items-center justify-center transition-all" href="https://instagram.com" target="_blank" rel="noreferrer">
                <span className="material-symbols-outlined text-xl">photo_camera</span>
              </a>
              <a className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary hover:text-forest flex items-center justify-center transition-all" href="https://twitter.com" target="_blank" rel="noreferrer">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
              <a className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary hover:text-forest flex items-center justify-center transition-all" href="https://wa.me/6289643728134" target="_blank" rel="noreferrer">
                <span className="material-symbols-outlined text-xl">chat</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li><Link className="text-white/60 hover:text-primary transition-colors font-medium" to="/">Beranda</Link></li>
              <li><Link className="text-white/60 hover:text-primary transition-colors font-medium" to="/pricing">Harga</Link></li>
              <li><Link className="text-white/60 hover:text-primary transition-colors font-medium" to="/faq">FAQ</Link></li>
              <li><Link className="text-white/60 hover:text-primary transition-colors font-medium" to="/about">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60">
                <span className="material-symbols-outlined text-lg text-primary">location_on</span>
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <span className="material-symbols-outlined text-lg text-primary">mail</span>
                <span>hello@nitipdong.id</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <span className="material-symbols-outlined text-lg text-primary">phone</span>
                <span>+62 896-4372-8134</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40 relative z-10">
        © {new Date().getFullYear()} Nitip Dong. All rights reserved.
      </div>
    </footer>
  );
}
