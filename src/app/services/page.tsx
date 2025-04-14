import Service from "../components/Service";
import Breadcrumb from "../components/Breadcrum";
import Footer from "../components/Footer";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import BackToTop from "../components/BackToTop";
export default function AboutPage() {
  return (
    <>
    <HeaderOne />
    <HeaderTwo /> 
    <Breadcrumb title="SERVICES" />
    <Service />
    <Footer />
    <BackToTop />
    </>
  );
}
