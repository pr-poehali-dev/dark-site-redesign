import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Услуги', id: 'services' },
    { label: 'Кейсы', id: 'cases' },
    { label: 'О бюро', id: 'about' },
    { label: 'Адвокат', id: 'lawyer' },
    { label: 'Отзывы', id: 'reviews' },
    { label: 'Контакты', id: 'contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(18,16,14,0.97)' : 'rgba(18,16,14,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(180,145,60,0.18)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: '1.5px solid #b4913c' }}>
            <span style={{ color: '#b4913c', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 18 }}>D</span>
          </div>
          <div className="text-left">
            <div style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', lineHeight: 1.2 }}>
              ДМИТРИЕВ И ПАРТНЁРЫ
            </div>
            <div style={{ color: '#b4913c', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', lineHeight: 1.4 }}>
              АДВОКАТСКОЕ БЮРО
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:text-white transition-colors duration-200 whitespace-nowrap"
              style={{ color: '#c8c0b0', fontSize: 13, letterSpacing: '0.04em' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <a href="tel:+74730000000" className="hover:text-[#b4913c] transition-colors whitespace-nowrap" style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>
            +7 (473) 000-00-00
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: '#b4913c', color: '#12100e' }}
          >
            Заказать звонок
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: '#12100e', borderTop: '1px solid rgba(180,145,60,0.15)' }}>
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-3 text-sm border-b transition-colors hover:text-white"
                style={{ color: '#c8c0b0', borderColor: 'rgba(180,145,60,0.1)' }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a href="tel:+74730000000" style={{ color: '#fff', fontSize: 15, fontWeight: 500 }}>+7 (473) 000-00-00</a>
              <button onClick={() => scrollTo('contact')} className="py-3 text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: '#b4913c', color: '#12100e' }}>
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
