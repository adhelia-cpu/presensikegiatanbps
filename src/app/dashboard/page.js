import { Camera, QrCode, MapPin, Home, History, User } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto shadow-2xl relative overflow-hidden">
      
      {/* 1. Header Biru */}
      <div className="bg-[#5D7BFF] p-6 pt-10 pb-16 rounded-b-[40px]">
        <div className="flex flex-row items-center justify-center text-white space-y-2">
          <div className="bg-white/20 p-2 rounded-full">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">Logo</span>
            </div>
          </div>
          <h1 className="font-black italic tracking-tighter text-xl">PRESENSI.ID</h1>
        </div>
      </div>

      {/* 2. Konten Utama */}
      <div className="px-6 -mt-8 flex-1">
        {/* Teks Sambutan */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            Halo! Selamat Pagi<br />
            <span className="text-gray-600">(Nama User)</span>
          </h2>
        </div>

        {/* 3. Barisan Tombol Menu Hijau */}
        <div className="space-y-4">
          {/* Tombol Pindai QR */}
          <button className="w-full bg-[#4ADE80] hover:bg-gradient-to-r from-green-400 to-green-500 text-white p-5 rounded-xl flex items-center space-x-4 shadow-lg transition-transform active:scale-95">
            <div className="bg-white/20 p-2 rounded-lg">
              <Camera size={32} />
            </div>
            <span className="font-bold text-lg">Pindai QR Kode</span>
          </button>

          {/* Tombol Tampilkan QR */}
          <button className="w-full bg-[#4ADE80] hover:bg-green-500 text-white p-5 rounded-xl flex items-center space-x-4 shadow-lg transition-transform active:scale-95">
            <div className="bg-white/20 p-2 rounded-lg">
              <QrCode size={32} />
            </div>
            <span className="font-bold text-lg text-left">Tampilkan QR<br/>Kode Saya</span>
          </button>

          {/* Tombol Lokasi */}
          <button className="w-full bg-[#4ADE80] hover:bg-green-500 text-white p-5 rounded-xl flex items-center space-x-4 shadow-lg transition-transform active:scale-95">
            <div className="bg-white/20 p-2 rounded-lg">
              <MapPin size={32} />
            </div>
            <span className="font-bold text-lg">Presensi Lokasi</span>
          </button>
        </div>
      </div>

      {/* 4. Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#5D7BFF]/90 backdrop-blur-md p-4 flex justify-around items-center rounded-t-[30px] shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <Home className="text-white drop-shadow-md" size={28} />
        <History className="text-white/50 hover:text-white transition-colors" size={28} />
        <User className="text-white/50 hover:text-white transition-colors" size={28} />
      </div>
      
    </div>
  );
}