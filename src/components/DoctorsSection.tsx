import { User } from "lucide-react";

const doctors = [
  { name: "Dr. Manmeet Gupta", qualification: "BAMS", experience: "25+ years", specialization: "General Healthcare" },
  { name: "Dr. Amita Gupta", qualification: "BAMS", experience: "25+ years", specialization: "Gynecology & Women Care" },
  { name: "Dr. Anand Prakash Gupta", qualification: "BAMS", experience: "50+ years", specialization: "General Healthcare" },
  { name: "Dr. Vinay Sharma", qualification: "MBBS + MS (Orthopedics)", experience: "8+ years", specialization: "Orthopedics & Bone Care" },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Doctors</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our Experienced Team
          </h2>
          <p className="text-muted-foreground">Dedicated professionals committed to your health and recovery.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{doc.name}</h3>
              <p className="text-primary text-sm font-medium mb-2">{doc.qualification}</p>
              <p className="text-muted-foreground text-xs mb-1">{doc.experience} Experience</p>
              <p className="text-muted-foreground text-xs">{doc.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
