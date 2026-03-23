import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", feedback: "The doctors at Shakuntala Hospital are incredibly caring. Dr. Amita Gupta helped me through my pregnancy with so much patience and support. I highly recommend this hospital." },
  { name: "Rajesh Kumar", feedback: "I had a knee injury and Dr. Vinay Sharma treated me so well. The staff is friendly and the clinic is very clean. Truly a trustworthy hospital in Bilsanda." },
  { name: "Sunita Devi", feedback: "We've been coming here for years. Dr. Anand Prakash Gupta has been our family doctor forever. The care and attention they give is unmatched." },
  { name: "Amit Verma", feedback: "Dr. Manmeet Gupta diagnosed my problem quickly and the treatment worked perfectly. Very affordable and excellent service. Thank you Shakuntala Hospital!" },
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
