import Products from "../components/Products";
import Breadcrumb from "../components/Breadcrum";
import Footer from "../components/Footer";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import BackToTop from "../components/BackToTop";
import ThemeToggle from "../components/ThemeToggle";
export default function AboutPage() {
  return (
    <>
    <HeaderOne />
    <HeaderTwo /> 
        <ThemeToggle />
        <Breadcrumb title="PRODUCTS" />
    <Products />
    <Footer />
    <BackToTop />
    </>
  );
}
