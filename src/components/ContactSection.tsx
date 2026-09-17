import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HOSPITAL_NAME,
  HOSPITAL_ADDRESS,
  PHONE_PRIMARY,
  PHONE_TEL,
  WHATSAPP_LINK,
  MAP_EMBED_SRC,
} from "@/lib/site";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">Call or WhatsApp us at {PHONE_PRIMARY} — we're happy to help.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm h-[350px]">
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${HOSPITAL_NAME} Location`}
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">{HOSPITAL_ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday – Saturday: 9:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 12:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a href={PHONE_TEL} className="block">
              <Button variant="outline" className="w-full rounded-xl h-14 gap-3 border-primary/20 hover:bg-primary/5">
                <Phone className="text-primary" size={18} />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <p className="text-sm font-medium text-foreground">{PHONE_PRIMARY}</p>
                </div>
              </Button>
            </a>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
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
