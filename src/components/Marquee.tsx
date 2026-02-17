"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Zap } from "lucide-react";

export default function Marquee() {
    const { t } = useLocale();

    const items = [
        "BMW SERVICE", "M POWER", "DIAGNOSTICS", "CHIP TUNING",
        "E-SERIES", "F-SERIES", "G-SERIES", "M-PERFORMANCE",
        "X-SERIES", "7-SERIES", "M3", "M4", "M5", "X5M", "X6M",
        "ORIGINAL PARTS", "WARRANTY", "BATUMI"
    ];

    return (
        <div className="relative py-4 bg-black border-y border-white/5 overflow-hidden z-20">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap items-center will-change-transform">
                {[...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center mx-8 group">
                        <span className="text-sm md:text-base font-heading tracking-[0.3em] uppercase text-gray-500 group-hover:text-white transition-colors duration-300">
                            {item}
                        </span>
                        <Zap className="w-3 h-3 text-[#E62E2D] ml-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>
        </div>
    );
}
