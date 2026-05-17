"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ChamomileOilPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8] font-sans text-right" dir="rtl">
      {/* زر الرجوع لصفحة الزيوت */}
      <div className="p-6 max-w-6xl mx-auto">
        <Link href="/oils" className="text-[#DCA11D] hover:text-[#6B4F1A] font-medium transition-colors inline-flex items-center gap-2">
          &rarr; العودة لصفحة الزيوت
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* النص اليمين: التفاصيل والفوائد */}
        <div>
          <h1 className="text-4xl font-bold text-[#6B4F1A] mb-2 font-serif">زيت البابونج النقي</h1>
          <p className="text-2xl text-[#DCA11D] mb-6 font-semibold">٧٠٠ ج.م</p>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            زيت عطري مستخلص من أزهار البابونج السيناوي. يتميز بخصائصه المهدئة والمضادة للالتهابات، مما يجعله الخيار الأول للبشرة الحساسة والمتهيجة.
          </p>

          <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-[#F3EFEA]">
            <h3 className="text-xl font-bold text-[#6B4F1A] mb-4 border-b border-[#EEDB9F] pb-2 inline-block">✨ فوائد زيت البابونج</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3 leading-relaxed">
              <li>يهدئ البشرة المتهيجة ويخفف من الاحمرار والحساسية.</li>
              <li>يساعد في تقليل مظهر الهالات السوداء تحت العين بفعالية.</li>
              <li>مرطب ممتاز للبشرة الجافة ويمنحها نعومة فائقة.</li>
              <li>يمكن استخدامه كزيت للمساج للمساعدة على الاسترخاء قبل النوم.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F3EFEA] mb-8">
            <h3 className="text-xl font-bold text-[#6B4F1A] mb-4 border-b border-[#EEDB9F] pb-2 inline-block">💆‍♀️ طريقة الاستخدام</h3>
            <p className="text-gray-600 leading-relaxed">
              توضع قطرات بسيطة على بشرة نظيفة وتدلك برفق بحركات دائرية. للهالات السوداء، يمسح بلطف حول منطقة العين قبل النوم يومياً.
            </p>
          </div>

          <button className="w-full bg-[#DCA11D] text-white py-4 rounded-xl font-bold text-xl hover:bg-[#B8860B] transition-all shadow-md hover:shadow-lg">
            إضافة إلى السلة
          </button>
        </div>

        {/* النص الشمال: جاليري الصور */}
        <div className="w-full sticky top-10 flex flex-col gap-4">
          
          {/* الصورة الرئيسية الكبيرة */}
          <div className="w-full h-[380px] bg-[#FDF9ED] rounded-3xl border border-[#F3EFEA] flex items-center justify-center shadow-inner overflow-hidden relative">
            <motion.img 
              src="/Cham-pic.png" 
              alt="زيت البابونج النقي" 
              className="w-full h-full object-cover mix-blend-normal"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* الصور المصغرة (Thumbnails) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] bg-[#FDF9ED] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#DCA11D] transition-all shadow-sm cursor-pointer group">
              <img src="/chaPic1.jpg" alt="صورة البابونج 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative aspect-[4/3] bg-[#FDF9ED] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#DCA11D] transition-all shadow-sm cursor-pointer group">
              <img src="/chaPic2.png" alt="صورة البابونج 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}