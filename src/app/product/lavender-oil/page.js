"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LavenderOilPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8] font-sans text-right" dir="rtl">
      {/* زر الرجوع لصفحة الزيوت */}
      <div className="p-6 max-w-6xl mx-auto">
        <Link href="/oils" className="text-[#7D5592] hover:text-[#4A3B52] font-medium transition-colors inline-flex items-center gap-2">
          &rarr; العودة لصفحة الزيوت
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* النص اليمين: التفاصيل والفوائد */}
        <div>
          <h1 className="text-4xl font-bold text-[#4A3B52] mb-2 font-serif">زيت اللافندر النقي</h1>
          <p className="text-2xl text-[#7D5592] mb-6 font-semibold">٥٥٠ ج.م</p>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            زيت عطري مستخلص من زهور اللافندر الطبيعية. معروف بخصائصه المهدئة التي تساعد على الاسترخاء والنوم العميق، وتخفيف التوتر، بالإضافة إلى فوائده الرائعة لتنقية البشرة وتغذية الشعر.
          </p>

          <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-[#F3EFEA]">
            <h3 className="text-xl font-bold text-[#4A3B52] mb-4 border-b border-[#E6E0EB] pb-2 inline-block">✨ فوائد زيت اللافندر</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3 leading-relaxed">
              <li>يساعد على الاسترخاء العميق ويقلل من التوتر والقلق اليومي.</li>
              <li>يحسن جودة النوم ويخفف من الأرق عند استخدامه ليلاً.</li>
              <li>يعمل كمهدئ للجلد ويساعد في تخفيف تهيج البشرة وتنقيتها.</li>
              <li>يغذي فروة الرأس ويساعد في تعزيز صحة الشعر ولمعانه.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F3EFEA] mb-8">
            <h3 className="text-xl font-bold text-[#4A3B52] mb-4 border-b border-[#E6E0EB] pb-2 inline-block">💆‍♀️ طريقة الاستخدام</h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>للاسترخاء والنوم:</strong> توضع قطرات قليلة على الوسادة أو في الفواحة قبل النوم. <br/>
              <strong>للبشرة والشعر:</strong> تمزج قطرات منه مع زيت ناقل (مثل زيت اللوز أو جوز الهند) ويدلك به المكان المطلوب برفق.
            </p>
          </div>

          <button className="w-full bg-[#7D5592] text-white py-4 rounded-xl font-bold text-xl hover:bg-[#603f72] transition-all shadow-md hover:shadow-lg">
            إضافة إلى السلة
          </button>
        </div>

        {/* النص الشمال: جاليري الصور */}
        <div className="w-full sticky top-10 flex flex-col gap-4">
          
          {/* الصورة الرئيسية الكبيرة */}
          <div className="w-full h-[380px] bg-[#F6F2F8] rounded-3xl border border-[#F3EFEA] flex items-center justify-center shadow-inner overflow-hidden relative">
            <motion.img 
              src="/LaPic-1.png" 
              alt="زيت اللافندر النقي" 
              className="w-full h-full object-cover mix-blend-normal"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* الصور المصغرة (Thumbnails) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] bg-[#F6F2F8] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#7D5592] transition-all shadow-sm cursor-pointer group">
              <img src="/LaPic-2.jpg" alt="صورة اللافندر 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative aspect-[4/3] bg-[#F6F2F8] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#7D5592] transition-all shadow-sm cursor-pointer group">
              <img src="/Hello.jpeg" alt="صورة اللافندر 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}