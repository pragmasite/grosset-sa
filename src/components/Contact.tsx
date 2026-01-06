import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-2">{t.contact.phone}</h3>
                <p className="text-foreground/80 mb-2">
                  <a
                    href="tel:+41266523073"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    +41 26 652 30 73
                  </a>
                </p>
                <p className="text-foreground/80">
                  <a
                    href="tel:+41794128174"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    +41 79 412 81 74
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-2">{t.contact.email}</h3>
                <p className="text-foreground/80">
                  <a
                    href="mailto:grosset.sa@bluewin.ch"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    grosset.sa@bluewin.ch
                  </a>
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-2">{t.contact.address}</h3>
                <p className="text-foreground/80">
                  Chemin de la Maula 8
                  <br />
                  1680 Romont FR
                  <br />
                  Switzerland
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
              <a href="tel:+41266523073" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {t.contact.cta}
              </a>
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-medium"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.1234567890123!2d6.906392!3d46.697030!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e4c0c0c0c0c0d%3A0x1234567890123456!2sGrosset%20SA!5e0!3m2!1sfr!2sch!4v1234567890123"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
