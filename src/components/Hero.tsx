import Icon from '@/components/ui/icon';

const LAWYER_IMG = 'https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/0b7af97f-0410-4d28-8857-5119c0aaaf62.jpg';

const stats = [
  { num: '20+', label: 'лет практики' },
  { num: '1500+', label: 'выигранных дел' },
  { num: '95%', label: 'успешных дел' },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight: '100vh', backgroundColor: '#12100e' }}>
      {/* Bg texture */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 70% 50%, rgba(180,145,60,0.07) 0%, transparent 70%)' }} />

      {/* Lawyer photo — right side */}
      <div
        className="absolute right-0 top-0 bottom-0 hidden md:block"
        style={{ width: '52%', maskImage: 'linear-gradient(to right, transparent 0%, black 25%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)' }}
      >
        <img
          src={LAWYER_IMG}
          alt="Адвокат"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.75) contrast(1.05)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #12100e 0%, transparent 30%, transparent 70%, #12100e 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #12100e 0%, transparent 40%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-[580px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: 32, height: 1, backgroundColor: '#b4913c' }} />
            <span style={{ color: '#b4913c', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Адвокатское бюро · Воронеж
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#fff', fontWeight: 600, lineHeight: 1.08, marginBottom: 20 }}
            className="text-6xl md:text-7xl xl:text-8xl">
            ЗАЩИЩАЕМ<br />ВАШИ<br />
            <span style={{ color: '#b4913c' }}>ИНТЕРЕСЫ</span><br />В СУДЕ
          </h1>

          {/* Sub */}
          <p style={{ color: '#c8c0b0', fontSize: 16, marginBottom: 36, lineHeight: 1.6 }}>
            Профессиональная юридическая защита <span style={{ color: '#fff', fontWeight: 500 }}>в Воронеже</span>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-0 mb-10">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center px-5 first:pl-0">
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', color: '#b4913c', fontSize: 42, fontWeight: 700, lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ color: '#8a8070', fontSize: 12, marginTop: 4, letterSpacing: '0.02em' }}>{s.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div style={{ width: 1, height: 40, backgroundColor: 'rgba(180,145,60,0.35)' }} />
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-3 px-7 py-4 font-bold text-xs tracking-widest uppercase transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#b4913c', color: '#12100e' }}
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              <Icon name="ArrowRight" size={16} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-3 px-7 py-4 font-bold text-xs tracking-widest uppercase transition-all hover:border-[#b4913c] hover:text-[#b4913c]"
              style={{ border: '1px solid rgba(180,145,60,0.5)', color: '#c8c0b0' }}
            >
              ПОЗВОНИТЬ СЕЙЧАС
              <Icon name="Phone" size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: 'linear-gradient(to bottom, transparent, #12100e)' }} />
    </section>
  );
};

export default Hero;