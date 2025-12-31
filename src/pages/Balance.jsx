import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Landmark } from "lucide-react";

export default function Balance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
     <div className="h-14 px-4 flex items-center justify-between bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white">
  <button
    onClick={() => navigate(-1)}
    className="text-2xl font-semibold"
  >
    &lt;
  </button>

  <h1 className="text-lg font-semibold">Balance</h1>

  <button
    onClick={() => navigate(-1)}
    className="text-2xl"
  >
    ✕
  </button>
</div>


      {/* CONTENT */}
      <main className="max-w-[430px] mx-auto px-4 pb-10">

        {/* BALANCE CARD */}
        <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#7b5cff] to-[#6a7cff] p-6 text-white shadow-md">
          <h2 className="text-4xl font-bold">$0</h2>
          <p className="text-white/80 mt-2 text-sm">
            Wallet Balance · USD
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-3 gap-4 mt-6">

          {/* Exchange */}
          <button className="bg-white rounded-2xl p-4 shadow-md active:scale-95 transition">
            <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-yellow-100">
              🪙
            </div>
            <p className="font-semibold text-sm">Exchange</p>
            <p className="text-xs text-gray-400">Convert coins</p>
          </button>

          {/* Transfer */}
          <button className="bg-white rounded-2xl p-4 shadow-md active:scale-95 transition">
            <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-blue-100">
              <Mail size={18} />
            </div>
            <p className="font-semibold text-sm">Transfer</p>
            <p className="text-xs text-gray-400">Send money</p>
          </button>

          {/* Withdraw */}
          <button className="bg-white rounded-2xl p-4 shadow-md active:scale-95 transition">
            <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-indigo-100">
              <Landmark size={18} />
            </div>
            <p className="font-semibold text-sm">Withdraw</p>
            <p className="text-xs text-gray-400">Bank withdrawal</p>
          </button>
        </div>

        {/* RECENT ACTIVITY */}
        <h3 className="mt-8 mb-3 text-base font-semibold">
          Recent Activity
        </h3>

        <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center justify-center text-center">
          <div className="text-gray-300 text-5xl mb-4">⏳</div>
          <p className="font-semibold">No records yet</p>
          <p className="text-sm text-gray-400 mt-1">
            Make your first transfer
          </p>
        </div>
      </main>
    </div>
  );
}
