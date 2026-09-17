import { useEffect, useRef, useState } from "react";
import { Award, Star, CheckCircle } from "lucide-react";

const stats = [
  { icon: Award, value: 15, suffix: "+", label: "Years of Clinical Experience" },
  { icon: Star, value: 249, suffix: "+", label: "Google Reviews (4.9 Stars)" },
  { icon: CheckCircle, value: 14, suffix: "", label: "Specialities Available" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-3">
              <s.icon className="mx-auto text-primary-foreground/80" size={36} />
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-primary-foreground/80 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
