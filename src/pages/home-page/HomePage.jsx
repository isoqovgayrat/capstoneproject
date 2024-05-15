import React from "react";
import MediaQuery from "react-responsive";
import "./HomePage.scss";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import HeroSection from "../../components/hero-section/HeroSection";
import HighlightsSection from "../../components/highlights-section/HighlightsSection";
import TestimonialsSection from "../../components/testimonials-section/TestimonialsSection";
import FooterSection from "../../components/footer-section/FooterSection";
import AboutSection from "../../components/about-section/AboutSection";
import MobileNavigationSection from "../../components/mobile-navigation-section/MobileNavigationSection";

function HomePage() {
  return (
    <div className="app-container">
      <MediaQuery maxWidth={970}>
        {(matches) =>
          matches ? <MobileNavigationSection /> : <NavigationSection />
        }
      </MediaQuery>

      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
export default HomePage;
