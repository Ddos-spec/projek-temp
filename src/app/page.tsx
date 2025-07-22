import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Kursus <span className="text-green-600">Freeze Dry</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
                  Snack Sehat dan Praktis? Ikuti Kursus Freeze Dried Kami! Join the Trend!
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Apakah Anda siap untuk memasuki dunia teknologi makanan yang revolusioner? 
                  <strong> Teknologi Freeze Drying</strong> membuka pintu bagi peluang bisnis besar 
                  di industri snack sehat yang sedang booming.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20tertarik%20dengan%20kursus%20freeze%20drying"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-200 text-center"
                  >
                    Daftar Sekarang
                  </a>
                  <Link
                    href="/about"
                    className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors duration-200 text-center"
                  >
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🥗</div>
                      <h3 className="text-2xl font-bold text-gray-800">Freeze Dried Food</h3>
                      <p className="text-gray-600 mt-2">Teknologi Terdepan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Apa Yang Akan Anda Pelajari?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dalam kursus ini, Anda akan belajar dari para ahli di bidang freeze drying dan 
                mendapatkan wawasan mendalam tentang teknologi revolusioner ini.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teori Dasar</h3>
                <p className="text-gray-700">
                  Memahami prinsip-prinsip dasar teknologi freeze drying, 
                  pemilihan bahan, dan proses pembekuan yang optimal.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Praktik Langsung</h3>
                <p className="text-gray-700">
                  Demonstrasi praktis pengeringan primer dan sekunder, 
                  serta teknik-teknik advanced dalam freeze drying.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategi Bisnis</h3>
                <p className="text-gray-700">
                  Analisis pasar, strategi pemasaran, dan cara membangun 
                  bisnis snack sehat yang menguntungkan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Investasi Terbaik untuk Masa Depan Anda
            </h2>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="mb-8">
                <div className="text-gray-500 text-lg line-through mb-2">
                  Harga Normal: Rp 4.500.000
                </div>
                <div className="text-5xl font-bold text-green-600 mb-4">
                  Rp 2.500.000
                </div>
                <div className="text-red-600 font-semibold text-lg">
                  🔥 Diskon Spesial Pendaftaran Awal!
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  Jangan lewatkan kesempatan ini untuk menjadi bagian dari tren makanan sehat 
                  yang sedang meningkat. Tempat terbatas!
                </p>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20ingin%20mendaftar%20kursus%20dengan%20harga%20spesial%20Rp%202.500.000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-green-700 transition-colors duration-200 inline-block"
              >
                Daftar Sekarang via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mengapa Memilih Kami?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Instruktur Ahli</h3>
                <p className="text-gray-600">Belajar dari para ahli berpengalaman di bidang freeze drying</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Peralatan Modern</h3>
                <p className="text-gray-600">Akses ke peralatan freeze drying terbaru dan canggih</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Materi Lengkap</h3>
                <p className="text-gray-600">Kurikulum komprehensif dari teori hingga praktik bisnis</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Support Berkelanjutan</h3>
                <p className="text-gray-600">Dukungan dan konsultasi setelah kursus selesai</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Bergabunglah dengan Raja Freeze Dried dan mulai perjalanan Anda menuju sukses 
              di industri snack sehat yang terus berkembang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20tertarik%20dengan%20kursus%20freeze%20drying"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Hubungi via WhatsApp
              </a>
              <a
                href="https://shopee.co.id/rajafreezdriedfood"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                Lihat Produk di Shopee
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

