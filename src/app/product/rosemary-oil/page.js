"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RosemaryOilPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8] font-sans text-right" dir="rtl">
      {/* زر الرجوع لصفحة الزيوت */}
      <div className="p-6 max-w-6xl mx-auto">
        <Link href="/oils" className="text-[#53705B] hover:text-[#1E4D2B] font-medium transition-colors inline-flex items-center gap-2">
          &rarr; العودة لصفحة الزيوت
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* النص اليمين: التفاصيل والفوائد */}
        <div>
          <h1 className="text-4xl font-bold text-[#1E4D2B] mb-2 font-serif">زيت الروزماري النقي</h1>
          <p className="text-2xl text-[#53705B] mb-6 font-semibold">٢٥٠ ج.م</p>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            زيت عطري مستخلص من أوراق الروزماري الطبيعية. معروف بخصائصه المحفزة والمنعشة، ويعتبر من أفضل الزيوت الطبيعية لتعزيز نمو الشعر وتقوية البصيلات، بالإضافة إلى قدرته على تنشيط الذاكرة.
          </p>

          <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-[#F3EFEA]">
            <h3 className="text-xl font-bold text-[#1E4D2B] mb-4 border-b border-[#D4E0D0] pb-2 inline-block">✨ فوائد زيت الروزماري</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3 leading-relaxed">
              <li>يحفز الدورة الدموية في فروة الرأس مما يعزز نمو الشعر وكثافته.</li>
              <li>يساعد بفعالية في تقليل تساقط الشعر ويقوي البصيلات من الجذور.</li>
              <li>يخفف من قشرة الرأس ويطهر الفروة بفضل خصائصه المضادة للبكتيريا.</li>
              <li>يساعد استنشاقه على تحسين التركيز والذاكرة وتخفيف الإجهاد الذهني.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F3EFEA] mb-8">
            <h3 className="text-xl font-bold text-[#1E4D2B] mb-4 border-b border-[#D4E0D0] pb-2 inline-block">💆‍♀️ طريقة الاستخدام</h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>للشعر:</strong> تمزج بضع قطرات (٥-٧ قطرات) مع زيت ناقل (مثل زيت الجوجوبا أو جوز الهند) وتدلك به فروة الرأس جيداً، يترك لساعتين قبل الغسيل. <br/>
              <strong>للتركيز:</strong> توضع قطرات في الفواحة لتعطير الغرفة أو يستنشق لزيادة النشاط.
            </p>
          </div>

          <button className="w-full bg-[#53705B] text-white py-4 rounded-xl font-bold text-xl hover:bg-[#3F5745] transition-all shadow-md hover:shadow-lg">
            إضافة إلى السلة
          </button>
        </div>

        {/* النص الشمال: جاليري الصور */}
        <div className="w-full sticky top-10 flex flex-col gap-4">
          
          {/* الصورة الرئيسية الكبيرة */}
          <div className="w-full h-[380px] bg-[#F2F5F3] rounded-3xl border border-[#F3EFEA] flex items-center justify-center shadow-inner overflow-hidden relative">
            <motion.img 
              src="/ROOS.png" 
              alt="زيت الروزماري النقي" 
              className="w-full h-full object-cover mix-blend-normal"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* الصور المصغرة (Thumbnails) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] bg-[#F2F5F3] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#53705B] transition-all shadow-sm cursor-pointer group">
              <img src="/Ros-1.jpg" alt="صورة الروزماري 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative aspect-[4/3] bg-[#F2F5F3] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#53705B] transition-all shadow-sm cursor-pointer group">
              <img src="/Ros-2.png" alt="صورة الروزماري 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}