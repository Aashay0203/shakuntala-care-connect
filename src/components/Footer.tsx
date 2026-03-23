import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-display text-xl font-bold text-background mb-3">Shakuntala Hospital</h3>
            <p className="text-sm leading-relaxed text-background/60">
              Trusted healthcare for your entire family. Serving Bilsanda with compassion and expertise for over 50 years.
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
              <li>📞 8859303962</li>
              <li>📧 shakuntalahospital79@gmail.com</li>
              <li>📍 Main Road, Ward No. 8, Bilsanda, UP 262202</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm text-background/50">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Shakuntala Hospital. Made with <Heart size={14} className="text-primary" /> for better healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
