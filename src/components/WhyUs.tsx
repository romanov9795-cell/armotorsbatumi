"use client";

import { useLocale } from "@/lib/LocaleContext";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Banknote, Timer, CheckCircle2 } from "lucide-react";

export default function WhyUs() {
    const { t } = useLocale();

    const features = [
        {
            id: "spec",
            icon: UserCheck, // BMW Specialist
            valueKey: "why.spec.value",
            labelKey: "why.spec.valueLabel",
        },
        {
            id: "parts",
            icon: ShieldCheck, // Original Parts
            valueKey: "why.parts.value",
            labelKey: "why.parts.valueLabel",
        },
        {
            id: "price",
            icon: Banknote, // Fair Prices
            valueKey: "why.price.value",
            labelKey: "why.price.valueLabel",
        },
        {
            id: "speed",
            icon: Timer, // Speed
            valueKey: "why.speed.value",
            labelKey: "why.speed.valueLabel",
        },
    ];

    return (
        <section id="why-us" className="relative py-24 bg-[#050505] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="max-w-xl">
                        <span className="text-[#E62E2D] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                            {t("why.label")}
                        </span>
                        <h2 className="text-5xl md:text-6xl font-heading text-white uppercase mb-8 leading-none">
                            {t("why.title1")} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                {t("why.title2")}
                            </span>
                        </h2>

                        <div className="space-y-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#E62E2D]/10 text-[#E62E2D] clip-tech-sm group-hover:bg-[#E62E2D] group-hover:text-white transition-colors duration-300">
                                        <feature.icon strokeWidth={1.5} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-heading text-white mb-2 uppercase tracking-wide group-hover:text-[#E62E2D] transition-colors">
                                            {t(`why.${feature.id}.title`)}
                                        </h3>
                                        <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
                                            {t(`why.${feature.id}.desc`)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid / Image */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#0f0f0f] border border-white/5 p-8 flex flex-col items-center justify-center text-center hover:border-[#E62E2D]/30 transition-colors clip-tech-lg aspect-square"
                                >
                                    <span className="text-4xl md:text-5xl font-heading text-white mb-2">
                                        {t(feature.valueKey)}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-widest text-[#E62E2D] font-bold">
                                        {t(feature.labelKey)}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center Diamond Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#E62E2D] rotate-45 border-4 border-black flex items-center justify-center shadow-[0_0_50px_rgba(230,46,45,0.4)] z-20">
                            <CheckCircle2 className="w-10 h-10 text-white -rotate-45" strokeWidth={2} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
