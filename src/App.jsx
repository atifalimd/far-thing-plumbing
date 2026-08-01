import AboutSection from "./components/About";
import FAQ from "./components/faq";
import FooterCTA from "./components/Footer";
import GoogleReviews from "./components/GoogleReviews";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ShowroomFinanceBanner from "./components/ShowroomFinance";
import TrustStrip from "./components/TrustStrip";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <AboutSection />
      <GoogleReviews />
      <FAQ />
      <ShowroomFinanceBanner />
      <FooterCTA />
    </div>
  );
}

export default App;
