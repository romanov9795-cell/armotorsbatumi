"use client";

import { useLocale } from "@/lib/LocaleContext";
import { motion } from "framer-motion";
import {
    Zap,
    Wrench,
    Droplets,
    Disc,
    Sparkles,
    Activity,
    Cpu,
    ClipboardCheck,
    ArrowUpRight
} from "lucide-react";

export default function Services() {
    const { t } = useLocale();

    const services = [
        {
            id: "engine",
            icon: Cpu,
            price: "150₾"
        },
        {
            id: "suspension",
            icon: Activity,
            price: "40₾"
        },
        {
            id: "tuning",
            icon: Zap,
            price: "450₾+"
        },
        {
            id: "to",
            icon: ClipboardCheck,
            price: "80₾"
        },
        {
            id: "brakes",
            icon: Disc,
            price: "60₾"
        },
        {
            id: "detailing",
            icon: Sparkles,
            price: "200₾+"
        },
    ];

    return (
        <section id="services" className="relative py-24 bg-black overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-[#E62E2D] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        {t("services.label")}
                    </span>
                    <h2 className="text-5xl md:text-6xl font-heading text-white uppercase mb-6">
                        {t("services.title1")} <span className="text-gradient-red">{t("services.title2")}</span>
                    </h2>
                    <p className="text-gray-400 font-sans font-light text-lg">
                        {t("services.desc")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#0a0a0a] border border-white/5 p-8 transition-colors hover:border-[#E62E2D]/50 hover:bg-[#0f0f0f] clip-tech-lg"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5 text-[#E62E2D]" />
                            </div>

                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-none bg-[#E62E2D]/10 text-[#E62E2D] group-hover:bg-[#E62E2D] group-hover:text-white transition-all duration-300 clip-tech-sm">
                                <service.icon strokeWidth={1.5} className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-heading text-white mb-3 group-hover:text-[#E62E2D] transition-colors">
                                {t(`service.${service.id}.title`)}
                            </h3>

                            <p className="text-gray-500 font-sans text-sm leading-relaxed mb-6 group-hover:text-gray-400">
                                {t(`service.${service.id}.desc`)}
                            </p>

                            <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                                <span className="text-xs uppercase tracking-widest text-[#E62E2D] font-bold">
                                    STARTING AT
                                </span>
                                <span className="text-xl font-heading text-white">
                                    {service.price}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
