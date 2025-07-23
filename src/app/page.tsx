import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Data produk sekarang ada link marketplace-nya
const products = [
  {
    name: "Durian",
    description: "Snack yang terbuat dari buah durian yang di proses menggunakan teknologi vacuum freeze dried menjadikan solusi makan durian dengan tanpa bau yang menyengat tetapi dengan rasa yang sama dan nutrisinya yang terjaga.",
    image: "/durian.jpeg", // Ganti dengan path gambar asli di folder /public
    shopeeUrl: "#", // Ganti dengan link Shopee
    tokopediaUrl: "#", // Ganti dengan link Tokopedia
  },
  {
    name: "Manggis",
    description: "Snack yang terbuat dari manggis asli yang terbaik, sudah di olah dengan menggunakan proses vacuum freeze dried tanpa merusak rasa dan nutrisi yang terkandung pada buah.",
    image: "/manggis.jpeg",
    shopeeUrl: "#",
    tokopediaUrl: "#",
  },
  {
    name: "Apel",
    description: "Snack yang terbuat dari apel asli terbaik yang diolah di proses menggunakan teknologi vacuum freeze dried, dengan proses ini nutrisi yang tersimpan pada buah tidak rusak dan rasa terjamin keasliannya.",
    image: "/apel.jpg",
    shopeeUrl: "#",
    tokopediaUrl: "#",
  },
  {
    name: "Mangga",
    description: "Buah mangga asli yang terbaik dan manis diolah menggunakan teknologi vacuum freeze, kandungan serat dan nutrisi pun terjaga dan makanan menjadi mudah untuk dibawa.",
    image: "/mangga.jpg",
    shopeeUrl: "#",
    tokopediaUrl: "#",
  },
  {
    name: "pisang",
    description: "pisang pilihan dengan rasa manis otentik, diolah sempurna untuk menjaga tekstur dan aroma khasnya. Pilihan tepat untuk camilan eksotis kapan saja.",
    image: "/pisang.jpg",
    shopeeUrl: "#",
    tokopediaUrl: "#",
  },
  {
    name: "manga jus bar",
    description: "Nikmati manisnya manga jus bar asli dalam setiap gigitan renyah. Diproses dengan cermat untuk mengunci semua kebaikan buah tropis favorit Anda.",
    image: "/manggajusbar.jpg",
    shopeeUrl: "#",
    tokopediaUrl: "#",
  },
];

// --- Kumpulan Ikon ---
const StarIcon = () => (
  <svg className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ShopeeIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.23 4.416c.35-.61.033-1.386-.677-1.593a1.437 1.437 0 00-1.593.677L3.54 18.284c-.35.61-.033 1.386.677 1.593.23.068.47.102.703.102a1.437 1.437 0 001.32-1.023l7.42-13.024a1.437 1.437 0 00-.933-1.923zM21.17 8.116a1.437 1.437 0 00-1.593.677L12.158 23.58c-.35.61-.033 1.386.677 1.593.23.068.47.102.703.102a1.437 1.437 0 001.32-1.023l7.42-13.024a1.437 1.437 0 00-.933-1.923zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6z" />
    </svg>
);

const TokopediaIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2v-8zm0 10h2v2h-2v-2z" />
    </svg>
);


