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
    { label: 'Отзывы', id: 'reviews' },
    { label: 'Контакты', id: 'contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(15,13,11,0.98)' : 'rgba(15,13,11,0.75)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(180,145,60,0.2)' : '1px solid rgba(180,145,60,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 h-[70px] flex items-center justify-between gap-8">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-4 flex-shrink-0">
          <div
            className="w-9 h-9 flex items-center justify-center flex-shrink-0"
            style={{ border: '1px solid rgba(180,145,60,0.7)' }}
          >
            <span style={{ color: '#c9a84c', fontFamily: 'Old Standard TT, serif', fontWeight: 700, fontSize: 20, lineHeight: 1 }}>Д</span>
          </div>
          <div className="text-left hidden sm:block">
            <div style={{ color: '#e8e0d0', fontFamily: 'Old Standard TT, serif', fontWeight: 400, fontSize: 14, letterSpacing: '0.12em' }}>
              ДМИТРИЕВ И ПАРТНЁРЫ
            </div>
            <div style={{ color: '#c9a84c', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 9, letterSpacing: '0.38em', textTransform: 'uppercase' }}>
              Адвокатское бюро · Воронеж
            </div>
          </div>
        </button>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative transition-colors duration-200"
              style={{ color: '#a09080', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              <span className="group-hover:text-[#e8e0d0] transition-colors">{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#c9a84c' }} />
            </button>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          <a
            href="tel:+74730000000"
            className="hover:text-[#c9a84c] transition-colors"
            style={{ color: '#e8e0d0', fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: 15, letterSpacing: '0.06em' }}
          >
            +7 (473) 000-00-00
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: '#c9a84c', color: '#0f0d0b', fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '10px 20px' }}
          >
            Заказать звонок
          </button>
        </div>

        <button className="lg:hidden" style={{ color: '#e8e0d0' }} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: '#0f0d0b', borderTop: '1px solid rgba(180,145,60,0.12)' }}>
          <div className="px-8 py-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-3 border-b transition-colors hover:text-[#e8e0d0]"
                style={{ color: '#a09080', borderColor: 'rgba(180,145,60,0.08)', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:+74730000000" style={{ color: '#e8e0d0', fontFamily: 'Oswald, sans-serif', fontSize: 17 }}>
                +7 (473) 000-00-00
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="py-3"
                style={{ backgroundColor: '#c9a84c', color: '#0f0d0b', fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: 11, letterSpacing: '0.25em' }}
              >
                ЗАКАЗАТЬ ЗВОНОК
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
