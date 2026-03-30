import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Scale',
    title: 'Уголовные дела',
    desc: 'Защита по уголовным делам любой сложности. Представление интересов на всех стадиях судопроизводства.',
    items: ['Защита на следствии', 'Представление в суде', 'Апелляция и кассация'],
  },
  {
    icon: 'Briefcase',
    title: 'Арбитражные споры',
    desc: 'Сопровождение бизнес-споров в арбитражных судах. Защита корпоративных интересов.',
    items: ['Корпоративные конфликты', 'Договорные споры', 'Банкротство'],
  },
  {
    icon: 'Home',
    title: 'Гражданские дела',
    desc: 'Решение имущественных, семейных и наследственных споров в вашу пользу.',
    items: ['Раздел имущества', 'Наследственные споры', 'Жилищные вопросы'],
  },
  {
    icon: 'Building2',
    title: 'Юридическое сопровождение бизнеса',
    desc: 'Комплексная правовая поддержка предприятий. Минимизация рисков.',
    items: ['Договорная работа', 'Регистрация компаний', 'Налоговые споры'],
  },
  {
    icon: 'FileText',
    title: 'Административные дела',
    desc: 'Обжалование действий государственных органов и должностных лиц.',
    items: ['Обжалование штрафов', 'Лицензионные споры', 'КоАП защита'],
  },
  {
    icon: 'Users',
    title: 'Семейное право',
    desc: 'Деликатное решение семейных вопросов с максимальной защитой ваших интересов.',
    items: ['Развод и алименты', 'Права детей', 'Брачный договор'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: 'hsl(220,18%,10%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: 'hsl(43,74%,55%)' }} />
            <span className="text-[hsl(43,74%,55%)] text-xs tracking-[0.3em] uppercase">Практика</span>
            <div className="h-px w-12" style={{ backgroundColor: 'hsl(43,74%,55%)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Области права
          </h2>
          <p className="text-[hsl(220,10%,55%)] max-w-xl mx-auto">
            Широкая специализация позволяет нам решать самые сложные правовые вопросы в интересах клиента
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 border transition-all duration-300 hover:border-[hsl(43,74%,55%)] cursor-default"
              style={{
                backgroundColor: 'hsl(220,15%,13%)',
                borderColor: 'hsl(220,15%,18%)',
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300"
                style={{ backgroundColor: 'hsl(43,74%,55%,0.1)', border: '1px solid hsl(43,74%,55%,0.3)' }}
              >
                <Icon name={service.icon} size={22} className="text-[hsl(43,74%,55%)]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {service.title}
              </h3>
              <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed mb-5">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[hsl(220,10%,65%)]">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'hsl(43,74%,55%)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;