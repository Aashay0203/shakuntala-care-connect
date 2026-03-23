import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">We're here to help. Reach out to us anytime.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.7!2d80.06!3d28.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE0JzI0LjAiTiA4MMKwMDMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shakuntala Hospital Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Main Road, Ward No. 8, Bilsanda,<br />
                    Uttar Pradesh 262202
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a href="tel:8859303962" className="block">
                <Button variant="outline" className="w-full rounded-xl h-14 gap-3 border-primary/20 hover:bg-primary/5">
                  <Phone className="text-primary" size={18} />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Call Us</p>
                    <p className="text-sm font-medium text-foreground">8859303962</p>
                  </div>
                </Button>
              </a>
              <a href="mailto:shakuntalahospital79@gmail.com" className="block">
                <Button variant="outline" className="w-full rounded-xl h-14 gap-3 border-primary/20 hover:bg-primary/5">
                  <Mail className="text-primary" size={18} />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground truncate">shakuntalahospital79@gmail.com</p>
                  </div>
                </Button>
              </a>
            </div>

            <a
              href="https://wa.me/918859303962"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full rounded-xl h-14 gap-3 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                <MessageCircle size={20} />
                <span className="text-base font-medium">Chat on WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
