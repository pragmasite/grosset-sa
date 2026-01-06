import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.about.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>
            <p className="text-foreground/80 mb-6">{t.about.p1}</p>
            <p className="text-foreground/80 mb-8">{t.about.p2}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-3xl text-accent">50+</p>
                <p className="text-sm text-muted-foreground">
                  {t.about.stat1}
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-accent">100+</p>
                <p className="text-sm text-muted-foreground">
                  {t.about.stat2}
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-accent">98%</p>
                <p className="text-sm text-muted-foreground">
                  {t.about.stat3}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border bg-card shadow-soft hover:shadow-medium transition-shadow"
              >
                <h3 className="font-serif text-xl mb-2 text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
