import React from 'react';
import { SocialIcon } from './icons';

const BFI_ORANGE = "#F7941D";

const Footer = () => (
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
);

export default Footer;