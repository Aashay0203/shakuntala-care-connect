import { Phone, MessageCircle, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorManmeet from "@/assets/doctor-manmeet.jpg";
import doctorAmita from "@/assets/doctor-amita.jpg";
import doctorAnand from "@/assets/doctor-anand.jpg";
import doctorVinay from "@/assets/doctor-vinay.jpg";

const WHATSAPP_LINK = "https://wa.me/918859303962?text=Hello%20I%20want%20to%20book%20an%20appointment";

const doctors = [
  {
    name: "Dr. Manmeet Gupta",
    qualification: "BAMS",
    experience: "25+ years",
    specialization: "General Healthcare",
    image: doctorManmeet,
    tags: ["Experienced", "Trusted Doctor"],
    desc: "Providing holistic healthcare with decades of trusted experience in general medicine and patient wellness.",
  },
  {
    name: "Dr. Amita Gupta",
    qualification: "BAMS",
    experience: "25+ years",
    specialization: "Gynecology & Women Care",
    image: doctorAmita,
    tags: ["Women's Health Expert", "Trusted Doctor"],
    desc: "Specialized in women's health, offering compassionate gynecology and maternity care for over two decades.",
  },
  {
    name: "Dr. Anand Prakash Gupta",
    qualification: "BAMS",
    experience: "50+ years",
    specialization: "General Healthcare",
    image: doctorAnand,
    tags: ["Senior Consultant", "Pioneer"],
    desc: "A pioneer in healthcare with half a century of experience, guiding families through generations of care.",
  },
  {
    name: "Dr. Vinay Sharma",
    qualification: "MBBS + MS (Orthopedics)",
    experience: "8+ years",
    specialization: "Orthopedics & Bone Care",
    image: doctorVinay,
    tags: ["Orthopedic Specialist", "Skilled Surgeon"],
    desc: "Expert orthopedic surgeon specializing in bone and joint care with modern treatment approaches.",
  },
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

        <div className="space-y-8">
          {doctors.map((doc, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={doc.name}
                className={`bg-card rounded-2xl border border-border/50 shadow-md overflow-hidden flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    loading="lazy"
                    width={512}
                    height={640}
                    className="w-full h-64 md:h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                    <h3 className="text-white font-bold text-lg">{doc.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                      >
                        <Star size={12} /> {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="hidden md:block font-display text-2xl font-bold text-foreground mb-1">
                    {doc.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-1">{doc.qualification}</p>
                  <p className="text-muted-foreground text-sm mb-3">{doc.specialization}</p>

                  <div className="inline-flex items-center gap-2 bg-accent rounded-lg px-4 py-2 mb-4 w-fit">
                    <Award className="text-primary" size={18} />
                    <span className="font-semibold text-accent-foreground text-sm">
                      {doc.experience} Experience
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{doc.desc}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="#contact">
                      <Button className="rounded-full gap-2 shadow-md shadow-primary/20">
                        <Phone size={16} /> Book Appointment
                      </Button>
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="rounded-full gap-2 border-green-500/30 text-green-700 hover:bg-green-50"
                      >
                        <MessageCircle size={16} /> Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
