"use client";

import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";
import { motion } from "framer-motion";
import { Droplets, CheckCircle2, ShieldCheck } from "lucide-react";

export default function OriginalOils() {
    const { t } = useLocale();

    const oils = [
        { name: "BMW TwinPower Turbo", spec: "LL-04 / 5W-30", image: "/images/service-engine.jpg" },
        { name: "M Performance", spec: "10W-60 / 0W-40", image: "/images/service-detail.jpg" }, // Will fallback to hero if detail fails, but using service-engine is safe
        { name: "Original Filters", spec: "BMW Group", image: "/images/hero.jpg" },
    ];

    return (
        <section id="oils" className="section-padding bg-black relative overflow-hidden noise-overlay border-y border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <span className="text-[#E62E2D] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                            {t("oils.label")}
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading text-white mb-8 leading-none">
                            {t("oils.title")} <br /> <span className="text-gradient-red">ORIGINAL ONLY</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-xl font-sans leading-relaxed">
                            {t("oils.desc")}
                        </p>

                        <div className="flex items-center gap-4 p-6 bg-[#E62E2D]/10 border border-[#E62E2D]/30 clip-tech-sm mb-10 w-fit">
                            <ShieldCheck className="w-8 h-8 text-[#E62E2D]" />
                            <div>
                                <h4 className="font-heading text-xl text-white tracking-wider">{t("oils.guarantee.title")}</h4>
                                <div className="text-xs uppercase tracking-widest text-[#E62E2D] font-bold">100% Original Parts</div>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {["Full Synthetic Formula", "Extended Engine Life", "Optimal Performance", "Reduce Fuel Consumption"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400 font-sans text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-[#E62E2D]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Cards */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {oils.map((oil, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`group relative aspect-[3/4] overflow-hidden border border-white/10 bg-[#0a0a0a] clip-tech-lg ${i === 2 ? "sm:col-span-2 sm:aspect-[2/1]" : ""}`}
                            >
                                <Image src={oil.image} alt={oil.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 clip-tech-sm">
                                    <Droplets className="w-5 h-5 text-white" />
                                </div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="font-heading text-2xl text-white mb-1">{oil.name}</h3>
                                    <p className="text-[#E62E2D] text-xs font-bold tracking-widest uppercase">{oil.spec}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
