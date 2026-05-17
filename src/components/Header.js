"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-[#E8EDE6] sticky top-0 z-50 w-full" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* اللوجو واسم الموقع على اليمين */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:rotate-12 transition-transform">🌿</span>
          <span className="font-serif font-bold text-xl text-[#1E4D2B]">Nabt | نبت</span>
        </Link>

        {/* زرار الثلاث شرط (على الشمال) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#1E4D2B] hover:bg-[#FCFBF8] rounded-xl transition-colors focus:outline-none z-50 relative"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#E8EDE6] shadow-xl z-40">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            
            <div className="flex flex-col gap-2 border-r-0 md:border-r-2 border-[#E8EDE6]/60 pr-0 md:pr-6 order-2 md:order-1">
              <span className="text-xs font-bold text-[#7D5592] mb-1 block">الحساب والخصوصية</span>
              <button className="text-right py-2.5 px-3 hover:bg-[#FCFBF8] rounded-xl text-gray-700 font-medium transition-colors">
                🔐 تسجيل الدخول
              </button>
              <button className="text-right py-2.5 px-3 hover:bg-[#FCFBF8] rounded-xl text-gray-700 font-medium transition-colors">
                ✨ إنشاء حساب جديد
              </button>
            </div>

            <div className="flex flex-col gap-2 order-1 md:order-2">
              <span className="text-xs font-bold text-[#1E4D2B] mb-1 block">أقسام الموقع</span>
              <Link href="/herbs" onClick={() => setIsOpen(false)} className="py-2.5 px-3 hover:bg-[#FCFBF8] rounded-xl text-gray-700 font-medium transition-colors block">
                🌱 قسم الأعشاب الطبيعية
              </Link>
              <Link href="/oils" onClick={() => setIsOpen(false)} className="py-2.5 px-3 hover:bg-[#FCFBF8] rounded-xl text-gray-700 font-medium transition-colors block">
                💧 قسم الزيوت والعناية
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}