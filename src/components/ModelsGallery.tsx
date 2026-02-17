"use client";

import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ModelsGallery() {
    const { t } = useLocale();

    const models = [
        {
            id: "m3",
            image: "/images/hero.jpg", // The main M4 Lift shot
            title: "M3 / M4",
            descKey: "models.m3.desc",
            cols: "md:col-span-2",
        },
        {
            id: "5",
            image: "/images/model-sedan.jpg", // White 5 Series
            title: "5 SERIES",
            descKey: "models.5.desc",
            cols: "md:col-span-1",
        },
        {
            id: "x5",
            image: "/images/model-suv.jpg", // Generic SUV shot
            title: "X5 / X6",
            descKey: "models.x5.desc",
            cols: "md:col-span-1",
        },
        {
            id: "7",
            image: "/images/model-7.jpg", // Luxury Interior/Exterior
            title: "7 SERIES",
            descKey: "models.7.desc",
            cols: "md:col-span-2",
        },
    ];

    return (
        <section id="models" className="py-24 bg-[#0a0a0a] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#E62E2D] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        {t("models.label")}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-heading text-white uppercase">
                        {t("models.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t("models.title3")}</span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-sans font-light text-lg">
                        {t("models.desc")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {models.map((model, i) => (
                        <motion.div
                            key={model.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden clip-tech-lg border border-white/10 ${model.cols}`}
                        >
                            <Image
                                src={model.image}
                                alt={model.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-3xl font-heading text-white italic tracking-wider">
                                        {model.title}
                                    </h3>
                                    <ArrowUpRight className="w-6 h-6 text-[#E62E2D] opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" />
                                </div>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                    <p className="text-[#E62E2D] text-xs uppercase tracking-[0.2em] font-bold">
                                        {t(model.descKey)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
