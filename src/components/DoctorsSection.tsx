import { MessageCircle, Clock, IndianRupee, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, BOOK_NOW_LINK } from "@/lib/site";

const doctors = [
  {
    name: "Dr. Priya Gupta",
    qualification: "MBBS, MD (Medicine), DM Neurology (AIIMS, Gold Medalist)",
    specialization: "Senior Consultant Neurologist",
    experience:
      "Formerly at G.B. Pant Hospital (MAMC) New Delhi, AIIMS and Max Hospital Vaishali (Pushpanjali Crosslay Hospital)",
    timing: "Mon – Sat, 10:00 AM – 12:30 PM",
    fee: "₹1100",
  },
  {
    name: "Dr. Rahul Gupta",
    qualification: "MBBS (KGMU, Lucknow), MD (Medicine)",
    specialization: "Senior Consultant Physician",
    experience:
      "Formerly at G.B. Pant Hospital (MAMC) New Delhi, Narender Mohan Heart Centre Ghaziabad, NDMC Hospital New Delhi and Max Hospital New Delhi",
    timing: "Mon – Sat, 10:00 AM – 1:00 PM & 6:00 PM – 8:00 PM · Sunday, 10:00 AM – 12:00 PM",
    fee: "₹700",
  },
];

const consultants = [
  { name: "Dr. Sachin Sharma", specialization: "Psychiatrist" },
  { name: "Ms. Anjum Gupta", specialization: "Dietician" },
  { name: "Ms. Palak Maheshwari", specialization: "Psychologist" },
];

const initials = (name: string) =>
  name
    .replace(/^(Dr\.|Ms\.)\s*/, "")
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
            Experienced consultants for you and your family, with clear OPD timings and fees.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
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

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{doc.experience}</p>

              <div className="flex items-start gap-2 text-muted-foreground text-sm mb-2">
                <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>{doc.timing}</span>
              </div>

              <div className="flex items-start gap-2 text-muted-foreground text-sm mb-5">
                <IndianRupee size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Consultation fee {doc.fee}</span>
              </div>

              <div className="mt-auto">
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

        <div className="mt-10">
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-6">
            Visiting Consultants
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {consultants.map((c) => (
              <div
                key={c.name}
                className="bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-primary">{initials(c.name)}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground leading-tight">{c.name}</h4>
                  <p className="text-primary text-xs font-semibold mt-0.5">{c.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
