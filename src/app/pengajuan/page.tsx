import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import FormPengajuan from './components/FormPengajuan';

export default function PengajuanPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <FormPengajuan />
      </main>
      <Footer />
    </div>
  );
}