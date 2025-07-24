import Link from 'next/link';
import React from 'react';

const AdminNavbar = () => {
  return (
    // --- PERUBAHAN DI SINI: Ditambahkan kelas sticky, top-0, dan z-50 ---
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link href="/admin" className="text-xl font-bold hover:text-gray-300">
              Admin Panel
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-baseline space-x-6">
            <Link href="/admin/cabang" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Kelola Cabang
            </Link>
            <Link href="/admin/produk" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Kelola Produk
            </Link>
            <Link href="/admin/promo" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Kelola Promo
            </Link>
            <Link href="/admin/konsumen" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Data Konsumen
            </Link>
          </div>

          {/* Link Kembali ke Halaman Utama */}
          <div className="hidden md:block">
             <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium border border-gray-600 hover:bg-gray-700">
              &larr; Kembali ke Situs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;