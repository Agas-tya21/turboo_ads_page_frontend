import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyInfo from './components/CompanyInfo';
import Products from './components/Products';
import PromoSection from './components/PromoSection';
import HowToApply from './components/HowToApply';
import InspiringInfo from './components/InspiringInfo';
import Locations from './components/Locations';
import PreFooterCTA from './components/PreFooterCTA';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      {/* <TopBar /> */}
      <Header />
      <Hero />
      <CompanyInfo />
      <Products />
      {/* <PromoSection /> */}
      <HowToApply />
      <InspiringInfo />
      <Locations />
      <PreFooterCTA />
      <Footer />
      <FloatingActionBar />
    </div>
  );
}