export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section
          className="relative py-24 sm:py-32 flex items-center"
          style={{ backgroundImage: "url('/heroputih.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold text-gray-600">
                  Jasa Vacuum Freeze Dried Pertama di Indonesia
                </p>
                <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight uppercase text-gray-900">
                  Freeze Dried <span className="text-orange-500">INDONESIA</span>
                </h1>
                <p className="mt-6 text-xl text-gray-700">
                  Anda sedang mencari pesanan khusus untuk makanan Freeze Dried?
                </p>
              </div>
              <div className="w-full h-80 relative rounded-2xl overflow-hidden">
                <Image src="/fotoawalhero.png" alt="Produk Freeze Dried Unggulan" layout="fill" objectFit="cover" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* Penjelasan "Apa itu Vacuum Freeze Dried?" */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
             <h2 className="text-4xl md:text-5xl font-bold">Apa itu Vacuum Freeze Dried?</h2>
             <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 mb-8"></div>
             <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Pengeringan beku adalah proses dehidrasi makanan beku di bawah vakum sehingga kadar air berubah langsung dari bentuk padat menjadi gas tanpa harus mengalami keadaan cair perantara melalui sublimasi. Dalam proses ini, makanan kering beku mempertahankan ukuran dan bentuk aslinya dengan kerusakan sel yang minimal. Menghilangkan kelembapan mencegah produk memburuk pada suhu kamar.
             </p>
          </div>
          {/* Keunggulan Section */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
                 <p className="text-gray-400">Tempat untuk Slider Foto</p>
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    <span className="block w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span className="block w-3 h-3 bg-gray-400 rounded-full"></span>
                    <span className="block w-3 h-3 bg-gray-400 rounded-full"></span>
                 </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Keunggulan Proses Olahan Makanan</h3>
                <ul className="space-y-6">
                  <li className="flex items-start"><StarIcon /><div><h4 className="font-semibold text-lg">Kualitas Produk Lebih Stabil</h4><p className="text-gray-600">Tidak terjadi perubahan aroma, warna, dan unsur organoleptik lainnya.</p></div></li>
                  <li className="flex items-start"><StarIcon /><div><h4 className="font-semibold text-lg">Struktur Bahan Tetap Terjaga</h4><p className="text-gray-600">Tidak terjadi pengerutan atau perubahan bentuk struktur bahan.</p></div></li>
                  <li className="flex items-start"><StarIcon /><div><h4 className="font-semibold text-lg">Daya Rehidrasi Meningkat</h4><p className="text-gray-600">Dapat kembali ke sifat fisik yang hampir sama dengan sebelum pengeringan.</p></div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Product Olahan Kami</h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.name} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                  <div className="relative w-full h-64">
                    <Image src={product.image} alt={`Gambar ${product.name}`} layout="fill" objectFit="cover" unoptimized />
                  </div>
                  <div className="p-6 text-left flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-orange-500">{product.name}</h3>
                    <p className="mt-4 text-gray-600 flex-grow">{product.description}</p>
                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center space-x-4">
                        <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white bg-orange-600 rounded-md hover:bg-orange-700 transition-colors">
                            <ShopeeIcon /> Shopee
                        </a>
                        <a href={product.tokopediaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
                            <TokopediaIcon /> Tokopedia
                        </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mengapa Memilih Kami Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Mengapa Memilih Kami?</h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">Mesin Terbaik</h3>
                <p className="mt-4 text-gray-600">Menggunakan mesin terbaik dalam proses pengolahan dan dijamin kebersihannya.</p>
              </div>
               <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">Terpercaya</h3>
                <p className="mt-4 text-gray-600">Telah melayani konsumen dari berbagai daerah di Indonesia dan tersertifikasi P-IRT.</p>
              </div>
               <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">Beragam Pilihan</h3>
                <p className="mt-4 text-gray-600">Menerima berbagai pilihan produk atau jasa freeze dried food sesuai kebutuhan Anda.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ultimate CTA Section - Kursus */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center bg-gray-800 text-white p-12 rounded-2xl">
            <h2 className="text-4xl font-extrabold">🚀 Buka Revolusi Bisnis Snack Sehat Anda!</h2>
            <p className="mt-4 text-2xl font-semibold">
              Kuasai Teknologi Freeze Drying dan Jadilah Pelopor di Industri yang Sedang Meledak!
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
              Ini bukan sekadar kursus. Ini adalah tiket Anda untuk menciptakan produk inovatif, membangun brand yang kuat, dan meraih keuntungan di pasar makanan sehat. Dari teori fundamental hingga strategi bisnis yang terbukti, kami siapkan Anda menjadi ahli. ✨
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20siap%20mengubah%20peluang%20menjadi%20keuntungan%20dengan%20kursus%20Freeze%20Drying."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-orange-600 transition-colors transform hover:scale-105"
            >
              Daftar Sekarang Juga! 👉
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}