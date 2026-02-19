"use client";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Di sini nanti bisa ditambah validasi username/password
    // Untuk sekarang, kita langsung pindahkan ke dashboard
    router.push("/dashboard");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-100 p-10">
      <div className="bg-white w-full max-w-sm p-8 rounded-[30px] shadow-xl flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-sm">
        <div className="mb-6"> 
          <img 
            src="/logobps2.png" 
            alt="Logo BPS"
            className="w-36 h-auto drop-shadow-xl" 
          />
        </div>
        <h2 className="text-gray-600 text-sm font-bold tracking-widest mb-2">
          BADAN PUSAT STATISTIK
        </h2>

        <h1 className="text-blue-600 text-base font-black tracking-[0.2em] mb-8 font-sans text-center">
          SELAMAT DATANG
        </h1>

        <input 
          type="text" 
          placeholder="Username" 
          className="w-full bg-white border border-black-300 rounded-full px-6 py-4 mb-4 focus:outline-none font-bold placeholder:text-gray-400 shadow-sm"
        />

        <input 
          type="password" 
          placeholder="Password" 
          className="w-full bg-white border border-black-300 rounded-full px-6 py-4 mb-8 focus:outline-none font-bold placeholder:text-gray-400 shadow-sm"
        />

       <button 
          onClick={handleLogin}
          className="bg-[#1e5eff] hover:bg-blue-700 text-white font-black py-3 px-12 rounded-full text-lg mb-4 shadow-lg transition-transform active:scale-95 w-full">
          LOGIN
        </button>

        <p className="font-bold text-gray-700">
          Belum Punya Akun? <span className="underline cursor-pointer text-blue-600">Daftar</span>
        </p>

      </div>
      </div>
    </div>
  );
}