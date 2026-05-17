"use client";

import Link from 'next/link';
import Image from 'next/image'; // استدعاء وسم الصور الذكي من Next.js
import { motion } from 'framer-motion';

export default function HerbsPage() {
  // مصفوفة البيانات بأسماء الصور الصحيحة والأسعار المحدثة من الجدول
  const herbsProducts = [
    {
      id: "chamomile",
      title: "أزهار البابونج",
      description: "مهدئ طبيعي للأعصاب ويساعد على نوم عميق ومريح.",
      price: "٥٥ ج.م",
      image: "/chamomile.png", // تأكدي إن الاسم مطابق في فولدر public
      link: "/product/chamomile"
    },
    {
      id: "lavender",
      title: "أزهار اللافندر",
      description: "تساعد على الاسترخاء، تقليل التوتر، وتحسين الحالة المزاجية.",
      price: "٥٠ ج.م",
      image: "/lavender.png", // تأكدي إن الاسم مطابق في فولدر public
      link: "/product/lavender"
    },
    {
      id: "rosemary",
      title: "أعشاب الروزماري",
      description: "منشط للذاكرة ومفيد جداً لصحة الجهاز الهضمي والنشاط.",
      price: "٢٣ ج.م",
      image: "/rosemary.png", // تأكدي إن الاسم مطابق في فولدر public
      link: "/product/rosemary"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FCFBF8] font-sans py-20 px-6" dir="rtl">
      
      {/* الجزء العلوي: العنوان والوصف الأساسي */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <Link href="/" className="text-sm text-gray-400 hover:text-[#1E4D2B] transition-colors mb-4 inline-block">
          &rarr; العودة للصفحة الرئيسية
        </Link>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#1E4D2B] mb-4 font-serif"
        >
          الأعشاب الطبيعية
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        >
          مشروبات عشبية نقية من خير طبيعة سيناء، مقطوفة بعناية لراحتك.
        </motion.p>
      </div>

      {/* شبكة المنتجات (الكروت الثلاثة) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {herbsProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#F3EFEA] flex flex-col justify-between group"
          >
            {/* التعديل هنا: غلفنا بوكس الصورة بـ Link عشان يقبل الضغط وينقل لصفحة المنتج */}
            <Link 
              href={product.link} 
              className="w-full h-72 bg-[#F9F7F3] rounded-2xl mb-6 overflow-hidden relative border border-[#E8EDE6] block"
            >
              <Image 
                src={product.image} 
                alt={product.title} 
                width={500} // أبعاد مناسبة للضغط والتحميل فائق السرعة
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>

            {/* تفاصيل المنتج والأسعار */}
            <div className="flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-[#1E4D2B] mb-3 group-hover:text-[#8A8B57] transition-colors">
                {product.title}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between border-t border-[#F3EFEA] pt-4 mt-auto">
                <span className="text-xl font-bold text-[#1E4D2B] font-serif">
                  {product.price}
                </span>
                <Link 
                  href={product.link}
                  className="text-sm font-semibold text-[#8A8B57] group-hover:text-[#1E4D2B] transition-colors flex items-center gap-1"
                >
                  عرض التفاصيل <span className="text-xs">&larr;</span>
                </Link>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </main>
  );
}