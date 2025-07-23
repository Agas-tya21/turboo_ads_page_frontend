import React from 'react';
import Link from 'next/link';

const AdminHomePage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">Selamat Datang di Admin Panel</h1>
        <p className="text-gray-600 mt-4">
          Pilih salah satu menu di navigasi atas untuk mulai mengelola data.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            <Link href="/admin/cabang" className="btn-primary">
              Kelola Cabang
            </Link>
            <Link href="/admin/produk" className="btn-primary">
              Kelola Produk
            </Link>
            <Link href="/admin/promo" className="btn-primary">
              Kelola Promo
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;