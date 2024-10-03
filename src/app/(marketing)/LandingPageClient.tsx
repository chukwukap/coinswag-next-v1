import AboutPage from "./_components/AboutPage";
import Faq from "./_components/faq/FaqSection";
import Feature from "./_components/feature/Feature";
import Hero from "./_components/Hero";
import Navbar from "./_components/navbar/NavBar";
import TopStories from "./_components/top-stores/TopStores";
import Footer from "./_components/footer";
import GetStarted from "./_components/GetStarted";
import TopMerches from "./_components/top-merches/TopMerches";
import Review from "./_components/Review";

function LandingPageClient() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutPage />
      <Feature />
      <TopStories />
      <TopMerches />
      <Review />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
}
export default LandingPageClient;
