import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import PromoGrid from './components/PromoGrid'; // Impor komponen yang baru dibuat

export default function PromoPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <PromoGrid />
      </main>
      <Footer />
    </div>
  );
}