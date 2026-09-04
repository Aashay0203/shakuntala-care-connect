import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", feedback: "The gynecology team took wonderful care of me through my pregnancy. The hospital is clean, modern and the staff is very patient." },
  { name: "Rajesh Kumar", feedback: "I came in after a road accident and the trauma team responded immediately. Excellent orthopedic care and quick recovery." },
  { name: "Sunita Devi", feedback: "Consulted the physician for my father's treatment. Everything from tests to medicines was available under one roof." },
  { name: "Amit Verma", feedback: "The pediatrician was so gentle with my son. Booking was simple and the whole visit was smooth and affordable." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.feedback}"</p>
              <p className="font-semibold text-foreground text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
