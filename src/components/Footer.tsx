const Footer = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ backgroundColor: '#0e0c0a', borderTop: '1px solid rgba(180,145,60,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ border: '1px solid #b4913c' }}>
              <span style={{ color: '#b4913c', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 15 }}>D</span>
            </div>
            <div>
              <div style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: 12, letterSpacing: '0.08em' }}>ДМИТРИЕВ И ПАРТНЁРЫ</div>
              <div style={{ color: '#b4913c', fontSize: 9, letterSpacing: '0.2em' }}>АДВОКАТСКОЕ БЮРО</div>
            </div>
          </div>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { l: 'Услуги', id: 'services' },
              { l: 'Кейсы', id: 'cases' },
              { l: 'О бюро', id: 'about' },
              { l: 'Контакты', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-[#b4913c] transition-colors"
                style={{ color: '#6a6060', fontSize: 12, letterSpacing: '0.08em' }}
              >
                {item.l}
              </button>
            ))}
          </nav>

          <div style={{ color: '#4a4540', fontSize: 12 }}>
            © 2024 Дмитриев и Партнёры. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
