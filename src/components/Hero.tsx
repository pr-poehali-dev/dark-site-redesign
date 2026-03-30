import Icon from '@/components/ui/icon';

const LAWYER_IMG = 'https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/0b7af97f-0410-4d28-8857-5119c0aaaf62.jpg';

const stats = [
  { num: '20+', label: 'лет практики' },
  { num: '1500+', label: 'выигранных дел' },
  { num: '95%', label: 'успешных дел' },
];

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight: '100vh', backgroundColor: '#0f0d0b' }}>

      {/* Тонкая текстура и градиент */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 90% 70% at 65% 40%, rgba(150,110,30,0.09) 0%, transparent 65%)',
      }} />

      {/* Фото адвоката */}
      <div
        className="absolute right-0 top-0 bottom-0 hidden md:block"
        style={{
          width: '55%',
          maskImage: 'linear-gradient(to right, transparent 0%, black 22%, black 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 22%, black 75%, transparent 100%)',
        }}
      >
        <img
          src={LAWYER_IMG}
          alt="Адвокат"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.6) contrast(1.1) saturate(0.85)' }}
        />
        {/* Нижний фейд */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f0d0b 0%, transparent 35%)' }} />
        {/* Левый фейд */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0f0d0b 0%, transparent 20%)' }} />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col justify-center min-h-screen pt-28 pb-16">
        <div style={{ maxWidth: 600 }}>

          {/* Надпись сверху */}
          <div className="flex items-center gap-4 mb-10">
            <div style={{ width: 36, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
            <span style={{ color: '#c9a84c', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 11, letterSpacing: '0.38em', textTransform: 'uppercase' }}>
              Адвокатское бюро · Воронеж · с 2004 года
            </span>
          </div>

          {/* Заголовок — крупный, с засечками */}
          <h1 style={{
            fontFamily: 'Old Standard TT, serif',
            color: '#f0ebe0',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '0.015em',
            marginBottom: 10,
          }} className="text-5xl md:text-6xl xl:text-[80px]">
            Защищаем
          </h1>
          <h1 style={{
            fontFamily: 'Old Standard TT, serif',
            color: '#f0ebe0',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '0.015em',
            marginBottom: 10,
          }} className="text-5xl md:text-6xl xl:text-[80px]">
            ваши интересы
          </h1>
          <h1 style={{
            fontFamily: 'Old Standard TT, serif',
            fontStyle: 'italic',
            color: '#c9a84c',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '0.01em',
            marginBottom: 32,
          }} className="text-5xl md:text-6xl xl:text-[80px]">
            в суде
          </h1>

          {/* Подзаголовок */}
          <p style={{
            color: '#8a7d6a',
            fontFamily: 'EB Garamond, serif',
            fontSize: 18,
            lineHeight: 1.75,
            marginBottom: 48,
            maxWidth: 460,
          }}>
            Профессиональная юридическая защита в Воронеже.<br />
            Уголовные, гражданские и арбитражные дела.
          </p>

          {/* Статистика */}
          <div className="flex items-stretch gap-0 mb-12">
            {stats.map((s, i) => (
              <div key={i} className="flex items-stretch">
                <div style={{ paddingRight: 28, paddingLeft: i === 0 ? 0 : 28 }}>
                  <div style={{
                    fontFamily: 'Old Standard TT, serif',
                    color: '#c9a84c',
                    fontSize: 40,
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: 5,
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    color: '#6a5e50',
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 300,
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}>
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div style={{ width: 1, background: 'linear-gradient(to bottom, transparent, rgba(180,145,60,0.4), transparent)', alignSelf: 'stretch' }} />
                )}
              </div>
            ))}
          </div>

          {/* Кнопки */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-3 transition-all hover:brightness-105 active:scale-[0.98]"
              style={{
                backgroundColor: '#c9a84c',
                color: '#0f0d0b',
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '14px 28px',
              }}
            >
              Получить консультацию
              <Icon name="ArrowRight" size={15} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-3 transition-all"
              style={{
                border: '1px solid rgba(180,145,60,0.4)',
                color: '#a09080',
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 300,
                fontSize: 12,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '14px 28px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a84c';
                (e.currentTarget as HTMLButtonElement).style.color = '#e8e0d0';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(180,145,60,0.4)';
                (e.currentTarget as HTMLButtonElement).style.color = '#a09080';
              }}
            >
              <Icon name="Phone" size={14} />
              Позвонить сейчас
            </button>
          </div>
        </div>
      </div>

      {/* Нижний фейд в секцию практик */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to bottom, transparent, #0f0d0b)' }} />
    </section>
  );
};

export default Hero;
