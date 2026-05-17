"use client";

import Link from 'next/link';
import Image from 'next/image'; // استدعاء وسم الصور الذكي
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative bg-[#FCFBF8] font-sans" dir="rtl">
      
      {/* 1. قسم الصورة الأولى (حقل الزرع) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        {/* الصورة الذكية بدل الخلفية العادية */}
        <Image 
          src="/nabt-hero.jpg" 
          alt="نبت - الطبيعة" 
          fill 
          priority // مهم جداً عشان دي أول صورة بتظهر فبتحمل فوراً
          className="object-cover object-center" 
        />
        {/* تظليل أسود فوق الزرع */}
        <div className="absolute inset-0 bg-black/50 z-10"></div> 
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-8xl md:text-[130px] font-bold text-white mb-2 drop-shadow-2xl tracking-wide" 
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Nabt
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-lg md:text-2xl text-white/90 drop-shadow-md tracking-[0.3em] font-light uppercase mt-2"
          >
            Whispering nature to the world
          </motion.p>
        </div>
      </div>

      {/* 2. قسم الصورة التانية (المجات) - سحر النقلة الوهمية */}
      <div 
        className="relative z-10 h-screen w-full overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.6)]"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%)', 
          maskImage: 'linear-gradient(to bottom, transparent, black 25%)',
        }}
      >
        {/* الصورة الذكية بدل الخلفية العادية */}
        <Image 
          src="/logo..jpg" 
          alt="رشفة دافئة" 
          fill 
          className="object-cover object-center" 
        />
        
        <div className="absolute inset-0 bg-black/50 z-10"></div> 

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif drop-shadow-lg"
          >
            رشفة دافئة من قلب الطبيعة
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white/90 max-w-2xl text-xl md:text-2xl leading-relaxed drop-shadow-md mx-auto"
          >
            استكشفي عجائب الطبيعة السيناوية في كل رشفة من منتجاتنا النقية، واستمتعي بلحظات استرخاء حقيقية.
          </motion.p>
        </div>
      </div>

      {/* 3. قسم التصنيفات (الدوائر) */}
      <div className="relative z-20 bg-[#FCFBF8] py-32 px-6 w-full border-t border-[#F3EFEA]">
        <div className="max-w-7xl mx-auto text-center">
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#1E4D2B] mb-24 border-b-4 border-[#D4E0D0] pb-4 inline-block font-serif tracking-[0.2em] uppercase"
          >
            Discover Our Products
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-40">
            
            {/* زرار الأعشاب */}
            <Link href="/herbs" className="group flex flex-col items-center cursor-pointer">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 rounded-full bg-white border-4 border-[#F3EFEA] shadow-lg flex items-center justify-center overflow-hidden group-hover:border-[#1E4D2B] transition-colors duration-300 relative"
              >
                {/* الصورة الذكية جوه الدائرة */}
                <Image 
                  src="/11.png" 
                  alt="الأعشاب الطبيعية" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-[#1E4D2B] opacity-0 group-hover:opacity-10 transition-opacity z-10"></div>
              </motion.div>
              <h3 className="mt-10 text-3xl font-bold text-[#1E4D2B] group-hover:text-[#8A8B57] transition-colors">
                الأعشاب الطبيعية
              </h3>
            </Link>

            {/* زرار الزيوت */}
            <Link href="/oils" className="group flex flex-col items-center cursor-pointer">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 rounded-full bg-white border-4 border-[#F3EFEA] shadow-lg flex items-center justify-center overflow-hidden group-hover:border-[#1E4D2B] transition-colors duration-300 relative"
              >
                {/* الصورة الذكية جوه الدائرة */}
                <Image 
                  src="/12.png" 
                  alt="الزيوت والعناية" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-[#1E4D2B] opacity-0 group-hover:opacity-10 transition-opacity z-10"></div>
              </motion.div>
              <h3 className="mt-10 text-3xl font-bold text-[#1E4D2B] group-hover:text-[#8A8B57] transition-colors">
                الزيوت والعناية
              </h3>
            </Link>
            
          </div>
        </div>
      </div>

    </main>
  );
}