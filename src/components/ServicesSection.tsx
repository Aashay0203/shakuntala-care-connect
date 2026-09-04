import {
  Baby, Stethoscope, Ambulance, HeartPulse, Brain,
  Scissors, FlaskConical, Ear, Droplet, Activity, Bone, Syringe,
} from "lucide-react";

const services = [
  { icon: Ambulance, label: "Trauma & Emergency" },
  { icon: HeartPulse, label: "Cardiology" },
  { icon: Brain, label: "Neuro Surgery" },
  { icon: Bone, label: "Orthopedics" },
  { icon: Scissors, label: "Laparoscopic & General Surgery" },
  { icon: Baby, label: "Gynecology & Maternity" },
  { icon: Stethoscope, label: "General Medicine" },
  { icon: Droplet, label: "Nephrology & Urology" },
  { icon: Ear, label: "ENT Care" },
  { icon: Syringe, label: "Plastic Surgery" },
  { icon: Activity, label: "Physiotherapy" },
  { icon: FlaskConical, label: "Pathology & Lab Tests" },
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
          <p className="text-muted-foreground">From emergency trauma care to super speciality treatments, we've got you covered.</p>
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
