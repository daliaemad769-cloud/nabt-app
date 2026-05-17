"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AloeVeraGelPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8] font-sans text-right" dir="rtl">
      {/* زر الرجوع لصفحة المنتجات/الزيوت */}
      <div className="p-6 max-w-6xl mx-auto">
        <Link href="/oils" className="text-[#4A7C59] hover:text-[#1E4D2B] font-medium transition-colors inline-flex items-center gap-2">
          &rarr; العودة لصفحة المنتجات
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* النص اليمين: التفاصيل والفوائد */}
        <div>
          <h1 className="text-4xl font-bold text-[#1E4D2B] mb-2 font-serif">جل الصبار الطبيعي</h1>
          <p className="text-2xl text-[#4A7C59] mb-6 font-semibold">١٤٠ ج.م</p>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            مستخلص جل الصبار (الألوفيرا) النقي 100%. مرطب ومبرد طبيعي فائق الفعالية، يعمل على تجديد خلايا البشرة، مهدئ فوري للحروق والالتهابات، ومغذي طبيعي وخفيف للشعر دون ترك أي أثر دهني.
          </p>

          <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-[#F3EFEA]">
            <h3 className="text-xl font-bold text-[#1E4D2B] mb-4 border-b border-[#C8DBD0] pb-2 inline-block">✨ فوائد جل الصبار</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3 leading-relaxed">
              <li>ترطيب عميق وسريع لجميع أنواع البشرة وخاصة الدهنية والحساسة.</li>
              <li>يهدئ البشرة فوراً بعد التعرض للشمس ويخفف من الحروق والتهيج.</li>
              <li>يساعد في تسريع التئام الجروح الطفيفة وتقليل آثار حب الشباب.</li>
              <li>يعمل كبديل طبيعي لسيروم الشعر لترطيب الأطراف الجافة وتقليل الهيشان.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F3EFEA] mb-8">
            <h3 className="text-xl font-bold text-[#1E4D2B] mb-4 border-b border-[#C8DBD0] pb-2 inline-block">💆‍♀️ طريقة الاستخدام</h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>للبشرة:</strong> توضع كمية مناسبة على بشرة نظيفة وجافة ويدلك برفق حتى يمتصه الجلد تماماً. يفضل استخدامه مرتين يومياً. <br/>
              <strong>للشعر:</strong> يوزع بالتساوي على شعر رطب من الجذور حتى الأطراف لترطيبه، أو كقناع للفروة قبل الاستحمام بـ 20 دقيقة.
            </p>
          </div>

          <button className="w-full bg-[#4A7C59] text-white py-4 rounded-xl font-bold text-xl hover:bg-[#355B40] transition-all shadow-md hover:shadow-lg">
            إضافة إلى السلة
          </button>
        </div>

        {/* النص الشمال: جاليري الصور */}
        <div className="w-full sticky top-10 flex flex-col gap-4">
          
          {/* الصورة الرئيسية الكبيرة */}
          <div className="w-full h-[380px] bg-[#EAF2EC] rounded-3xl border border-[#F3EFEA] flex items-center justify-center shadow-inner overflow-hidden relative">
            <motion.img 
              src="/Gell.jpg" 
              alt="جل الصبار الطبيعي النقي" 
              className="w-full h-full object-cover mix-blend-normal"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* الصور المصغرة (Thumbnails) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] bg-[#EAF2EC] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#4A7C59] transition-all shadow-sm cursor-pointer group">
              <img src="/Gel2.png" alt="صورة جل الصبار 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative aspect-[4/3] bg-[#EAF2EC] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#4A7C59] transition-all shadow-sm cursor-pointer group">
              <img src="/Gel1.jpeg" alt="صورة جل الصبار 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}