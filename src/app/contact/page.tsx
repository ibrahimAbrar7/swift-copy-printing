import BackToTop from "../components/BackToTop";
import Breadcrumb from "../components/Breadcrum";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import ThemeToggle from "../components/ThemeToggle";
export default function AboutPage() {
  return (
    <>
    <HeaderOne />
    <HeaderTwo /> 
        <ThemeToggle />
        <Breadcrumb title="CONTACT US" />
    <Contact />
    <Footer />
    <BackToTop />
    </>
  );
}
