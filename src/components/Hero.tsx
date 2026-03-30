const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/1b4c418e-4545-4563-b116-b4353476f591.jpg)`,
        }}
      />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(105deg, hsl(220,20%,5%) 45%, hsl(220,20%,5%)/80% 70%, hsl(220,20%,5%)/40% 100%)'
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(220,20%,7%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: 'hsl(43,74%,55%)' }} />
            <span className="text-[hsl(43,74%,55%)] text-xs tracking-[0.3em] uppercase font-medium">
              Адвокатское бюро · Воронеж
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Дмитриев<br />
            <span style={{
              background: 'linear-gradient(135deg, hsl(43,74%,55%), hsl(43,80%,68%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>и Партнёры</span>
          </h1>

          <p className="text-[hsl(220,10%,70%)] text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Профессиональная юридическая защита ваших интересов. 
            Более 15 лет опыта в уголовных, гражданских и арбитражных делах.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'hsl(43,74%,55%)', color: 'hsl(220,20%,7%)' }}
            >
              Бесплатная консультация
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="px-8 py-4 text-sm font-semibold tracking-widest uppercase border text-white transition-all duration-200 hover:border-[hsl(43,74%,55%)] hover:text-[hsl(43,74%,55%)]"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Наши услуги
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { num: '15+', label: 'лет практики' },
              { num: '500+', label: 'выигранных дел' },
              { num: '98%', label: 'успешных исходов' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold mb-1" style={{
                  fontFamily: 'Playfair Display, serif',
                  color: 'hsl(43,74%,55%)'
                }}>{stat.num}</div>
                <div className="text-[hsl(220,10%,55%)] text-xs tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
