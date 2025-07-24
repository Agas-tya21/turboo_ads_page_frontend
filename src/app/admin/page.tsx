import React from 'react';
import Link from 'next/link';

// Komponen untuk setiap kartu menu di dasbor
const DashboardCard = ({ href, title, description }: { href: string; title: string; description: string }) => (
  <Link href={href}>
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <span className="text-blue-600 font-semibold mt-4 self-start">
        Kelola Sekarang &rarr;
      </span>
    </div>
  </Link>
);

// Komponen utama untuk halaman dasbor admin
const AdminHomePage = () => {
  return (
    <div className="container mx-auto p-8">
      <section className="bg-white p-10 rounded-lg shadow-md text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Selamat Datang di Dasbor Admin</h1>
        <p className="text-gray-600 mt-4">
          Gunakan panel ini untuk mengelola data cabang, produk, promo, dan pengajuan konsumen.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard
            href="/admin/cabang"
            title="Kelola Cabang"
            description="Tambah, edit, atau hapus data cabang perusahaan di seluruh Indonesia."
          />
          <DashboardCard
            href="/admin/produk"
            title="Kelola Produk"
            description="Atur produk pembiayaan yang ditawarkan kepada konsumen."
          />
           {/* --- KARTU BARU DITAMBAHKAN DI SINI --- */}
          <DashboardCard
            href="/admin/jenisjaminan"
            title="Kelola Jenis Jaminan"
            description="Atur jenis jaminan yang tersedia untuk setiap produk pembiayaan."
          />
          <DashboardCard
            href="/admin/promo"
            title="Kelola Promo"
            description="Buat dan kelola promosi yang sedang berjalan untuk menarik lebih banyak konsumen."
          />
          <DashboardCard
            href="/admin/konsumen"
            title="Data Konsumen"
            description="Lihat daftar pengajuan yang telah diunggah oleh calon konsumen."
          />
          <DashboardCard
            href="/admin/status"
            title="Kelola Status"
            description="Buat atau hapus status yang dapat ditetapkan pada pengajuan konsumen."
            />
        </div>
      </section>
    </div>
  );
};

export default AdminHomePage;