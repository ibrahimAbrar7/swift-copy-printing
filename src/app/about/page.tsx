import About from "../components/About";
import BackToTop from "../components/BackToTop";
import Breadcrumb from "../components/Breadcrum";
import Footer from "../components/Footer";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
export default function AboutPage() {
  return (
    <>
    <HeaderOne />
    <HeaderTwo /> 
    <Breadcrumb title="ABOUT US" />
    <About />
    <Footer />
    <BackToTop />
    </>
  );
}
