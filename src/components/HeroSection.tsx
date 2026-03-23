import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            🏥 Welcome to Shakuntala Hospital
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Trusted Care for{" "}
            <span className="text-primary">Every Stage</span> of Life
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            At Shakuntala Hospital, we provide compassionate and affordable healthcare for your entire family — women, men, and children. Your health is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg" className="rounded-full gap-2 text-base px-8 shadow-lg shadow-primary/25">
                <Phone size={18} /> Book Appointment
              </Button>
            </a>
            <a href="https://wa.me/918859303962?text=Hello%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
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
      </div>
    </section>
  );
};

export default HeroSection;
