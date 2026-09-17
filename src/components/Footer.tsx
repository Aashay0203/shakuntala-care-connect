import { Heart } from "lucide-react";
import { HOSPITAL_NAME, HOSPITAL_ADDRESS, PHONE_PRIMARY } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-display text-xl font-bold text-background mb-3">Swastik Medical Centre</h3>
            <p className="text-sm leading-relaxed text-background/60">
              Comprehensive medical care in Vasundhara, Ghaziabad — physician, neurologist, psychiatrist, psychologist
              and diet & lifestyle consultant.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Doctors", "Services", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-background transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 {PHONE_PRIMARY}</li>
              <li>📍 {HOSPITAL_ADDRESS}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm text-background/50">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} {HOSPITAL_NAME}. Made with <Heart size={14} className="text-primary" /> for better healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
