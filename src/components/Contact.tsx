"use client";

import { useLocale } from "@/lib/LocaleContext";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Contact() {
    const { t } = useLocale();

    const contactInfo = [
        {
            id: "phone",
            icon: Phone,
            label: t("contact.phone"),
            value: "+995 550 00 00 73",
            href: "tel:+995550000073",
        },
        {
            id: "whatsapp",
            icon: MessageCircle,
            label: t("contact.whatsapp"),
            value: "+995 550 00 00 73",
            href: "https://wa.me/995550000073",
        },
        {
            id: "address",
            icon: MapPin,
            label: t("contact.address"),
            value: t("contact.addressValue"),
            href: "https://maps.google.com/?q=AR+Motors+Batumi",
        },
        {
            id: "hours",
            icon: Clock,
            label: t("contact.hours"),
            value: t("contact.hoursValue"),
            href: null,
        },
    ];

    return (
        <section id="contact" className="relative section-padding bg-black overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <span className="text-[#E62E2D] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                            {t("contact.label")}
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading text-white uppercase mb-8">
                            {t("contact.title")}
                        </h2>
                        <p className="text-gray-400 font-sans font-light text-lg max-w-md">
                            {t("footer.desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {contactInfo.map((info, i) => (
                            <motion.a
                                key={info.id}
                                href={info.href || undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`group flex items-start gap-4 p-6 border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] hover:border-[#E62E2D]/50 transition-all clip-tech-lg ${!info.href ? 'pointer-events-none' : ''}`}
                            >
                                <div className="w-10 h-10 rounded-none bg-[#E62E2D]/10 text-[#E62E2D] flex items-center justify-center group-hover:bg-[#E62E2D] group-hover:text-white transition-colors duration-300 clip-tech-sm">
                                    <info.icon strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold group-hover:text-[#E62E2D] transition-colors">
                                        {info.label}
                                    </h4>
                                    <p className="text-lg font-heading text-white tracking-wide group-hover:translate-x-1 transition-transform">
                                        {info.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/995550000073"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full md:w-auto"
                    >
                        <span>{t("contact.whatsapp")}</span>
                        <Send className="w-4 h-4 ml-2" />
                    </a>
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-[500px] w-full bg-[#111] overflow-hidden clip-tech-lg border border-white/10 group"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.1234567890!2d41.616667!3d41.616667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM3JzAwLjAiTiA0McKwMzcnMDAuMCJF!5e0!3m2!1sen!2sge!4v1234567890123!5m2!1sen!2sge"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(120%)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md p-6 border border-white/10 clip-tech-sm max-w-xs shadow-2xl">
                        <h3 className="text-xl font-heading text-white mb-2">{t("contact.mapTitle")}</h3>
                        <p className="text-gray-400 text-sm mb-4">{t("contact.mapDesc")}</p>
                        <a href="https://wa.me/995550000073" className="text-[#E62E2D] text-xs uppercase font-bold tracking-widest hover:text-white transition-colors flex items-center gap-2">
                            {t("contact.mapCta")} <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
