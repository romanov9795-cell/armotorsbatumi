import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import ModelsGallery from "@/components/ModelsGallery";
import OriginalOils from "@/components/OriginalOils";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <ModelsGallery />
      <OriginalOils />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  );
}
