"use client";

import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";
import { motion } from "framer-motion";
import { ArrowRight, Settings } from "lucide-react";

export default function Hero() {
    const { t } = useLocale();

    return (
        <section id="hero" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Image with modern gradient overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="/images/hero.jpg"
                    alt="BMW Service"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    {/* Badge Removed as requested */}

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white mb-6 leading-[0.9]">
                        BMW <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SERVICE</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-xl font-sans leading-relaxed border-l-2 border-[#E62E2D] pl-6">
                        {t("hero.subtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#services" className="btn-primary group">
                            <span>{t("hero.cta1")}</span>
                            <Settings className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                        </a>
                        <a href="#contact" className="btn-outline group">
                            <span>{t("hero.cta2")}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i}>
                                <div className="text-2xl md:text-4xl font-heading text-white mb-1">
                                    {t(`hero.stat${i}.value`)}
                                </div>
                                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">
                                    {t(`hero.stat${i}.label`)}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements (Decorative) */}
            <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-[#E62E2D]/10 to-transparent blur-[100px] pointer-events-none" />

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
