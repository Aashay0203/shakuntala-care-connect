import { Heart, Shield, Users } from "lucide-react";
import { VISION, MISSION } from "@/lib/site";

const features = [
  { icon: Heart, title: "Our Vision", desc: VISION },
  { icon: Shield, title: "Our Mission", desc: MISSION },
  {
    icon: Users,
    title: "Specialist Team",
    desc: "Physician, neurologist, psychiatrist, psychologist and diet & lifestyle consultant — all under one roof.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Family's Health, Our Commitment
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Swastik Medical Centre in Sector 10, Vasundhara, Ghaziabad offers expert consultations, neuro-diagnostic
            tests, pathology and day-care facilities in a clean, comfortable and friendly setting for every member of
            your family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
