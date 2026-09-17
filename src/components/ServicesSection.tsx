import {
  Baby, Stethoscope, Brain, Eye, Ear, Scissors, Bone, Activity,
  Droplet, Sparkles, HeartPulse, Apple, Smile, Syringe, FlaskConical,
} from "lucide-react";

const services = [
  { icon: Stethoscope, label: "Physician" },
  { icon: Droplet, label: "Diabetologist" },
  { icon: Baby, label: "Gynaecologist" },
  { icon: Bone, label: "Orthopedician" },
  { icon: Brain, label: "Psychiatrist" },
  { icon: HeartPulse, label: "Pediatrician" },
  { icon: Activity, label: "Physiotherapist" },
  { icon: Brain, label: "Neurologist" },
  { icon: Sparkles, label: "Skin Specialist" },
  { icon: Eye, label: "Eye Specialist" },
  { icon: Ear, label: "ENT Specialist" },
  { icon: Apple, label: "Dietician" },
  { icon: Scissors, label: "General Surgeon" },
  { icon: Smile, label: "Psychologist" },
];

const neuroTests = [
  "Electroencephalogram (EEG)",
  "Electromyography (EMG)",
  "Nerve Conduction Studies (NCV)",
  "Visual Evoked Potentials (VEP)",
  "Brainstem Auditory Evoked Potential (BAEP/BAER)",
  "Repetitive Nerve Stimulation Tests (RNST)",
];

const facilities = [
  "All Pathology Tests",
  "ECG",
  "Day Care",
  "Nebulization",
  "Blood Sugar testing by Glucometer",
  "Rapid Antigen testing",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">OPD Consultation</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Complete Healthcare Under One Roof
          </h2>
          <p className="text-muted-foreground">Specialist consultations, diagnostic tests and day-care facilities in one place.</p>
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

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Syringe className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-3">Neuro-Diagnostic Tests</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {neuroTests.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <FlaskConical className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-3">Other Facilities</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {facilities.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
