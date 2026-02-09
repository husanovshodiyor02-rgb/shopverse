"use client";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        {/* --- 1. Rasm va Animatsiya --- */}
        <div className="relative">
          {/* Orqa fondagi katta raqam (dekoratsiya) */}
          <h1 className="absolute top-30 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] font-extrabold text-gray-200 select-none z-0">
            404
          </h1>

          {/* Old plandagi 3D rasm */}
          <div className="relative z-10 animate-bounce-slow">
            <img
              src="/as.jfif"
              alt="Lost Astronaut"
              className="w-164 h-64 mx-auto object-contain drop-shadow-2xl absolute -top-50"
            />
          </div>
        </div>

        {/* --- 2. Matnlar --- */}
        <div className="relative z-10">
          <h2 className="mt-15 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Voy! Sahifa topilmadi
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Siz qidirayotgan sahifa o‘chirilgan, nomi o‘zgargan yoki vaqtincha
            mavjud emas.
          </p>
        </div>

        {/* --- 3. Tugmalar --- */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          {/* Bosh sahifaga qaytish */}
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Bosh sahifa
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* Orqaga qaytish yoki Bog'lanish */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
          >
            Biz bilan bog‘lanish
          </Link>
        </div>
      </div>

      {/* --- Maxsus CSS animatsiya uchun (Tailwind Configda bo'lmasa) --- */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
