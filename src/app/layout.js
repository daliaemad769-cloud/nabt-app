import Header from '../components/Header';
import Footer from '../components/Footer'; // التعديل الجديد هنا: سحبنا الفوتر
import './globals.css';

export const metadata = {
  title: 'Nabt',
  description: 'منتجات سيناء الطبيعية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        {/* الهيدر فوق خالص دايماً */}
        <Header />
        
        {/* المحتوى الفعلي لكل الصفحات */}
        {children}
        
        {/* الفوتر تحت خالص دايماً في كل صفحات الموقع */}
        <Footer />
      </body>
    </html>
  );
}