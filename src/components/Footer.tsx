const Footer = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ backgroundColor: '#0a0806', borderTop: '1px solid rgba(180,145,60,0.12)' }}>
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4">
            <div style={{ width: 34, height: 34, border: '1px solid rgba(180,145,60,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#c9a84c', fontFamily: 'Old Standard TT, serif', fontWeight: 700, fontSize: 17 }}>Д</span>
            </div>
            <div>
              <div style={{ color: '#e8e0d0', fontFamily: 'Old Standard TT, serif', fontSize: 13, letterSpacing: '0.1em' }}>Дмитриев и Партнёры</div>
              <div style={{ color: '#5a5040', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Адвокатское бюро</div>
            </div>
          </div>

          <nav className="flex items-center gap-7 flex-wrap justify-center">
            {[{ l: 'Услуги', id: 'services' }, { l: 'Кейсы', id: 'cases' }, { l: 'О бюро', id: 'about' }, { l: 'Контакты', id: 'contact' }].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-[#c9a84c] transition-colors"
                style={{ color: '#5a5040', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                {item.l}
              </button>
            ))}
          </nav>

          <div style={{ color: '#3a3028', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 11, letterSpacing: '0.06em' }}>
            © 2004–2024 Дмитриев и Партнёры
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
