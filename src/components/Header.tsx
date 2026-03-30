import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'О нас', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Практика', id: 'stats' },
    { label: 'Контакты', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[hsl(220,20%,7%)]/95 backdrop-blur-md border-b border-[hsl(220,15%,18%)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-8 h-8 gold-gradient rounded-sm flex items-center justify-center">
            <span className="text-[hsl(220,20%,7%)] font-bold text-sm font-serif">Д</span>
          </div>
          <div>
            <div className="text-white font-semibold text-sm tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
              Дмитриев и Партнёры
            </div>
            <div className="text-[hsl(43,74%,55%)] text-xs tracking-widest uppercase">Адвокатское бюро</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[hsl(220,10%,70%)] hover:text-[hsl(43,74%,55%)] text-sm tracking-wide transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gold text-[hsl(220,20%,7%)] px-5 py-2 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'hsl(43,74%,55%)' }}
          >
            Получить консультацию
          </button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(220,18%,10%)] border-t border-[hsl(220,15%,18%)]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-[hsl(220,10%,70%)] hover:text-[hsl(43,74%,55%)] text-sm py-2 border-b border-[hsl(220,15%,18%)]"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="text-[hsl(220,20%,7%)] py-3 text-sm font-semibold tracking-wide"
              style={{ backgroundColor: 'hsl(43,74%,55%)' }}
            >
              Получить консультацию
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
