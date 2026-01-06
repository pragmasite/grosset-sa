import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface GalleryImage {
  src: string;
  altFr: string;
  altDe: string;
  altEn: string;
}

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Gallery images with translations
  const images: GalleryImage[] = [
    {
      src: "/images/img-1.jpg",
      altFr: "Carrelage moderne",
      altDe: "Modernes Fliesenwerk",
      altEn: "Modern tiling",
    },
    {
      src: "/images/img-2.jpg",
      altFr: "Salle de bains élégante",
      altDe: "Elegantes Badezimmer",
      altEn: "Elegant bathroom",
    },
    {
      src: "/images/img-4.jpg",
      altFr: "Bureau contemporain",
      altDe: "Modernes Büro",
      altEn: "Contemporary office",
    },
    {
      src: "/images/img-5.jpg",
      altFr: "Installation professionnelle",
      altDe: "Professionelle Installation",
      altEn: "Professional installation",
    },
    {
      src: "/images/img-6.jpg",
      altFr: "Entrée sophistiquée",
      altDe: "Eleganter Eingang",
      altEn: "Elegant entrance",
    },
  ];

  const getImageAlt = (image: GalleryImage) => {
    if (lang === "de") return image.altDe;
    if (lang === "en") return image.altEn;
    return image.altFr;
  };

  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={getImageAlt(image)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">
                  {getImageAlt(image)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={getImageAlt(selectedImage)}
                className="h-full w-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
