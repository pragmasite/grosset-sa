import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Grosset SA</h3>
            <p className="text-sm text-white/80">{t.footer.tagline}</p>
            <p className="text-xs text-white/60 mt-2">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#a-propos" className="text-white/80 hover:text-white transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-white/80 hover:text-white transition-colors">
                {t.nav.services}
              </a>
              <a href="#galerie" className="text-white/80 hover:text-white transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#horaires" className="text-white/80 hover:text-white transition-colors">
                {t.nav.hours}
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.contact.label}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+41266523073"
                className="text-white/80 hover:text-white transition-colors"
              >
                +41 26 652 30 73
              </a>
              <a
                href="mailto:grosset.sa@bluewin.ch"
                className="text-white/80 hover:text-white transition-colors"
              >
                grosset.sa@bluewin.ch
              </a>
              <p className="text-white/60 text-xs">
                Chemin de la Maula 8
                <br />
                1680 Romont FR
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Grosset SA. {t.footer.copyright}
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/GrossetSA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
