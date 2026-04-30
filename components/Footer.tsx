export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/70 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-green text-xl">⚕</span>
              <p className="text-white font-bold text-sm leading-tight">
                Hornaman Chiropractic Center
              </p>
            </div>
            <p className="text-xs leading-relaxed">
              Compassionate chiropractic care for the whole family in Union City,
              Pennsylvania.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-3">
              Contact
            </h3>
            <address className="not-italic space-y-1 text-xs">
              <p>107 N. Main St.</p>
              <p>Union City, PA 16438</p>
              <p className="mt-2">
                <a href="tel:+18144387242" className="text-yellow-green hover:text-yellow-green-light transition-colors">
                  (814) 438-7242
                </a>
              </p>
            </address>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-3">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2 text-xs">
              <a href="#services" className="hover:text-yellow-green transition-colors">Services</a>
              <a href="#conditions" className="hover:text-yellow-green transition-colors">Conditions Treated</a>
              <a href="#about" className="hover:text-yellow-green transition-colors">About Dr. Hornaman</a>
              <a href="#contact" className="hover:text-yellow-green transition-colors">Contact &amp; Location</a>
              <a
                href="https://cal.com/hornamanchiropracticcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-green hover:text-yellow-green-light transition-colors font-semibold"
              >
                Book an Appointment →
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-center text-white/40">
          &copy; {year} Hornaman Chiropractic Center &mdash; Union City, PA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
