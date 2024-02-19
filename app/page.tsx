import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
}
