'use client'; // Diperlukan karena kita akan menggunakan state (useState)

import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

const BFI_BLUE = "#FE0000";

const Header = () => {
  // State untuk melacak apakah menu mobile sedang terbuka atau tidak
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: BFI_BLUE }} className="shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-20 text-white">
        {/* Logo */}
        <div className="flex-shrink-0">
           <img src="/logos/turboologo.png" alt="Turboo Logo" className="h-16" />
        </div>

        {/* Navigasi untuk Desktop */}
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
            <a href="#" className="flex items-center gap-1 p-2 rounded hover:bg-gray-100">
              Produk <ChevronDownIcon />
            </a>
            <a href="#" className="flex items-center gap-1 p-2 rounded hover:bg-gray-100">
              Layanan <ChevronDownIcon />
            </a>
            <a href="#" className="p-2 rounded hover:bg-gray-100">Promo</a>
            <a href="#" className="p-2 rounded hover:bg-gray-100">Tips Keuangan</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;