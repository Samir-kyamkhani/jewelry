import React from "react";
import JewelryHeroSection from "../components/JewelryHeroSection";
import JewelrySection from "../components/JewelrySection";
import JewelryCatalog from "../components/JewelryCatalog";
import TestimonialPromoSection from "../components/TestimonialPromoSection";

export default function HomePage() {
  return (
    <>
      <JewelryHeroSection />
      <JewelrySection />
      <JewelryCatalog />
      <TestimonialPromoSection />
    </>
  );
}
