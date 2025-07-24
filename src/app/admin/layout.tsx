'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AdminNavbar from './components/AdminNavbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // --- PERUBAHAN DI SINI ---
    // Periksa status login DAN keberadaan username (usn)
    const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
    const user = sessionStorage.getItem('usn');

    // Jika salah satu kondisi tidak terpenuhi (belum login ATAU tidak ada usn)
    // dan pengguna tidak sedang di halaman login, paksa kembali ke login.
    if ((!isLoggedIn || !user) && pathname !== '/admin/login') {
      router.replace('/admin/login');
    }
  }, [pathname, router]);

  // Jangan tampilkan navbar di halaman login
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <main>
        {children}
      </main>
    </div>
  );
}