import Icon from '@/components/ui/icon';

const practices = [
  { icon: 'Scale', label: 'Уголовная защита', sub: 'Следствие и суд' },
  { icon: 'Briefcase', label: 'Арбитражные споры', sub: 'Бизнес-конфликты' },
  { icon: 'Building2', label: 'Защита бизнеса', sub: 'Корпоративное право' },
  { icon: 'Users', label: 'Семейные споры', sub: 'Раздел, алименты' },
  { icon: 'Receipt', label: 'Налоговые дела', sub: 'ФНС и суды' },
];

const Practices = () => {
  return (
    <section id="services" style={{
      backgroundColor: '#0d0b09',
      borderTop: '1px solid rgba(180,145,60,0.15)',
      borderBottom: '1px solid rgba(180,145,60,0.15)',
    }}>
      {/* Заголовок */}
      <div className="flex items-center justify-center gap-6 pt-14 pb-10 px-8">
        <span className="gold-line flex-1" style={{ maxWidth: 100 }} />
        <span style={{
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 300,
          fontSize: 11,
          letterSpacing: '0.42em',
          textTransform: 'uppercase',
          color: '#a09080',
        }}>
          Практики
        </span>
        <span className="gold-line flex-1" style={{ maxWidth: 100 }} />
      </div>

      {/* Карточки */}
      <div className="max-w-6xl mx-auto px-8 pb-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px" style={{ backgroundColor: 'rgba(180,145,60,0.08)' }}>
          {practices.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-5 py-10 px-6 cursor-default transition-all duration-300"
              style={{ backgroundColor: '#0d0b09' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#131008')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0d0b09')}
            >
              <div
                className="w-[52px] h-[52px] flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ border: '1px solid rgba(180,145,60,0.35)', color: '#c9a84c' }}
              >
                <Icon name={p.icon} size={22} />
              </div>
              <div className="text-center">
                <div style={{
                  fontFamily: 'Old Standard TT, serif',
                  color: '#d8d0c0',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  marginBottom: 5,
                  transition: 'color 0.2s',
                }} className="group-hover:text-[#c9a84c]">
                  {p.label}
                </div>
                <div style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontWeight: 300,
                  color: '#5a5040',
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {p.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practices;
