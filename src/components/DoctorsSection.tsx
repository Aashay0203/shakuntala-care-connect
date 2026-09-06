import { MessageCircle, Clock, ExternalLink, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, BOOK_NOW_LINK, DOCTORS_PAGE_LINK } from "@/lib/site";

const doctors = [
  { name: "Dr. Abhinav Katyal", qualification: "MBBS, MD, DM", specialization: "Nephrology", timing: "11am – 1pm (1st & 3rd Tue)" },
  { name: "Dr. Vinay Gangwar", qualification: "MBBS", specialization: "Orthopedics", timing: "12 – 3pm & 6 – 8pm" },
  { name: "Dr. Paritosh Das Agarwal", qualification: "MBBS, MS", specialization: "Laparoscopic & General Surgery", timing: "12 – 3pm" },
  { name: "Dr. Anubha Agarwal", qualification: "MBBS, MS", specialization: "Gynecology", timing: "11am – 3pm & 6 – 8pm" },
  { name: "Dr. Anil Mishra", qualification: "MBBS, MD (Medicine)", specialization: "Physician", timing: "10am – 2pm & 6 – 8pm" },
  { name: "Dr. Harshit Agarwal", qualification: "MS, MCh", specialization: "Neuro Surgery", timing: "3 – 4pm" },
  { name: "Dr. Akash Gupta", qualification: "MBBS, MD", specialization: "Pediatrics", timing: "11am – 12:30pm / 1:30 – 3:30pm / 7 – 9:30pm" },
  { name: "Dr. Saurabh Choubey", qualification: "MBBS, MS", specialization: "ENT", timing: "2 – 4pm (Wed off)" },
  { name: "Dr. Vipul Kumar", qualification: "MS, MCh", specialization: "Plastic Surgery", timing: "On call" },
  { name: "Dr. Ratnanjali Mishra", qualification: "MBBS, MS, MCh", specialization: "Plastic Surgery", timing: "On call" },
  { name: "Dr. Nitin Kumar Gangwar", qualification: "MBBS, MS, MCh", specialization: "Nephrology & Urology", timing: "Timing not available" },
  { name: "Dr. Jitendra Varshney", qualification: "MBBS, MD", specialization: "Anesthesia & Critical Care", timing: "Timing not available" },
  { name: "Dr. Animesh Kumar", qualification: "MBBS, DNB", specialization: "Anesthesia & Critical Care", timing: "Timing not available" },
  { name: "Dr. Pawan Goel", qualification: "MBBS, MD, DM", specialization: "Cardiology", timing: "3 – 5pm" },
  { name: "Dr. Ajay Pal", qualification: "BPT, MPT (Ortho)", specialization: "Physiotherapy", timing: "10am – 3pm & 6 – 8pm" }
];

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Doctors</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our Specialist Team
          </h2>
          <p className="text-muted-foreground">
            Experienced super specialists across every major department, available for you and your family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-primary text-lg">{initials(doc.name)}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">{doc.name}</h3>
                  <p className="text-primary font-semibold text-xs mt-0.5">{doc.qualification}</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold w-fit mb-3">
                <Stethoscope size={12} /> {doc.specialization}
              </span>

              <div className="flex items-start gap-2 text-muted-foreground text-sm mb-5">
                <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>{doc.timing}</span>
              </div>

              <div className="mt-auto space-y-3">
                <a
                  href={DOCTORS_PAGE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  View Profile <ExternalLink size={14} />
                </a>
                <div className="flex gap-3">
                  <a href={BOOK_NOW_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full rounded-full shadow-md shadow-primary/20">Book Now</Button>
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat on WhatsApp about ${doc.name}`}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-green-500/30 text-green-700 hover:bg-green-50"
                    >
                      <MessageCircle size={18} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
