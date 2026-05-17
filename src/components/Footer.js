"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FDFBF7] border-t border-[#E8EDE6] text-right py-12 px-6 mt-20 relative overflow-hidden" dir="rtl">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start relative z-10">
        
        {/* العمود 1: اللوجو */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2 w-max">
            <span className="text-3xl">🌿</span>
            <span className="font-serif font-bold text-2xl text-[#1E4D2B]">Nabt</span>
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            خلاصة الطبيعة السيناوية لعناية صحية متكاملة.
          </p>
        </div>

        {/* العمود 2: روابط سريعة */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold text-[#1E4D2B] tracking-widest uppercase font-sans w-max">
            Quick Links
          </span>
          <div className="flex flex-col gap-2">
            <Link href="/herbs" className="text-gray-500 hover:text-[#7D5592] text-sm transition-colors w-max">قسم الأعشاب</Link>
            <Link href="/oils" className="text-gray-500 hover:text-[#7D5592] text-sm transition-colors w-max">قسم الزيوت</Link>
          </div>
        </div>

        {/* العمود 3: الحساب */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold text-[#1E4D2B] tracking-widest uppercase font-sans w-max">
            My Account
          </span>
          <div className="flex flex-col gap-2">
            <button className="text-right text-gray-500 hover:text-[#7D5592] text-sm transition-colors w-max">تسجيل الدخول</button>
            <button className="text-right text-gray-500 hover:text-[#7D5592] text-sm transition-colors w-max">إنشاء حساب</button>
          </div>
        </div>

        {/* العمود 4: التواصل */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold text-[#1E4D2B] tracking-widest uppercase font-sans w-max">
            Contact Us
          </span>
          <div className="flex flex-col gap-2">
            <button className="text-right text-gray-500 hover:text-[#7D5592] text-sm transition-colors w-max font-sans" dir="ltr">info@nabt.com</button>
            <button className="text-right text-gray-500 hover:text-[#7D5592] text-sm transition-colors w-max font-sans" dir="ltr">+20 100 000 0000</button>
          </div>
        </div>

      </div>

      {/* شريط الحقوق المحدث باسمك المائل والأنيق */}
      <div className="max-w-7xl mx-auto text-center border-t border-[#E8EDE6]/50 mt-10 pt-6">
        <p className="text-xs text-gray-400 font-sans">
          &copy; {new Date().getFullYear()} Nabt. Designed & Developed by <span className="italic font-semibold text-[#7D5592] tracking-wide">Eng:Dalia Emad</span>. All rights reserved.
        </p>
      </div>

    </footer>
  );
}