import { ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Invite() {
  const navigate = useNavigate();
  const [hostId, setHostId] = useState("");

  return (
    <div className="min-h-screen bg-[#eaf0ff]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-gradient-to-b from-[#1c1b3a] to-[#14142b]">
        <div className="max-w-[430px] mx-auto px-4 h-14 flex items-center justify-between text-white">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={22} />
          </button>
          <h1 className="text-lg font-semibold">Invite Members</h1>
          <button>
            <X size={22} />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <main className="max-w-[430px] mx-auto px-4 pt-6 pb-12">
        {/* STEPS */}
        {/* <div className="space-y-4 text-[15px] text-gray-800">
          <p>
            <span className="font-semibold mr-1">1.</span>
            Download 4Party app.
          </p>
          <p>
            <span className="font-semibold mr-1">2.</span>
            My Page (Host Center).
          </p>
          <p>
            <span className="font-semibold mr-1">3.</span>
            Enter the team ID to apply for joining.
          </p>
        </div> */}

        {/* HOST CENTER CARD */}
        <div className="mt-6 bg-white rounded-2xl p-4 shadow">
          <p className="font-semibold mb-2 text-gray-800">
            Host account:
          </p>

          <input
            value={hostId}
            onChange={(e) => setHostId(e.target.value)}
            placeholder="Please enter an Host account"
            className="w-full h-12 rounded-xl bg-gray-100 px-4 outline-none text-sm"
          />

          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            Enter your proxy account, and once the anchor
            application is approved, you will become a signed
            anchor.
          </p>
        </div>

        {/* APPLY BUTTON */}
        <button
          className="mt-10 w-full h-14 rounded-full bg-gradient-to-r from-[#6f2cff] to-[#8a4bff] text-white text-lg font-semibold shadow-lg active:scale-95"
        >
          Apply
        </button>
      </main>
    </div>
  );
}
