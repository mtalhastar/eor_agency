// Table of Contents
// @Top Section
// @About Us
// @Services
// @Contact
// @Review
// @Newsletter

import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import LandingPage from "@/components/landing";
import NewsLetter from "@/components/newsletter";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      {/* @Top Section */}
      <LandingPage />
      {/* @About Us */}
      <AboutUs />
      {/* @Services */}
      <Services />
      {/* @Contact */}
      {/* <Contact /> */}
      {/* @Newsletter */}
      <NewsLetter />
    </>
  );
}
