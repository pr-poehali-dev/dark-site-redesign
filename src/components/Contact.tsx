import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const contacts = [
    { icon: 'Phone', label: 'Телефон', value: '+7 (473) 200-00-00', href: 'tel:+74732000000' },
    { icon: 'Mail', label: 'Email', value: 'info@dmitriev-advokat.ru', href: 'mailto:info@dmitriev-advokat.ru' },
    { icon: 'MapPin', label: 'Адрес', value: 'г. Воронеж, ул. Плехановская, 23', href: null },
    { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 9:00–19:00', href: null },
  ];

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'hsl(220,20%,7%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: 'hsl(43,74%,55%)' }} />
            <span className="text-[hsl(43,74%,55%)] text-xs tracking-[0.3em] uppercase">Контакты</span>
            <div className="h-px w-12" style={{ backgroundColor: 'hsl(43,74%,55%)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Получите консультацию
          </h2>
          <p className="text-[hsl(220,10%,55%)] max-w-xl mx-auto">
            Первая консультация — бесплатно. Опишите вашу ситуацию, и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="p-5 border"
                  style={{
                    backgroundColor: 'hsl(220,18%,10%)',
                    borderColor: 'hsl(220,15%,18%)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={c.icon} size={16} className="text-[hsl(43,74%,55%)]" />
                    <span className="text-[hsl(220,10%,50%)] text-xs uppercase tracking-wide">{c.label}</span>
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-white text-sm hover:text-[hsl(43,74%,55%)] transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-white text-sm">{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div
              className="p-6 border"
              style={{
                backgroundColor: 'hsl(220,18%,10%)',
                borderColor: 'hsl(43,74%,55%,0.3)',
                borderLeftWidth: '3px',
                borderLeftColor: 'hsl(43,74%,55%)',
              }}
            >
              <p className="text-[hsl(220,10%,65%)] text-sm leading-relaxed italic">
                «Ваше дело — наша ответственность. Мы не берёмся за заведомо проигрышные дела и 
                честно говорим о реальных перспективах до начала работы.»
              </p>
              <div className="mt-4 text-[hsl(43,74%,55%)] text-sm font-medium">— Дмитриев Д.А., адвокат</div>
            </div>
          </div>

          <div
            className="p-8 border"
            style={{
              backgroundColor: 'hsl(220,18%,10%)',
              borderColor: 'hsl(220,15%,18%)',
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'hsl(43,74%,55%,0.1)', border: '1px solid hsl(43,74%,55%)' }}
                >
                  <Icon name="Check" size={28} className="text-[hsl(43,74%,55%)]" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Заявка отправлена
                </h3>
                <p className="text-[hsl(220,10%,55%)] text-sm">
                  Мы свяжемся с вами в течение рабочего дня
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[hsl(220,10%,60%)] text-xs uppercase tracking-wide mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white outline-none transition-colors"
                    placeholder="Иван Иванов"
                    style={{
                      backgroundColor: 'hsl(220,15%,13%)',
                      border: '1px solid hsl(220,15%,20%)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'hsl(43,74%,55%)'}
                    onBlur={(e) => e.target.style.borderColor = 'hsl(220,15%,20%)'}
                  />
                </div>
                <div>
                  <label className="block text-[hsl(220,10%,60%)] text-xs uppercase tracking-wide mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white outline-none transition-colors"
                    placeholder="+7 (___) ___-__-__"
                    style={{
                      backgroundColor: 'hsl(220,15%,13%)',
                      border: '1px solid hsl(220,15%,20%)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'hsl(43,74%,55%)'}
                    onBlur={(e) => e.target.style.borderColor = 'hsl(220,15%,20%)'}
                  />
                </div>
                <div>
                  <label className="block text-[hsl(220,10%,60%)] text-xs uppercase tracking-wide mb-2">
                    Описание ситуации
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white outline-none transition-colors resize-none"
                    placeholder="Кратко опишите вашу ситуацию..."
                    style={{
                      backgroundColor: 'hsl(220,15%,13%)',
                      border: '1px solid hsl(220,15%,20%)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'hsl(43,74%,55%)'}
                    onBlur={(e) => e.target.style.borderColor = 'hsl(220,15%,20%)'}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'hsl(43,74%,55%)', color: 'hsl(220,20%,7%)' }}
                >
                  Отправить заявку
                </button>
                <p className="text-[hsl(220,10%,40%)] text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;