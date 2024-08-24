import { Header } from "@/sections/Header";
import { Carousel } from "@/sections/Carousel";
import { Gallery } from "@/sections/Gallery";
import { CompanyPillars } from "@/sections/CompanyPillars";
import { Catalogue } from "@/sections/Catalogue";
import {LogoTicker} from '@/sections/LogoTicker'

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Gallery />
      <CompanyPillars />
      <Catalogue />
      <LogoTicker/>
    </>
  );
}
