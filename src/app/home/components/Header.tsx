'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';

const BFI_BLUE = "#FE0000";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // --- PERUBAHAN DI SINI: z-50 diubah menjadi z-[1000] ---
    <header style={{ backgroundColor: BFI_BLUE }} className="shadow-md sticky top-0 z-[1000]">
      <div className="container mx-auto px-6 flex justify-between items-center h-20 text-white">
        <div className="flex-shrink-0">
           <Link href="/home">
              <img src="/logos/turboologo.png" alt="Turboo Logo" className="h-16 cursor-pointer" />
           </Link>
        </div>

        {/* Navigasi untuk Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-base">
          <Link href="/home#produk-kami" className="flex items-center gap-1 hover:opacity-80">
            Produk
          </Link>
          <Link href="/promo" className="hover:opacity-80">Promo</Link>
        </nav>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Buka Menu">
            {isMenuOpen ? (
              // Ikon 'X' (Tutup)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ikon Hamburger
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Dropdown untuk Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg absolute w-full">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/home#produk-kami" className="text-left p-2 rounded hover:bg-gray-100" onClick={closeMobileMenu}>
              Produk
            </Link>
            <Link href="/promo" className="p-2 rounded hover:bg-gray-100" onClick={closeMobileMenu}>
                Promo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;