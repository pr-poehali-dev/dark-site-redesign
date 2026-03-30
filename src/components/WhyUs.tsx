import Icon from '@/components/ui/icon';

const reasons = [
  {
    icon: 'Search',
    title: 'Глубокий анализ дела',
    desc: 'Тщательно изучаем все обстоятельства и документы до выработки стратегии защиты.',
  },
  {
    icon: 'Target',
    title: 'Индивидуальный подход',
    desc: 'Каждое дело уникально. Разрабатываем персональную стратегию под вашу ситуацию.',
  },
  {
    icon: 'MessageSquare',
    title: 'Полная прозрачность',
    desc: 'Регулярно информируем о ходе дела. Вы всегда знаете что происходит и почему.',
  },
  {
    icon: 'Zap',
    title: 'Оперативность',
    desc: 'Реагируем быстро. Срочные ситуации требуют немедленных профессиональных действий.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-24" style={{ backgroundColor: 'hsl(220,18%,10%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: 'hsl(43,74%,55%)' }} />
              <span className="text-[hsl(43,74%,55%)] text-xs tracking-[0.3em] uppercase">Преимущества</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Почему выбирают<br />
              <span style={{
                background: 'linear-gradient(135deg, hsl(43,74%,55%), hsl(43,80%,68%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>нас</span>
            </h2>

            <div className="mt-10 space-y-2">
              {['Работаем на результат, а не на процесс', 'Честно оцениваем перспективы дела', 'Без скрытых платежей и неожиданных расходов', 'Опыт в федеральных судах всех инстанций'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-[hsl(220,15%,18%)]">
                  <Icon name="Check" size={16} className="text-[hsl(43,74%,55%)] flex-shrink-0" />
                  <span className="text-[hsl(220,10%,70%)] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="p-6 border"
                style={{
                  backgroundColor: 'hsl(220,15%,13%)',
                  borderColor: 'hsl(220,15%,18%)',
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'hsl(43,74%,55%,0.1)' }}
                >
                  <Icon name={reason.icon} size={18} className="text-[hsl(43,74%,55%)]" />
                </div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {reason.title}
                </h3>
                <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;