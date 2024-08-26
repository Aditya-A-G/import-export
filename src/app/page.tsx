import { Header } from "@/sections/Header";
import { Carousel } from "@/sections/Carousel";
import { Gallery } from "@/sections/Gallery";
import { Catalogue } from "@/sections/Catalogue";
import { LogoTicker } from "@/sections/LogoTicker";
import { Location } from "@/sections/Location";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Gallery />
      <Catalogue />
      <LogoTicker />
      <Location />
      <CallToAction />
      <Footer />
    </>
  );
}
