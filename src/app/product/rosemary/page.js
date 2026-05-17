"use client";

import Link from 'next/link';
import Image from 'next/image'; // استدعاء وسم الصور الذكي
import { motion } from 'framer-motion';

// تحويل وسم Image لـ وسم متحرك
const MotionImage = motion(Image);

export default function RosemaryPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8] text-right p-4 md:p-8 font-sans flex flex-col" dir="rtl">
      
      {/* الهيدر وزر الرجوع */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mb-10">
        <Link href="/herbs" className="text-[#53705B] hover:text-[#1E4D2B] font-medium transition-colors inline-flex items-center gap-2 text-sm order-2 md:order-1 mt-4 md:mt-0">
          &rarr; العودة للأعشاب
        </Link>
        <div className="text-center order-1 md:order-2">
          <h1 className="text-3xl font-bold text-[#1E4D2B] font-serif">تفاصيل المنتج</h1>
          <p className="text-[#53705B] text-sm mt-1">مزيج طبيعي لتركيز أعلى وصحة أفضل</p>
        </div>
        <div className="hidden md:block order-3 w-24"></div> 
      </div>

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col gap-12">
        
        {/* ================= الصف الأول: التفاصيل (يمين) + الصور (شمال) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* النص والمميزات (اليمين) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* العنوان والسعر والوصف متجمعين بشكل متناسق */}
            <div className="mb-6 border-b border-[#E8EDE6] pb-6 relative z-20">
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1E4D2B] font-serif m-0">
                  أوراق الروزماري الطبيعية
                </h2>
                <span className="text-xl md:text-2xl font-bold text-[#53705B] bg-white shadow-sm border border-[#E8EDE6] px-5 py-1.5 rounded-xl">
                  ٢٣ ج.م
                </span>
              </div>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mt-2">
                أوراق روزماري (إكليل الجبل) نقية 100%، تتميز بعطرها الفواح وخصائصها المنعشة التي تساعد على تحسين الذاكرة، تعزيز التركيز، ودعم صحة الجهاز الهضمي.
              </p>
            </div>

            {/* المميزات (شبكة ملمومة) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-20">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#E8EDE6] flex items-center justify-center flex-shrink-0 text-[#53705B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828-9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E4D2B] text-base">طبيعية 100%</h3>
                  <p className="text-gray-500 text-sm mt-1">أعشاب من مصادر موثوقة.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#E8EDE6] flex items-center justify-center flex-shrink-0 text-[#53705B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E4D2B] text-base">عطرية وطازجة</h3>
                  <p className="text-gray-500 text-sm mt-1">غنية بالزيوت الطيارة.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#E8EDE6] flex items-center justify-center flex-shrink-0 text-[#53705B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E4D2B] text-base">بدون إضافات</h3>
                  <p className="text-gray-500 text-sm mt-1">خالية من أي مواد كيميائية.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#E8EDE6] flex items-center justify-center flex-shrink-0 text-[#53705B]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E4D2B] text-base">متعدد الاستخدامات</h3>
                  <p className="text-gray-500 text-sm mt-1">مشروب أو غسول للشعر.</p>
                </div>
              </div>
            </div>

            <button className="w-full md:w-2/3 bg-[#53705B] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#3F5745] transition-all shadow-lg hover:shadow-xl relative z-20">
              إضافة إلى السلة
            </button>
          </div>

          {/* الصور (الشمال) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-white to-[#F2F5F3] p-5 rounded-[2rem] border border-[#E8EDE6] shadow-sm flex flex-col relative z-10">
            {/* الصورة الكبيرة الرئيسية المحدثة */}
            <div className="relative w-full h-[280px] md:h-[350px] rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#FCFBF8] via-transparent to-white">
              <MotionImage 
                src="/Ros-lo.jpg" 
                alt="أوراق الروزماري الرئيسية" 
                width={600}
                height={450}
                className="w-full h-full object-cover mix-blend-normal contrast-[1.02]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F2F5F3]/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* الجاليري المحدث */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4">
              <div className="relative aspect-[4/3] bg-[#FCFBF8] rounded-xl overflow-hidden border-2 border-transparent hover:border-[#53705B] transition-all shadow-sm cursor-pointer group">
                <Image src="/Ros1pic.jpeg" alt="صورة روزماري 1" width={200} height={150} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative aspect-[4/3] bg-[#FCFBF8] rounded-xl overflow-hidden border-2 border-transparent hover:border-[#53705B] transition-all shadow-sm cursor-pointer group">
                <Image src="/Ros2pic.png" alt="صورة روزماري 2" width={200} height={150} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative aspect-[4/3] bg-[#FCFBF8] rounded-xl overflow-hidden border-2 border-transparent hover:border-[#53705B] transition-all shadow-sm cursor-pointer group">
                <Image src="/Ros3pic.png" alt="صورة روزماري 3" width={200} height={150} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= الصف الثاني: الفوائد والتحضير ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4 relative z-20">
          
          {/* الفوائد */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E4D2B] mb-6 flex items-center gap-2">
              <span className="text-[#53705B]">✨</span> الفوائد الصحية
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[#53705B] text-2xl mb-2 bg-[#FCFBF8] w-12 h-12 flex items-center justify-center rounded-full">🧠</span>
                <h4 className="font-bold text-[#1E4D2B] text-sm mb-1">يعزز التركيز</h4>
                <p className="text-gray-500 text-xs">ينشط الذاكرة والذهن.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[#53705B] text-2xl mb-2 bg-[#FCFBF8] w-12 h-12 flex items-center justify-center rounded-full">🛡️</span>
                <h4 className="font-bold text-[#1E4D2B] text-sm mb-1">يقوي المناعة</h4>
                <p className="text-gray-500 text-xs">غني بمضادات الأكسدة.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[#53705B] text-2xl mb-2 bg-[#FCFBF8] w-12 h-12 flex items-center justify-center rounded-full">✨</span>
                <h4 className="font-bold text-[#1E4D2B] text-sm mb-1">صحة الشعر</h4>
                <p className="text-gray-500 text-xs">يغذي الفروة ويقوي البصيلات.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[#53705B] text-2xl mb-2 bg-[#FCFBF8] w-12 h-12 flex items-center justify-center rounded-full">🌿</span>
                <h4 className="font-bold text-[#1E4D2B] text-sm mb-1">يخفف التوتر</h4>
                <p className="text-gray-500 text-xs">رائحته العطرية تهدئ الأعصاب.</p>
              </div>
              <div className="col-span-2 bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 flex flex-row items-center gap-4 text-right hover:-translate-y-1 transition-transform duration-300">
                 <span className="text-[#53705B] text-2xl bg-[#FCFBF8] w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">🍃</span>
                 <div>
                     <h4 className="font-bold text-[#1E4D2B] text-sm mb-1">يحسن الهضم</h4>
                     <p className="text-gray-500 text-xs">يساعد على تخفيف عسر الهضم والانتفاخات لراحة تدوم طويلاً.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* طريقة التحضير */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E4D2B] mb-6 flex items-center gap-2">
              <span className="text-[#53705B]">☕</span> طريقة التحضير
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 relative pt-6 hover:-translate-y-1 transition-transform duration-300">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#53705B] text-white flex items-center justify-center text-sm font-bold border-4 border-[#FCFBF8]">1</span>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">ضع ملعقة صغيرة من أوراق الروزماري في كوب.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 relative pt-6 hover:-translate-y-1 transition-transform duration-300">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#53705B] text-white flex items-center justify-center text-sm font-bold border-4 border-[#FCFBF8]">2</span>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">أضف ماء ساخن (90-95 درجة مئوية) للكوب.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 relative pt-6 hover:-translate-y-1 transition-transform duration-300">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#53705B] text-white flex items-center justify-center text-sm font-bold border-4 border-[#FCFBF8]">3</span>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">قم بتغطيته واتركه ينقع لمدة 5-7 دقائق للحفاظ على الزيوت العطرية.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8EDE6]/50 relative pt-6 hover:-translate-y-1 transition-transform duration-300">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#53705B] text-white flex items-center justify-center text-sm font-bold border-4 border-[#FCFBF8]">4</span>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">قم بتصفيته واستمتع بمشروبك، ويمكن إضافة الليمون أو العسل.</p>
              </div>
            </div>
            
            <div className="bg-[#53705B]/10 p-4 rounded-2xl border border-[#53705B]/20 flex items-start gap-3">
              <span className="text-xl">💡</span>
              <p className="text-sm text-[#1E4D2B] font-medium leading-relaxed">
                <strong>نصيحة ذهبية:</strong> تناول كوب من شاي الروزماري في الصباح أو أثناء المذاكرة والعمل يعزز التركيز والنشاط الذهني بشكل ملحوظ. كما يمكن استخدامه كغسول بارد للشعر بعد الاستحمام!
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}