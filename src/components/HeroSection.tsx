import { Phone, MessageCircle, Star, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { WHATSAPP_LINK, BOOK_NOW_LINK } from "@/lib/site";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🏥 Welcome to Swastik Medical Centre
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Comprehensive Medical Care in{" "}
              <span className="text-primary">Vasundhara, Ghaziabad</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Physician, Neurologist, Psychiatrist, Psychologist and Diet & Lifestyle Consultant — expert consultations,
              neuro-diagnostic tests and pathology, all in one comfortable clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BOOK_NOW_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full gap-2 text-base px-8 shadow-lg shadow-primary/25">
                  <Phone size={18} /> Book Now
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full gap-2 text-base px-8 border-primary/30 hover:bg-primary/5"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Doctor Image with floating elements */}
          <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/5]">
              <img
                src={heroDoctor}
                alt="Friendly professional doctor at Swastik Medical Centre"
                width={896}
                height={1024}
                className="w-full h-full object-cover"
              />

              {/* Expert Specialist tag - top right */}
              <div className="absolute top-5 right-5 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                Expert Specialist
              </div>
            </div>

            {/* Floating rating card */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-8 sm:right-8 bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star className="fill-primary text-primary" size={28} />
                <div>
                  <p className="font-display font-bold text-2xl text-foreground leading-none">4.9</p>
                  <p className="text-xs text-muted-foreground mt-1">Google Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <HeartPulse className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground leading-none">249+</p>
                  <p className="text-xs text-muted-foreground mt-1">Reviews</p>
                </div>
              </div>
            </div>

            {/* Floating WhatsApp button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-16 right-0 sm:right-4"
            >
              <Button className="rounded-full gap-2 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                <MessageCircle size={18} /> Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
