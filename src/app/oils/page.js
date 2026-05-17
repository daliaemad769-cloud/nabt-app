"use client";

import Link from 'next/link';
import Image from 'next/image'; // استدعاء وسم الصور الذكي من Next.js لتسريع الموقع

export default function OilsPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8] text-right p-4 md:p-8 lg:p-12 font-sans" dir="rtl">
      
      {/* ================= الهيدر ================= */}
      <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E4D2B] font-serif mb-4">
          الزيوت والعناية
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          خلاصة الطبيعة السيناوية في زيوت عطرية ومنتجات عناية نقية، لاستعادة التوازن والجمال.
        </p>
      </div>

      {/* ================= شبكة المنتجات (4 كروت) ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* ================= كارت 1: جل الصبار ================= */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#E8EDE6] p-4 flex flex-col hover:shadow-md transition-shadow h-full group">
          <Link href="/product/aloe-vera" className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-[#FCFBF8] block">
            <Image 
              src="/gel.png" 
              alt="جل الصبار الطبيعي" 
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </Link>
          <div className="flex-grow text-center px-2">
            <h3 className="text-xl font-bold text-[#1E4D2B] mb-2 font-serif">جل الصبار الطبيعي</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              جل صبار نقي 100% (250 مل). مرطب مثالي للبشرة والشعر، مهدئ لحروق الشمس، ومغذي عميق يعيد الحيوية.
            </p>
          </div>
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#E8EDE6]/60 px-2 flex-row-reverse">
            <div className="text-lg font-bold text-[#1E4D2B] flex items-center gap-1 font-sans">
              <span>100</span>
              <span>ج.م</span>
            </div>
            <Link href="/product/aloe-vera" className="text-[#7D5592] hover:text-[#1E4D2B] text-sm font-bold flex items-center gap-1 transition-colors">
              التفاصيل &larr;
            </Link>
          </div>
        </div>

        {/* ================= كارت 2: زيت البابونج ================= */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#E8EDE6] p-4 flex flex-col hover:shadow-md transition-shadow h-full group">
          {/* تم تعديل الرابط هنا ليوجه لصفحة الزيت الصحيحة */}
          <Link href="/product/chamomile-oil" className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-[#FCFBF8] block">
            <Image 
              src="/chamomile-oil.png" 
              alt="زيت البابونج" 
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </Link>
          <div className="flex-grow text-center px-2">
            <h3 className="text-xl font-bold text-[#1E4D2B] mb-2 font-serif">زيت البابونج</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              زيت عطري مركز (30 مل). يهدئ البشرة الحساسة، يساعد على الاسترخاء العميق، وممتاز للمساج قبل النوم.
            </p>
          </div>
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#E8EDE6]/60 px-2 flex-row-reverse">
            <div className="text-lg font-bold text-[#1E4D2B] flex items-center gap-1 font-sans">
              <span>700</span>
              <span>ج.م</span>
            </div>
            {/* تم تعديل الرابط هنا ليوجه لصفحة الزيت الصحيحة */}
            <Link href="/product/chamomile-oil" className="text-[#7D5592] hover:text-[#1E4D2B] text-sm font-bold flex items-center gap-1 transition-colors">
              التفاصيل &larr;
            </Link>
          </div>
        </div>

        {/* ================= كارت 3: زيت اللافندر ================= */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#E8EDE6] p-4 flex flex-col hover:shadow-md transition-shadow h-full group">
          {/* تم تعديل الرابط هنا ليوجه لصفحة الزيت الصحيحة */}
          <Link href="/product/lavender-oil" className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-[#FCFBF8] block">
            <Image 
              src="/lavender-oil.png" 
              alt="زيت اللافندر" 
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </Link>
          <div className="flex-grow text-center px-2">
            <h3 className="text-xl font-bold text-[#1E4D2B] mb-2 font-serif">زيت اللافندر</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              زيت عطري نقي (30 مل). معروف بخصائصه المهدئة، يساعد في علاج الأرق، ويمنح البشرة نضارة وصفاء.
            </p>
          </div>
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#E8EDE6]/60 px-2 flex-row-reverse">
            <div className="text-lg font-bold text-[#1E4D2B] flex items-center gap-1 font-sans">
              <span>55</span>
              <span>ج.م</span>
            </div>
            {/* تم تعديل الرابط هنا ليوجه لصفحة الزيت الصحيحة */}
            <Link href="/product/lavender-oil" className="text-[#7D5592] hover:text-[#1E4D2B] text-sm font-bold flex items-center gap-1 transition-colors">
              التفاصيل &larr;
            </Link>
          </div>
        </div>

        {/* ================= كارت 4: زيت الروزماري ================= */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#E8EDE6] p-4 flex flex-col hover:shadow-md transition-shadow h-full group">
          {/* تم تعديل الرابط هنا ليوجه لصفحة الزيت الصحيحة */}
          <Link href="/product/rosemary-oil" className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-[#FCFBF8] block">
            <Image 
              src="/rosemary-oil.png" 
              alt="زيت الروزماري" 
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </Link>
          <div className="flex-grow text-center px-2">
            <h3 className="text-xl font-bold text-[#1E4D2B] mb-2 font-serif">زيت الروزماري</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              زيت عطري منعش (30 مل). محفز قوي لنمو الشعر، ينشط الدورة الدموية، ومفيد للتركيز ولتصفية الذهن.
            </p>
          </div>
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#E8EDE6]/60 px-2 flex-row-reverse">
            <div className="text-lg font-bold text-[#1E4D2B] flex items-center gap-1 font-sans">
              <span>250</span>
              <span>ج.م</span>
            </div>
            {/* تم تعديل الرابط هنا ليوجه لصفحة الزيت الصحيحة */}
            <Link href="/product/rosemary-oil" className="text-[#7D5592] hover:text-[#1E4D2B] text-sm font-bold flex items-center gap-1 transition-colors">
              التفاصيل &larr;
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}