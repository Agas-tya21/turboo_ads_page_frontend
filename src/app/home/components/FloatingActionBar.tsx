import React from 'react';
import { AjukanIcon, PromoIcon, BfiMobileIcon, LiveChatIcon } from './icons';

const BFI_BLUE = "#FE0000";

const FloatingActionBar = () => (
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
);

export default FloatingActionBar;