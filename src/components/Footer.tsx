const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'hsl(220,22%,5%)', borderTop: '1px solid hsl(220,15%,18%)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(43,74%,55%), hsl(43,80%,68%), hsl(43,60%,45%))' }}>
                <span className="text-[hsl(220,20%,7%)] font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>Д</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Дмитриев и Партнёры
                </div>
                <div className="text-[hsl(43,74%,55%)] text-xs tracking-widest uppercase">Адвокатское бюро</div>
              </div>
            </div>
            <p className="text-[hsl(220,10%,45%)] text-sm leading-relaxed">
              Профессиональная юридическая защита в Воронеже с 2009 года.
            </p>
          </div>

          <div>
            <div className="text-[hsl(43,74%,55%)] text-xs tracking-[0.2em] uppercase mb-4">Навигация</div>
            <div className="space-y-2">
              {[
                { label: 'О нас', id: 'about' },
                { label: 'Услуги', id: 'services' },
                { label: 'Наша практика', id: 'stats' },
                { label: 'Контакты', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block text-left text-[hsl(220,10%,50%)] hover:text-[hsl(43,74%,55%)] text-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[hsl(43,74%,55%)] text-xs tracking-[0.2em] uppercase mb-4">Контакты</div>
            <div className="space-y-2 text-[hsl(220,10%,50%)] text-sm">
              <div>г. Воронеж, ул. Плехановская, 23</div>
              <a href="tel:+74732000000" className="block hover:text-[hsl(43,74%,55%)] transition-colors">
                +7 (473) 200-00-00
              </a>
              <a href="mailto:info@dmitriev-advokat.ru" className="block hover:text-[hsl(43,74%,55%)] transition-colors">
                info@dmitriev-advokat.ru
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[hsl(220,10%,35%)] text-xs">
            © 2024 Адвокатское бюро «Дмитриев и Партнёры». Все права защищены.
          </div>
          <div className="text-[hsl(220,10%,35%)] text-xs">
            Регистрационный номер в реестре адвокатов Воронежской области
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
