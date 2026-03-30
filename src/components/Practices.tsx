import Icon from '@/components/ui/icon';

const practices = [
  { icon: 'Scale', label: 'УГОЛОВНАЯ\nЗАЩИТА' },
  { icon: 'Briefcase', label: 'АРБИТРАЖНЫЕ\nСПОРЫ' },
  { icon: 'Building2', label: 'ЗАЩИТА\nБИЗНЕСА' },
  { icon: 'Users', label: 'СЕМЕЙНЫЕ\nСПОРЫ' },
  { icon: 'Receipt', label: 'НАЛОГОВЫЕ\nДЕЛА' },
];

const Practices = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" style={{ backgroundColor: '#171411', borderTop: '1px solid rgba(180,145,60,0.12)', borderBottom: '1px solid rgba(180,145,60,0.12)' }}>
      {/* Title row */}
      <div className="flex items-center justify-center gap-4 py-8">
        <div style={{ flex: 1, height: 1, maxWidth: 120, backgroundColor: '#b4913c', marginLeft: 'auto', opacity: 0.5 }} />
        <span style={{ color: '#c8c0b0', fontSize: 12, letterSpacing: '0.35em', textTransform: 'uppercase' }}>ПРАКТИКИ</span>
        <div style={{ flex: 1, height: 1, maxWidth: 120, backgroundColor: '#b4913c', marginRight: 'auto', opacity: 0.5 }} />
      </div>

      {/* Icons row */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {practices.map((p, i) => (
            <button
              key={i}
              onClick={() => scrollTo('services-detail')}
              className="flex flex-col items-center gap-4 py-8 px-4 group transition-all duration-200 hover:bg-[rgba(180,145,60,0.06)]"
              style={{ border: '1px solid transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(180,145,60,0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
            >
              <div
                className="w-14 h-14 flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style={{
                  border: '1.5px solid rgba(180,145,60,0.5)',
                  borderRadius: 2,
                  color: '#b4913c',
                }}
              >
                <Icon name={p.icon} size={26} />
              </div>
              <span
                className="text-center text-xs font-semibold tracking-widest whitespace-pre-line group-hover:text-[#b4913c] transition-colors"
                style={{ color: '#c8c0b0', letterSpacing: '0.12em', lineHeight: 1.5 }}
              >
                {p.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practices;
