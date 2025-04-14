import Clients from "../components/Clients";
import Breadcrumb from "../components/Breadcrum";
import Footer from "../components/Footer";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
export default function AboutPage() {
  return (
    <>
    <HeaderOne />
    <HeaderTwo /> 
    <Breadcrumb title="CLIENTS" />
    <Clients />
    <Footer />
    </>
  );
}
