import Icon from '@/components/ui/icon';

const advantages = [
  { icon: 'Award', text: 'Член Адвокатской палаты Воронежской области' },
  { icon: 'GraduationCap', text: 'Высшее юридическое образование, кандидат юридических наук' },
  { icon: 'Shield', text: 'Специализация в уголовном и гражданском праве' },
  { icon: 'Clock', text: 'Доступность 7 дней в неделю, включая срочные дела' },
];

const About = () => {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: 'hsl(220,20%,7%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: 'hsl(43,74%,55%)' }} />
              <span className="text-[hsl(43,74%,55%)] text-xs tracking-[0.3em] uppercase">Об адвокате</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Дмитрий Александрович<br />
              <span style={{
                background: 'linear-gradient(135deg, hsl(43,74%,55%), hsl(43,80%,68%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Дмитриев</span>
            </h2>

            <p className="text-[hsl(220,10%,65%)] leading-relaxed mb-6">
              Адвокат с более чем 15-летним опытом работы в сфере уголовного, гражданского 
              и арбитражного права. Основатель адвокатского бюро «Дмитриев и Партнёры» в Воронеже.
            </p>
            <p className="text-[hsl(220,10%,65%)] leading-relaxed mb-10">
              Каждое дело — это прежде всего судьба человека. Поэтому мы подходим к защите 
              интересов клиента с максимальной профессиональной ответственностью, используя 
              все законные методы и инструменты.
            </p>

            <div className="space-y-4">
              {advantages.map((adv, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'hsl(43,74%,55%,0.1)', border: '1px solid hsl(43,74%,55%,0.3)' }}
                  >
                    <Icon name={adv.icon} size={16} className="text-[hsl(43,74%,55%)]" />
                  </div>
                  <p className="text-[hsl(220,10%,70%)] text-sm leading-relaxed pt-2">{adv.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 opacity-20"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(43,74%,55%) 0%, transparent 70%)'
              }}
            />
            <div
              className="relative border p-1"
              style={{ borderColor: 'hsl(43,74%,55%,0.3)' }}
            >
              <img
                src="https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/1b4c418e-4545-4563-b116-b4353476f591.jpg"
                alt="Адвокат Дмитриев"
                className="w-full object-cover"
                style={{ maxHeight: '550px', objectPosition: 'top center' }}
              />
            </div>

            <div
              className="absolute bottom-8 -left-6 p-5 border"
              style={{
                backgroundColor: 'hsl(220,18%,10%)',
                borderColor: 'hsl(43,74%,55%)',
              }}
            >
              <div className="text-3xl font-bold mb-1" style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: 'hsl(43,74%,55%)'
              }}>15+</div>
              <div className="text-white text-sm">лет в профессии</div>
              <div className="text-[hsl(220,10%,50%)] text-xs mt-1">с 2009 года</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;