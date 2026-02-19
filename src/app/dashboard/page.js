import { Camera, QrCode, MapPin, Home, History, User } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto shadow-2xl relative overflow-hidden">
      
      {/* 1. Header Biru */}
      <div className="bg-[#03A9F4] p-6 pt-6 pb-5 rounded-b-[20px]"> {/* pb-12 ditambah agar area biru lebih luas untuk teks */}
        <div className="flex justify-between items-center text-white mb-6">
          <div className="bg-white p-1.5 rounded-full shadow-sm">
            <img src="/logobps2.png" alt="Logo BPS" className="w-20 h-20 object-contain" />
          </div>
          <h1 className="font-black tracking-tighter text-xl">PRESENSI.ID</h1>
        </div>

        {/* 2. Teks Sambutan (Dipindahkan ke dalam header biru agar rapih & kontras) */}
        <div className="text-white mt-4"> 
          <h2 className="text-2xl font-bold leading-tight">
            Halo! Selamat Pagi
          </h2>
        <div className="text-white mt-1"> 
          <p className="text-lg font-bold leading-tight opacity-80">
            Adel
          </p>
        </div>
        </div>
      </div>

      {/* 3. Barisan Tombol Menu (Diberi mt-10 untuk menurunkan posisi tombol) */}
      <div className="px-6 mt-10 flex-1 space-y-4">
        {/* Tombol Pindai QR */}
        <button className="w-full bg-[#93B5CA] hover:bg-gradient-to-r from-blue-400 to-green-500 text-white p-5 rounded-xl flex items-center space-x-4 shadow-lg transition-transform active:scale-95">
          <div className="bg-white/20 p-2 rounded-lg">
            <Camera size={32} />
          </div>
          <span className="font-bold text-lg">Pindai QR Kode</span>
        </button>

        {/* Tombol Tampilkan QR */}
        <button className="w-full bg-[#93B5CA] hover:bg-gradient-to-r from-blue-400 to-green-500 text-white p-5 rounded-xl flex items-center space-x-4 shadow-lg transition-transform active:scale-95">
          <div className="bg-white/20 p-2 rounded-lg">
            <QrCode size={32} />
          </div>
          <span className="font-bold text-lg text-left">Tampilkan QR Kode Saya</span>
        </button>

        {/* Tombol Lokasi */}
        <button className="w-full bg-[#93B5CA] hover:bg-gradient-to-r from-blue-400 to-green-500 text-white p-5 rounded-xl flex items-center space-x-4 shadow-lg transition-transform active:scale-95">
          <div className="bg-white/20 p-2 rounded-lg">
            <MapPin size={32} />
          </div>
          <span className="font-bold text-lg">Presensi Lokasi</span>
        </button>
      </div>

      {/* 4. Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#03A9F4]/90 backdrop-blur-md p-3 flex justify-around items-center shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <Home className="text-white drop-shadow-md" size={30} />
        <History className="text-white/50 hover:text-white transition-colors" size={30} />
        <User className="text-white/50 hover:text-white transition-colors" size={30} />
      </div>
      
    </div>
  );
}