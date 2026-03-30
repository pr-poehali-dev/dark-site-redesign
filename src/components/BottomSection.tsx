import { useState } from 'react';
import Icon from '@/components/ui/icon';

const cases = [
  {
    title: 'ОПРАВДАТЕЛЬНЫЙ\nПРИГОВОР',
    desc: 'Дело о мошенничестве',
    img: 'https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/1b4c418e-4545-4563-b116-b4353476f591.jpg',
  },
  {
    title: 'ПОБЕДА\nВ АРБИТРАЖЕ',
    desc: 'Сумма: 45 млн ₽',
    img: 'https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/0b7af97f-0410-4d28-8857-5119c0aaaf62.jpg',
  },
  {
    title: 'ОТМЕНА\nРЕШЕНИЯ СУДА',
    desc: 'Дело о ДТП',
    img: 'https://cdn.poehali.dev/projects/7228bd51-e070-49fa-9840-8757b5b9d2fd/files/1b4c418e-4545-4563-b116-b4353476f591.jpg',
  },
];

const BottomSection = () => {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="cases" style={{ backgroundColor: '#12100e' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Col 1: О бюро */}
          <div id="about">
            <div className="mb-6">
              <span style={{ color: '#c8c0b0', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase' }}>О БЮРО</span>
              <div style={{ width: 40, height: 1, backgroundColor: '#b4913c', marginTop: 8 }} />
            </div>
            <p style={{ color: '#8a8070', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
              Надёжная правовая защита и индивидуальный подход к каждому делу
            </p>
            <p style={{ color: '#6a6060', fontSize: 13, lineHeight: 1.7, marginBottom: 28 }}>
              Адвокатское бюро «Дмитриев и Партнёры» основано в 2004 году. За 20 лет работы мы выстроили репутацию, основанную на результатах, а не словах.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: 'Award', text: 'Член Адвокатской палаты Воронежской области' },
                { icon: 'GraduationCap', text: 'Кандидат юридических наук' },
                { icon: 'Shield', text: 'Допуск к делам государственной тайны' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon name={item.icon} size={14} style={{ color: '#b4913c', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: '#8a8070', fontSize: 13, lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('lawyer')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all hover:border-[#b4913c] hover:text-[#b4913c]"
              style={{ border: '1px solid rgba(180,145,60,0.4)', color: '#c8c0b0', padding: '10px 20px' }}
            >
              УЗНАТЬ БОЛЬШЕ
            </button>
          </div>

          {/* Col 2: Кейсы */}
          <div>
            <div className="mb-6">
              <span style={{ color: '#c8c0b0', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase' }}>ВЫИГРАННЫЕ ДЕЛА</span>
              <div style={{ width: 40, height: 1, backgroundColor: '#b4913c', marginTop: 8 }} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {cases.map((c, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(0.45)' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(18,16,14,0.95) 0%, rgba(18,16,14,0.3) 60%, transparent 100%)' }}
                  />
                  <div className="absolute inset-0 p-3 flex flex-col justify-end">
                    <div
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        color: '#fff',
                        fontSize: 11,
                        fontWeight: 700,
                        lineHeight: 1.3,
                        whiteSpace: 'pre-line',
                        marginBottom: 4,
                      }}
                    >
                      {c.title}
                    </div>
                    <div style={{ color: '#b4913c', fontSize: 10 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 w-full py-3 text-xs font-bold tracking-widest uppercase transition-all hover:bg-[rgba(180,145,60,0.1)]"
              style={{ border: '1px solid rgba(180,145,60,0.3)', color: '#b4913c' }}
            >
              ВСЕ КЕЙСЫ
            </button>
          </div>

          {/* Col 3: Форма */}
          <div id="contact">
            <div className="mb-6">
              <span style={{ color: '#c8c0b0', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase' }}>БЫСТРАЯ КОНСУЛЬТАЦИЯ</span>
              <div style={{ width: 40, height: 1, backgroundColor: '#b4913c', marginTop: 8 }} />
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 flex items-center justify-center mb-4" style={{ border: '1px solid #b4913c' }}>
                  <Icon name="Check" size={24} style={{ color: '#b4913c' }} />
                </div>
                <p style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: 18, marginBottom: 8 }}>Заявка отправлена</p>
                <p style={{ color: '#8a8070', fontSize: 13 }}>Свяжемся с вами в течение дня</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    backgroundColor: '#1e1b17',
                    border: '1px solid rgba(180,145,60,0.2)',
                    color: '#fff',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#b4913c')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(180,145,60,0.2)')}
                />
                <input
                  type="tel"
                  required
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    backgroundColor: '#1e1b17',
                    border: '1px solid rgba(180,145,60,0.2)',
                    color: '#fff',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#b4913c')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(180,145,60,0.2)')}
                />
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold tracking-widest uppercase transition-all hover:opacity-90"
                  style={{ backgroundColor: '#b4913c', color: '#12100e' }}
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
                <p style={{ color: '#4a4540', fontSize: 11, textAlign: 'center', lineHeight: 1.5 }}>
                  Первая консультация — бесплатно.<br />Конфиденциальность гарантирована.
                </p>
              </form>
            )}

            {/* Contacts */}
            <div className="mt-6 space-y-3 pt-6" style={{ borderTop: '1px solid rgba(180,145,60,0.15)' }}>
              {[
                { icon: 'Phone', val: '+7 (473) 000-00-00', href: 'tel:+74730000000' },
                { icon: 'Mail', val: 'info@dmitriev-advokat.ru', href: 'mailto:info@dmitriev-advokat.ru' },
                { icon: 'MapPin', val: 'г. Воронеж, ул. Плехановская, 23', href: null },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon name={c.icon} size={14} style={{ color: '#b4913c', flexShrink: 0 }} />
                  {c.href ? (
                    <a href={c.href} style={{ color: '#8a8070', fontSize: 13 }} className="hover:text-[#b4913c] transition-colors">{c.val}</a>
                  ) : (
                    <span style={{ color: '#8a8070', fontSize: 13 }}>{c.val}</span>
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
