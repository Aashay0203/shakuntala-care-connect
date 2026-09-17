import { Star } from "lucide-react";

const testimonials = [
  { name: "Verified Patient", feedback: "The doctor listened patiently and explained everything clearly. I never felt rushed." },
  { name: "Verified Patient", feedback: "The clinic is spotless and well maintained, and the waiting time was very short." },
  { name: "Verified Patient", feedback: "The staff is friendly and helpful, right from the reception to the tests." },
  { name: "Verified Patient", feedback: "Tests and consultation were done in one visit. Very convenient and reassuring." },
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
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
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
