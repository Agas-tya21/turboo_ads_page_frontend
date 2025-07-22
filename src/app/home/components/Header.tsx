import React from 'react';
import { ChevronDownIcon } from './icons';

const BFI_BLUE = "#FE0000";

const Header = () => (
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
);

export default Header;