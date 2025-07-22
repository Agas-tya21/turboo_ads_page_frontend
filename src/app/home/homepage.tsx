import Image from "next/image";

// Komponen Ikon SVG untuk kemudahan penggunaan
const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="16"
    height="16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const AjukanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);

const PromoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 11.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008c0-.414.336-.75.75-.75h.008zM12 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 2.25h16.5a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 6.75V4.5A2.25 2.25 0 013.75 2.25z" />
    </svg>
);

const BfiMobileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 19.5h16.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v10.5A2.25 2.25 0 003.75 19.5z" />
    </svg>
);

const LiveChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.056 3 12c0 2.233.91 4.275 2.39 5.81.332.33.52.776.52 1.238v.864a.75.75 0 00.75.75h.396a4.503 4.503 0 012.18-1.556c.338-.13.68-.216 1.03-.28A7.5 7.5 0 0112 20.25z" />
    </svg>
);

const SocialIcon = ({ children, href }: { children: React.ReactNode, href: string }) => (
    <a href={href} className="bg-gray-700 p-2 rounded-md hover:bg-gray-600 transition-colors">
        {children}
    </a>
);


export default function Home() {
  const BFI_BLUE = "#FE0000";
  const BFI_ORANGE = "#F7941D";

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      {/* Top Bar */}
      <div className="bg-white text-gray-600 text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">Beranda</a>
            <a href="#" className="hover:text-blue-600">Informasi Perusahaan</a>
            <a href="#" className="hover:text-blue-600">Karir</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="font-semibold text-gray-800">EN</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="font-semibold text-blue-600">ID</a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header style={{ backgroundColor: BFI_BLUE }} className="shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center h-20 text-white">
          <div className="flex-shrink-0">
             <img src="/logos/turboologo.png" alt="Turboo Logo" className="h-16" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-base">
            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              Produk <ChevronDownIcon />
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              Layanan <ChevronDownIcon />
            </a>
            <a href="#" className="hover:opacity-80">Promo</a>
            <a href="#" className="hover:opacity-80">Tips Keuangan</a>
          </nav>
          <div>
            <a 
              href="#" 
              className="border-2 border-white rounded-full px-8 py-2 text-base font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Masuk
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Right Image Content */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[350px] h-[450px]">
              <img
                src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                alt="Wanita tersenyum menggunakan layanan Turboo di ponsel"
                className="rounded-xl z-10 w-full h-full object-cover"
              />
              <div className="absolute -top-8 -right-8 bg-white p-3 rounded-full shadow-lg z-20">
                <img src="https://www.svgrepo.com/show/497123/shop.svg" alt="Ikon Toko" width="32" height="32" />
              </div>
              <div className="absolute -top-4 left-4 bg-white p-3 rounded-full shadow-lg z-20">
                <img src="https://www.svgrepo.com/show/488390/truck.svg" alt="Ikon Truk" width="32" height="32" />
              </div>
               <div className="absolute bottom-12 -left-10 bg-white p-3 rounded-full shadow-lg z-20">
                 <img src="https://www.svgrepo.com/show/522439/home.svg" alt="Ikon Rumah" width="32" height="32" />
              </div>
              <div className="absolute bottom-20 -right-12 bg-white p-3 rounded-full shadow-lg z-20">
                <img src="https://www.svgrepo.com/show/494942/graduation-cap.svg" alt="Ikon Topi Wisuda" width="32" height="32" />
              </div>
            </div>
          </div>
          
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-extrabold leading-tight" style={{ color: BFI_BLUE }}>
              Dengan Turboo
              <span className="text-4xl block text-gray-800 font-bold">Semua Jalan Menjadi Mudah</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Mulai dari pendidikan, kesehatan, hingga modal usaha. Turboo siap membantu Anda.
            </p>
            <div className="mt-4">
              {/* PERUBAHAN 1: Mengubah href ke #produk-kami */}
              <a 
                href="#produk-kami"
                style={{ backgroundColor: BFI_ORANGE }} 
                className="text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-lg inline-block"
              >
                Lihat Produk Kami &gt;
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Turboo berizin dan diawasi oleh Otoritas Jasa Keuangan
            </p>
          </div>

        </div>
      </main>

      {/* Company Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                        Turboo adalah Perusahaan Pembiayaan Tepercaya di Indonesia
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div>
                        <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>Sejak 1982</h3>
                        <p className="text-gray-600 mt-2">Lebih dari 40 tahun hadir dan melayani kebutuhan keuangan masyarakat.</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>&gt;400.000</h3>
                        <p className="text-gray-600 mt-2">Konsumen aktif telah memilih Turboo sebagai mitra keuangannya.</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>&gt;200 Cabang</h3>
                        <p className="text-gray-600 mt-2">Pelayanan yang tersebar hampir seluruh Indonesia.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Products Section */}
      {/* PERUBAHAN 2: Menambahkan id="produk-kami" */}
      <section id="produk-kami" className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12" style={{ color: BFI_BLUE }}>
            Produk yang Kami Tawarkan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Card 1: Mobil */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pembiayaan Berjaminan BPKB Mobil</h3>
              <p className="text-gray-600 mb-6">
                Dapatkan dana pencairan hingga 85% dari nilai kendaraan dan tenor hingga 3 tahun. <a href="#" className="text-blue-600 font-semibold">Pelajari Produk</a>
              </p>
              <a href="#" className="font-bold text-blue-600">Ajukan Sekarang &gt;</a>
              <div className="absolute -bottom-4 -right-4">
                <img src="https://bfi.co.id/themes/bfi/assets/images/home/product-car.png" alt="BPKB Mobil" className="w-28"/>
              </div>
            </div>
            
            {/* Card 2: Motor */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pembiayaan Berjaminan BPKB Motor</h3>
              <p className="text-gray-600 mb-6">
                Dapatkan pinjaman dengan proses cepat dan tenor maksimal hingga 24 bulan. <a href="#" className="text-blue-600 font-semibold">Pelajari Produk</a>
              </p>
              <a href="#" className="font-bold text-blue-600">Ajukan Sekarang &gt;</a>
              <div className="absolute -bottom-4 -right-4">
                <img src="https://bfi.co.id/themes/bfi/assets/images/home/product-motor.png" alt="BPKB Motor" className="w-28"/>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Promo Section - Mesin Industri & Alat Berat */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Promo Spesial dan Informasi Bulan Ini</h2>
          <div className="relative rounded-2xl text-white p-8 md:p-12 bg-gradient-to-r from-[#003d7a] to-[#005a9c] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="flex flex-col gap-4 z-10">
                <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                  PEMBIAYAAN MESIN INDUSTRI & ALAT BERAT
                </h3>
                <p className="text-xl lg:text-2xl font-semibold mt-2">
                  DENGAN JAMINAN INVOICE UNTUK SOLUSI KEUNTUNGAN BERLIPAT
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-6 items-start md:items-center text-base">
                  <a href="#" className="font-bold border border-white rounded-md px-4 py-2 hover:bg-white hover:text-[#003d7a] transition-colors">BFI.CO.ID</a>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-bold text-lg">1500018</span>
                  </div>
                </div>
              </div>

              {/* Image and QR Code Content */}
              <div className="relative flex justify-center items-center h-64 md:h-auto -mr-8">
                 <img
                    src="https://www.bfi.co.id/themes/bfi/assets/images/home/bfi-product-heavy-equipment.png"
                    alt="Pembiayaan Mesin Industri & Alat Berat"
                    className="absolute inset-0 w-full h-full object-contain object-center opacity-20 md:opacity-100 md:relative"
                  />
                 <div className="absolute bottom-0 right-8 md:bottom-4 md:right-4 bg-white p-2 rounded-lg z-10">
                   <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.bfi.co.id"
                      alt="QR Code Turboo"
                      className="w-20 h-20"
                    />
                 </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-8 md:left-12 font-bold text-lg z-10">#SelaluAdaJalan</div>
            <div className="absolute top-4 right-8 md:right-12 z-10">
                <div className="font-extrabold text-2xl border-2 border-white px-3 py-1">
                    BFI <span className="font-light">FINANCE</span>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Apply Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-2">Langkah-langkah Mudah Pengajuan Pinjaman</h2>
          <p className="text-lg text-gray-600 mb-16">Proses Cepat dan Sederhana!</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-6 rounded-2xl mb-6 flex justify-center items-center w-28 h-28">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">1. Isi Form Online</h3>
              <p className="text-gray-600 text-sm max-w-[200px]">Siapkan data jaminan aset dan data diri Anda</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
               <div className="bg-blue-100 p-6 rounded-2xl mb-6 flex justify-center items-center w-28 h-28">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">2. Kami akan menghubungi Anda</h3>
              <p className="text-gray-600 text-sm max-w-[200px]">Anda akan dihubungi Call Center kami untuk konsultasi pinjaman dan tenor</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
               <div className="bg-blue-100 p-6 rounded-2xl mb-6 flex justify-center items-center w-28 h-28">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">3. Survei dan Validasi Aset</h3>
              <p className="text-gray-600 text-sm max-w-[200px]">Kami akan lakukan survei dan cek aset untuk proses selanjutnya</p>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center">
               <div className="bg-blue-100 p-6 rounded-2xl mb-6 flex justify-center items-center w-28 h-28">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">4. Pencairan Dana</h3>
              <p className="text-gray-600 text-sm max-w-[200px]">Setelah survei dan disetujui, dana akan segera cair ke rekening Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo dan Informasi Inspiratif */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-blue-800 text-center mb-8">Promo dan Informasi Inspiratif untuk Kehidupan Finansial Anda</h2>

          {/* Satu card besar di atas */}
          <div className="mb-8">
            <div className="bg-blue-100 rounded-2xl shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">DENGAN KENDARAAN RAMAH LINGKUNGAN</h3>
                  <p className="text-blue-600 font-semibold mb-4">Jaminan BPKB MOBIL Listrik UVP</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <span className="text-3xl font-bold text-orange-600">36</span>
                      <span className="text-sm text-gray-600">Tenor Maksimal</span>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-green-600">0,76%</span>
                      <span className="text-sm text-gray-600">Bunga Flat Mulai dari</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">BFI Dana Express Mobil - Ubah Mobil Listrik jadi... Butuh dana cepat untuk kebutuhan harianmu atau...</p>
                  <p className="text-gray-500 text-xs">October 5, 2023</p>
                </div>
                <div className="relative h-64 md:h-full">
                  {/* Ganti dengan gambar kendaraan listrik */}
                  <img src="https://via.placeholder.com/600x400.png?text=Kendaraan+Listrik" alt="Kendaraan Listrik" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Dua card di bawahnya */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-4">
                {/* Ganti dengan gambar terkait BI Checking */}
                <img src="https://via.placeholder.com/600x400.png?text=BI+Checking" alt="BI Checking" className="w-full h-32 object-cover mb-4 rounded-md" />
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Apa itu BI Checking? Ini...</h4>
                <p className="text-gray-700 text-sm mb-2">Apa itu BI Checking? Itu adalah informasi riwayat kredit seseorang...</p>
                <p className="text-gray-500 text-xs">Agustus 18, 2023</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-4">
                {/* Ganti dengan gambar terkait Aset */}
                <img src="https://via.placeholder.com/600x400.png?text=Aset" alt="Aset" className="w-full h-32 object-cover mb-4 rounded-md" />
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Aset Adalah: Pengertian...</h4>
                <p className="text-gray-700 text-sm mb-2">Aset adalah sumber daya yang dikuasai dan dimiliki oleh suatu...</p>
                <p className="text-gray-500 text-xs">Juli 11, 2023</p>
              </div>
            </div>
          </div>

          {/* Tiga card di bawahnya */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-4">
                {/* Ganti dengan gambar card 3 */}
                <img src="https://via.placeholder.com/600x400.png?text=Info+3" alt="Info 3" className="w-full h-32 object-cover mb-4 rounded-md" />
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Judul Informasi 3</h4>
                <p className="text-gray-700 text-sm mb-2">Deskripsi singkat informasi 3...</p>
                <p className="text-gray-500 text-xs">Tanggal</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-4">
                {/* Ganti dengan gambar card 4 */}
                <img src="https://via.placeholder.com/600x400.png?text=Info+4" alt="Info 4" className="w-full h-32 object-cover mb-4 rounded-md" />
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Judul Informasi 4</h4>
                <p className="text-gray-700 text-sm mb-2">Deskripsi singkat informasi 4...</p>
                <p className="text-gray-500 text-xs">Tanggal</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-4">
                {/* Ganti dengan gambar card 5 */}
                <img src="https://via.placeholder.com/600x400.png?text=Info+5" alt="Info 5" className="w-full h-32 object-cover mb-4 rounded-md" />
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Judul Informasi 5</h4>
                <p className="text-gray-700 text-sm mb-2">Deskripsi singkat informasi 5...</p>
                <p className="text-gray-500 text-xs">Tanggal</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-2">Turboo Memiliki Lebih dari 200 Lokasi Pelayanan Tersebar di Indonesia</h2>
          <p className="text-lg text-gray-600 mb-8">Temukan cabang atau POS Turboo terdekat dengan Anda</p>
          
          <div className="relative mb-8 p-4">
            {/* Ganti src dengan path gambar peta Anda */}
            <img src="https://www.bfi.co.id/themes/bfi/assets/images/home/bfi-map-2022.png" alt="Peta Lokasi Turboo di Indonesia" className="w-full max-w-4xl mx-auto h-auto object-contain"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <a href="#" style={{ backgroundColor: BFI_ORANGE }} className="text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                 Temukan disini &gt;
               </a>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            Jam operasional semua cabang Turboo:<br/>
            Senin - Jumat 08.15 - 16.30 WIB<br/>
            Sabtu 08.00 - 12.00 WIB
          </p>
        </div>
      </section>
      
      {/* Pre-footer CTA */}
      <section className="bg-[#003d7a] py-12">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6 md:mb-0 md:max-w-2xl">Nikmati proses pencairan cepat dengan melengkapi persyaratan yang ada</h2>
              <div className="flex flex-col gap-4 w-full sm:w-auto sm:min-w-[250px]">
                  <a href="#" style={{ backgroundColor: BFI_ORANGE }} className="text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-center">
                      Ajukan Sekarang
                  </a>
                  <a href="#" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-[#003d7a] transition-colors text-center">
                      Konsultasi Pengajuan
                  </a>
              </div>
          </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#333333] text-gray-300 py-12">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                  {/* Column 1: Address */}
                  <div>
                      <h3 className="font-bold text-white mb-4">-</h3>
                      <p className="text-sm leading-relaxed">
                          -<br/>
                          -<br/>
                          -
                      </p>
                      <p className="text-sm mt-4">
                          Phone: +62 21 2985 0300, 2985 0500<br/>
                          Fax: +62 21 2985 0757, 2985 0758
                      </p>
                  </div>
                  {/* Column 2: Customer Care & Social */}
                  <div className="flex flex-col items-start">
                       <a href="tel:1500018" className="border border-gray-500 rounded-md px-4 py-2 text-sm mb-6 hover:bg-gray-700 transition-colors">Customer Care 📞 1500018</a>
                       <div className="flex gap-3 mb-4 text-white">
                          <SocialIcon href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                          </SocialIcon>
                           <SocialIcon href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
                          </SocialIcon>
                           <SocialIcon href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.208 3.803 4.649-.623.169-1.282.23-1.967.182.598 1.884 2.333 3.258 4.393 3.315-1.621 1.274-3.662 2.031-5.873 1.745 1.994 1.282 4.368 2.029 6.946 2.029 8.325 0 12.89-6.903 12.89-12.89 0-.197-.005-.393-.014-.588.884-.637 1.65-1.425 2.257-2.341z" /></svg>
                          </SocialIcon>
                           <SocialIcon href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0-.825.675-1.5 1.5-1.5h11.04c.825 0 1.5.675 1.5 1.5v17c0 .825-.675 1.5-1.5 1.5h-11.04c-.825 0-1.5-.675-1.5-1.5v-17zM6.48 8.49h3.54v12h-3.54v-12zM8.25 4.5c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75-.784-1.75-1.75-1.75zM16.53 11.23c-1.353 0-2.022.694-2.36 1.306v-1.046h-3.54v12h3.54v-6.32c0-1.002.34-1.984 1.432-1.984 1.045 0 1.278.785 1.278 1.95v6.354h3.54v-6.52c0-2.8-1.5-4.22-3.87-4.22z" /></svg>
                          </SocialIcon>
                           <SocialIcon href="#">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm6.838-2.668.494-.296c1.499-.891 3.221-1.371 4.978-1.371 5.454 0 9.917-4.463 9.917-9.917s-4.463-9.917-9.917-9.917-9.917 4.464-9.917 9.917c0 2.021.602 3.935 1.688 5.586l.321.533-1.04 3.785 3.849-1.037z"/></svg>
                          </SocialIcon>
                           <SocialIcon href="#">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                          </SocialIcon>
                       </div>
                       <p className="text-xs">Turboo berizin dan diawasi oleh Otoritas Jasa Keuangan</p>
                  </div>
                  {/* Column 3: Back to top */}
                  <div className="flex justify-end items-start">
                      <a href="#" style={{ backgroundColor: BFI_ORANGE }} className="p-3 rounded-md hover:opacity-90">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                      </a>
                  </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                  <p className="mb-4 md:mb-0">&copy; 2025 - PT Turboo Indonesia Tbk</p>
                  <div className="flex flex-wrap justify-center gap-4">
                      <a href="#" className="hover:text-white">Karir</a>
                      <a href="#" className="hover:text-white">Peluang Bisnis</a>
                      <a href="#" className="hover:text-white">Hubungi Kami</a>
                      <a href="#" className="hover:text-white">Cabang Kami</a>
                      <a href="#" className="hover:text-white">Syarat & Penggunaan</a>
                      <a href="#" className="hover:text-white">Privasi</a>
                  </div>
              </div>
          </div>
      </footer>


      {/* Floating Action Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-4 bg-white shadow-2xl rounded-full px-6 py-3" style={{ color: BFI_BLUE }}>
              <a href="#" className="flex flex-col items-center text-center text-xs font-medium hover:text-orange-500">
                  <AjukanIcon />
                  <span>Ajukan</span>
              </a>
              <a href="#" className="flex flex-col items-center text-center text-xs font-medium hover:text-orange-500">
                  <PromoIcon />
                  <span>Promo</span>
              </a>
              <a href="#" className="flex flex-col items-center text-center text-xs font-medium hover:text-orange-500">
                  <BfiMobileIcon />
                  <span>BFI Mobile</span>
              </a>
              <a href="#" className="flex flex-col items-center text-center text-xs font-medium hover:text-orange-500">
                  <LiveChatIcon />
                  <span>Live Chat</span>
              </a>
          </div>
      </div>
    </div>
  );
}