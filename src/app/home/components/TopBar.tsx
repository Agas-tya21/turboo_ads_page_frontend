import React from 'react';

const TopBar = () => (
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
);

export default TopBar;