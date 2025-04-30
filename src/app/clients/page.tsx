import Clients from "../components/Clients";
import Breadcrumb from "../components/Breadcrum";
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
        <Breadcrumb title="CLIENTS" />
    <Clients />
    <Footer />
    </>
  );
}
