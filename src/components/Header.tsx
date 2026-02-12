"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { Locale } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, Phone } from "lucide-react";

const localeLabels: Record<Locale, { short: string; full: string }> = {
    en: { short: "EN", full: "English" },
    ru: { short: "RU", full: "Русский" },
    ge: { short: "GE", full: "ქართული" },
    am: { short: "AM", full: "Հայերեն" },
};

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { locale, setLocale, t } = useLocale();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: t("nav.home"), href: "#hero" },
        { label: t("nav.services"), href: "#services" },
        { label: t("nav.models"), href: "#models" },
        { label: t("nav.oils"), href: "#oils" },
        { label: t("nav.whyUs"), href: "#why-us" },
        { label: t("nav.gallery"), href: "#gallery" },
        { label: t("nav.contact"), href: "#contact" },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
                : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-[#E62E2D] flex items-center justify-center font-heading text-lg font-bold tracking-widest text-white clip-tech-sm transition-transform group-hover:scale-105 shadow-[0_0_20px_rgba(230,46,45,0.4)]">
                        AR
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="font-heading text-2xl text-white tracking-widest leading-none">
                            AR MOTORS
                        </span>
                        {/* Removed "BMW Specialist" subtitle as requested */}
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors relative group font-heading"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E62E2D] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="tracking-widest">{localeLabels[locale].short}</span>
                        </button>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 mt-4 w-40 bg-black/90 border border-white/10 overflow-hidden"
                                >
                                    {Object.entries(localeLabels).map(([key, label]) => (
                                        <button
                                            key={key}
                                            onClick={() => {
                                                setLocale(key as Locale);
                                                setLangOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-3 text-xs uppercase tracking-wider hover:bg-white/5 transition-colors ${locale === key ? "text-[#E62E2D]" : "text-gray-400"
                                                }`}
                                        >
                                            <span>{label.full}</span>
                                            {locale === key && <div className="w-1.5 h-1.5 bg-[#E62E2D] rounded-full" />}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a
                        href="tel:+995550000073"
                        className="flex items-center gap-2 text-gray-300 hover:text-[#E62E2D] transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="font-heading text-lg tracking-widest">+995 550 00 00 73</span>
                    </a>

                    <a href="#contact" className="btn-primary py-2 px-6 text-xs">
                        {t("nav.book")}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden text-white hover:text-[#E62E2D] transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="font-heading text-4xl text-white hover:text-[#E62E2D] transition-colors uppercase tracking-widest"
                            >
                                {link.label}
                            </motion.a>
                        ))}

                        <div className="flex flex-col items-center gap-6 mt-8">
                            <a href="tel:+995550000073" className="text-2xl font-heading text-gray-400">
                                +995 550 00 00 73
                            </a>
                            <div className="flex gap-4">
                                {Object.keys(localeLabels).map((loc) => (
                                    <button
                                        key={loc}
                                        onClick={() => {
                                            setLocale(loc as Locale);
                                            setMenuOpen(false);
                                        }}
                                        className={`text-sm uppercase tracking-widest px-4 py-2 border ${locale === loc ? "border-[#E62E2D] text-[#E62E2D]" : "border-white/10 text-gray-500"
                                            }`}
                                    >
                                        {loc}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
