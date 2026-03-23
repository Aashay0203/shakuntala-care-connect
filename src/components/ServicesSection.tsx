import {
  Baby, Stethoscope, Building2, HeartPulse, Scan,
  Pill, FlaskConical, Ribbon, Flower2, SmilePlus, Bone,
} from "lucide-react";

const services = [
  { icon: Baby, label: "Maternity Care" },
  { icon: Stethoscope, label: "General Consultation" },
  { icon: Building2, label: "Indoor OPD Services" },
  { icon: HeartPulse, label: "ECG" },
  { icon: Scan, label: "X-Ray" },
  { icon: Pill, label: "Medicines Availability" },
  { icon: FlaskConical, label: "Laboratory Tests" },
  { icon: Ribbon, label: "Gynecology Services" },
  { icon: Flower2, label: "Infertility Treatment" },
  { icon: SmilePlus, label: "Child Healthcare" },
  { icon: Bone, label: "Orthopedic Care" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Complete Healthcare Under One Roof
          </h2>
          <p className="text-muted-foreground">From routine check-ups to specialized treatments, we've got you covered.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={26} />
              </div>
              <p className="text-sm font-medium text-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
