import Image from "next/image"; 
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#769BFF] p-10">
      <div className="flex flex-col items-center w-full max-w-sm">
        <div className="mb-6">
          <img 
            src="/logobps2.png" 
            alt="Logo BPS"
            className="w-40 h-auto drop-shadow-md" 
          />
        </div>
        <h1 className="text-white text-xl font-black tracking-widest mb-6 font-sans">
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

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-full text-lg mb-6 shadow-lg transition-all w-full">
          Login
        </button>

        <p className="font-bold text-gray-700">
          Belum Punya Akun? <span className="underline cursor-pointer text-blue-600">Daftar</span>
        </p>

      </div>
    </div>
  );
}