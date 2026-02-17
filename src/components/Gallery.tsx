"use client";

import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function Gallery() {
    const { t } = useLocale();
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const images = [
        { id: "1", src: "/images/gallery-work.jpg", titleKey: "gallery.1.title", tagKey: "gallery.1.tag" }, // Hands/Tools
        { id: "2", src: "/images/model-m.jpg", titleKey: "gallery.5.title", tagKey: "gallery.5.tag" }, // Stage 2 Tuning (Black M Car)
        { id: "3", src: "/images/service-lift.jpg", titleKey: "gallery.3.title", tagKey: "gallery.3.tag" }, // M Brake System (Car on Lift)
        { id: "4", src: "/images/service-engine.jpg", titleKey: "gallery.4.title", tagKey: "gallery.4.tag" }, // Full Service (Engine)
        { id: "5", src: "/images/gallery-diag.jpg", titleKey: "gallery.2.title", tagKey: "gallery.2.tag" }, // Engine Diag (Laptop/Screen)
        { id: "6", src: "/images/service-interior.jpg", titleKey: "gallery.6.title", tagKey: "gallery.6.tag" }, // Detailing
    ];

    return (
        <section id="gallery" className="section-padding bg-[#050505] relative overflow-hidden noise-overlay">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#E62E2D] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        {t("gallery.label")}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-heading text-white uppercase">
                        {t("gallery.title")} <span className="text-gradient-red">WORK</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <motion.div
                            layoutId={img.id}
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedId(img.id)}
                            className="group relative aspect-square cursor-pointer overflow-hidden border border-white/5 bg-gray-900 clip-tech-lg"
                        >
                            <Image
                                src={img.src}
                                alt={t(img.titleKey)}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-[#E62E2D]/90 backdrop-blur-md flex items-center justify-center clip-tech-sm shadow-[0_0_20px_rgba(230,46,45,0.4)]">
                                    <ZoomIn className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-heading text-white mb-2">{t(img.titleKey)}</h3>
                                <div className="flex gap-2">
                                    <span className="text-[10px] uppercase tracking-wider text-[#E62E2D] bg-[#E62E2D]/10 px-2 py-1 rounded-sm border border-[#E62E2D]/20">
                                        {t(img.tagKey)}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {selectedId && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10" onClick={() => setSelectedId(null)}>
                        <motion.div
                            layoutId={selectedId}
                            className="relative w-full max-w-5xl aspect-video bg-gray-900 border border-white/10 overflow-hidden clip-tech-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images.find(img => img.id === selectedId)?.src || ""}
                                alt="Gallery"
                                fill
                                className="object-cover"
                            />
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-[#E62E2D] transition-colors"
                                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
