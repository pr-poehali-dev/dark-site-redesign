import { useEffect, useRef, useState } from 'react';

const stats = [
  { num: 500, suffix: '+', label: 'Выигранных дел', desc: 'За всё время практики' },
  { num: 15, suffix: '+', label: 'Лет опыта', desc: 'Непрерывной практики' },
  { num: 98, suffix: '%', label: 'Успешных исходов', desc: 'По завершённым делам' },
  { num: 1200, suffix: '+', label: 'Довольных клиентов', desc: 'Вернулись и рекомендуют' },
];

const useCounter = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const StatItem = ({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) => {
  const count = useCounter(stat.num, 2000, animate);
  return (
    <div className="text-center p-8 border-r last:border-r-0 border-[hsl(220,15%,18%)]">
      <div className="text-5xl md:text-6xl font-bold mb-2" style={{
        fontFamily: 'Playfair Display, serif',
        color: 'hsl(43,74%,55%)'
      }}>
        {animate ? count : 0}{stat.suffix}
      </div>
      <div className="text-white text-lg font-medium mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
        {stat.label}
      </div>
      <div className="text-[hsl(220,10%,50%)] text-sm">{stat.desc}</div>
    </div>
  );
};

const Stats = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-0" style={{ backgroundColor: 'hsl(220,20%,7%)' }}>
      <div className="section-divider" />
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 py-20"
        style={{ borderTop: 'none' }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-[hsl(220,15%,18%)]">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default Stats;
