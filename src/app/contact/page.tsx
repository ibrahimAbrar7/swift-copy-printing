import BackToTop from "../components/BackToTop";
import Breadcrumb from "../components/Breadcrum";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
export default function AboutPage() {
  return (
    <>
    <HeaderOne />
    <HeaderTwo /> 
    <Breadcrumb title="CONTACT US" />
    <Contact />
    <Footer />
    <BackToTop />
    </>
  );
}
