"use client"

import { useEffect, useState } from "react"

export default function ZallFashionStore() {

  const images = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="min-h-screen bg-slate-950 text-white" dir="rtl">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          {/* RIGHT LOGO */}
          <div className="text-5xl font-black tracking-tight bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-700 bg-clip-text text-transparent">
            ZคคᏝ
          </div>

          {/* CENTER MENU */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-white">

            <a href="#" className="hover:text-blue-400 transition">
              خانه
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              زنانه
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              مردانه
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              جدیدترین‌ها
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              تخفیف‌ها
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              برندها
            </a>

          </nav>

          {/* LEFT LOGIN */}
          <button className="bg-gradient-to-r from-blue-700 to-cyan-500 px-6 py-3 rounded-full text-white font-black shadow-lg hover:scale-105 transition">

            ورود / ثبت نام

          </button>

        </div>

      </header>

      {/* HERO */}
      <section className="pt-36 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* RIGHT CONTENT */}
          <div className="space-y-8 text-center md:text-right">

            <div className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-bold">
              کالکشن جدید 2026
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-tight">

              استایل جدیدت

              <span className="block mt-4 text-blue-400">
                از زال شروع میشه
              </span>

            </h1>

            <p className="text-blue-100 text-lg leading-9 max-w-xl">

              فروشگاه مدرن لباس با طراحی حرفه‌ای،
              استایل خاص و تجربه خرید متفاوت.

            </p>

            <div className="flex gap-5 justify-center md:justify-start">

              <button className="bg-gradient-to-r from-blue-700 to-cyan-500 px-8 py-4 rounded-2xl font-black hover:scale-105 transition">

                شروع خرید

              </button>

              <button className="border border-white/20 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition">

                کالکشن جدید

              </button>

            </div>

          </div>

          {/* LEFT SLIDER */}
          <div className="relative">

            <div className="h-[600px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">

              <img
                src="/image/boy.jpeg"
                alt="fashion"
                className="w-full h-full object-cover transition-all duration-1000"
              />

            </div>

            {/* DOTS */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

              {images.map((_, index) => (

                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    current === index
                      ? "bg-blue-400"
                      : "bg-white/40"
                  }`}
                />

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-black">
            دسته‌بندی‌ها
          </h2>

          <button className="text-blue-400 font-bold">
            مشاهده همه
          </button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            {
              title: "T-shirt",
              image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "مردانه",
              image:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "اکسسوری",
              image:
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "کفش",
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
            },

          ].map((item, index) => (

            <div
              key={index}
              className="group rounded-[30px] overflow-hidden bg-slate-900 border border-white/10 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="h-72 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-5 flex items-center justify-between">

                <h3 className="font-black text-xl">
                  {item.title}
                </h3>

                <span className="text-blue-400 font-bold">
                  →
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-black">
            محصولات محبوب
          </h2>

          <button className="text-blue-400 font-bold">
            مشاهده همه
          </button>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              title: "تیشرت کرمی نخ پنبه۲۸",
              price: "880,000",
              image: "/image/T-k.jpg"
               
            },

            {
              title: "تیشرت مشکی (با تخفیف ویژه محرم)",
              price: "900,000",
              image: "/image/T-siah.jpg"
                
            },

            {
              title: "تیشرت سفید نخ پنبه ۲۸",
              price: "880,000",
              image: "/image/T-s.jpg"
               
            },

            {
              title: "تیشرت آبی یخی نخ پنبه ۲۸",
              price: "850,000",
              image: "/image/T-ice.jpg"
                
            },

          ].map((product, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-[30px] overflow-hidden border border-white/10 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="h-80 overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-5">

                <h3 className="font-black text-xl">
                  {product.title}
                </h3>

                <p className="text-blue-400 font-black mt-3">
                  {product.price} تومان
                </p>

                <button className="w-full mt-5 bg-gradient-to-r from-blue-700 to-cyan-500 py-3 rounded-2xl font-bold hover:opacity-90 transition">
                  افزودن به سبد خرید
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950 py-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* RIGHT */}
          <div>

            <h2 className="text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
             ZคคᏝ 
            </h2>

            <p className="text-blue-100 mt-2 text-sm">
              فروشگاه مدرن لباس آنلاین
            </p>

          </div>

          {/* LEFT */}
          <div className="flex items-center gap-6 text-blue-100 font-bold">

            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Telegram
            </a>

            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Support
            </a>

            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

      </footer>

    </div>
  )
}
