import { useState } from 'react';
import Icon from '@/components/ui/icon';

const cases = [
  { title: 'Оправдательный приговор', desc: 'Дело о мошенничестве', img: 'https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/1b4c418e-4545-4563-b116-b4353476f591.jpg' },
  { title: 'Победа в арбитраже', desc: 'Сумма: 45 млн ₽', img: 'https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/0b7af97f-0410-4d28-8857-5119c0aaaf62.jpg' },
  { title: 'Отмена решения суда', desc: 'Дело о ДТП', img: 'https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/1b4c418e-4545-4563-b116-b4353476f591.jpg' },
];

const SectionTitle = ({ children }: { children: string }) => (
  <div className="mb-8">
    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#7a6e5e', marginBottom: 10 }}>
      {children}
    </div>
    <div style={{ width: 32, height: 1, background: 'linear-gradient(to right, #c9a84c, transparent)' }} />
  </div>
);

const BottomSection = () => {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle = {
    backgroundColor: '#191612',
    border: '1px solid rgba(180,145,60,0.18)',
    color: '#e8e0d0',
    fontFamily: 'Oswald, sans-serif',
    fontWeight: 300,
    fontSize: 14,
    letterSpacing: '0.08em',
    padding: '13px 16px',
    width: '100%',
    outline: 'none',
  };

  return (
    <section id="cases" style={{ backgroundColor: '#0f0d0b' }}>
      {/* Тонкая золотая линия сверху */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(180,145,60,0.3) 30%, rgba(200,165,80,0.5) 50%, rgba(180,145,60,0.3) 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* О бюро */}
          <div id="about">
            <SectionTitle>О бюро</SectionTitle>

            <p style={{ fontFamily: 'EB Garamond, serif', color: '#c8bfad', fontSize: 19, lineHeight: 1.75, marginBottom: 18 }}>
              Надёжная правовая защита и индивидуальный подход к каждому делу.
            </p>
            <p style={{ fontFamily: 'EB Garamond, serif', color: '#6e6254', fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
              Адвокатское бюро «Дмитриев и Партнёры» основано в 2004 году. За 20 лет работы мы выстроили репутацию, основанную на результатах.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Член Адвокатской палаты Воронежской области',
                'Кандидат юридических наук',
                'Допуск к делам государственной тайны',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#c9a84c', flexShrink: 0, marginTop: 8 }} />
                  <span style={{ fontFamily: 'EB Garamond, serif', color: '#7a6e5e', fontSize: 15, lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="transition-all"
              style={{ border: '1px solid rgba(180,145,60,0.35)', color: '#9a8e7c', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', padding: '11px 22px' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a84c'; (e.currentTarget as HTMLButtonElement).style.color = '#e8e0d0'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(180,145,60,0.35)'; (e.currentTarget as HTMLButtonElement).style.color = '#9a8e7c'; }}
            >
              Узнать больше
            </button>
          </div>

          {/* Кейсы */}
          <div>
            <SectionTitle>Выигранные дела</SectionTitle>

            <div className="grid grid-cols-3 gap-2">
              {cases.map((c, i) => (
                <div key={i} className="relative overflow-hidden group cursor-pointer" style={{ aspectRatio: '2/3' }}>
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107"
                    style={{ filter: 'brightness(0.35) saturate(0.6)' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,13,11,0.97) 0%, rgba(15,13,11,0.2) 55%, transparent 100%)' }} />
                  <div className="absolute inset-0" style={{ border: '1px solid rgba(180,145,60,0)', transition: 'border-color 0.3s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(180,145,60,0.25)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(180,145,60,0)')}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div style={{ fontFamily: 'Old Standard TT, serif', color: '#e8e0d0', fontSize: 11, fontWeight: 400, lineHeight: 1.4, marginBottom: 3 }}>
                      {c.title}
                    </div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 300, color: '#c9a84c', fontSize: 10, letterSpacing: '0.1em' }}>
                      {c.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Форма */}
          <div id="contact">
            <SectionTitle>Быстрая консультация</SectionTitle>

            {sent ? (
              <div className="flex flex-col items-start py-8 gap-4">
                <div style={{ width: 48, height: 48, border: '1px solid #c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="Check" size={20} style={{ color: '#c9a84c' }} />
                </div>
                <p style={{ fontFamily: 'Old Standard TT, serif', color: '#e8e0d0', fontSize: 20 }}>Заявка отправлена</p>
                <p style={{ fontFamily: 'EB Garamond, serif', color: '#6e6254', fontSize: 16 }}>Свяжемся с вами в течение рабочего дня</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(180,145,60,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(180,145,60,0.18)')}
                />
                <input
                  type="tel"
                  required
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(180,145,60,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(180,145,60,0.18)')}
                />
                <button
                  type="submit"
                  className="transition-all hover:brightness-105"
                  style={{ backgroundColor: '#c9a84c', color: '#0f0d0b', fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', padding: '14px', width: '100%' }}
                >
                  Отправить заявку
                </button>
                <p style={{ fontFamily: 'EB Garamond, serif', color: '#4a4035', fontSize: 13, textAlign: 'center', lineHeight: 1.6 }}>
                  Первая консультация бесплатно · Конфиденциально
                </p>
              </form>
            )}

            <div className="mt-7 space-y-3 pt-7" style={{ borderTop: '1px solid rgba(180,145,60,0.1)' }}>
              {[
                { icon: 'Phone', val: '+7 (473) 000-00-00', href: 'tel:+74730000000' },
                { icon: 'Mail', val: 'info@dmitriev-advokat.ru', href: 'mailto:info@dmitriev-advokat.ru' },
                { icon: 'MapPin', val: 'Воронеж, ул. Плехановская, 23', href: null },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon name={c.icon} size={13} style={{ color: '#c9a84c', flexShrink: 0 }} />
                  {c.href ? (
                    <a href={c.href} className="transition-colors hover:text-[#c9a84c]" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 300, color: '#7a6e5e', fontSize: 13, letterSpacing: '0.06em' }}>{c.val}</a>
                  ) : (
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 300, color: '#7a6e5e', fontSize: 13, letterSpacing: '0.06em' }}>{c.val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
