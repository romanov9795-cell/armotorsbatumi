"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Check local storage
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "true");
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none"
                >
                    <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto shadow-2xl rounded-none clip-tech-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#E62E2D]/20 rounded-none text-[#E62E2D]">
                                <Cookie className="w-6 h-6" />
                            </div>
                            <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                                <a href="#" className="text-[#E62E2D] hover:underline ml-1">Learn more</a>
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setVisible(false)}
                                className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                            >
                                Decline
                            </button>
                            <button
                                onClick={accept}
                                className="btn-primary py-3 px-8 text-xs font-bold shadow-lg"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
