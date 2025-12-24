import { useNavigate } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import {
  Wallet,
  BarChart3,
  PenTool,
  Users,
  FileText,
  Mail,
  Gift,
  Trophy,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white">
      
      {/* HEADER – FULL WIDTH */}
      <div className="bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white">
        <div className="mx-auto max-w-[430px] h-14 flex items-center justify-between px-4">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl font-semibold"
          >
            &lt;
          </button>

          <h1 className="text-lg font-semibold">Agency</h1>

          <button
            onClick={() => navigate(-1)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-[430px] px-4 py-4">

        {/* PROFILE CARD */}
        <div className="
          bg-white/70
          backdrop-blur-lg
          rounded-2xl
          p-4
          flex
          items-center
          gap-3
          mb-6
          shadow-md
        ">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-200 flex items-center justify-center text-lg">
            👤
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-sm sm:text-lg font-bold text-gray-900 truncate">
              HT=Heaven place
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              ID: 1
            </p>
          </div>

          <span className="px-3 py-1 bg-blue-600 text-white text-[10px] sm:text-xs rounded-full whitespace-nowrap">
            AGENT
          </span>
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <MenuCard icon={<Wallet size={20} />} label="Balance" path="/balance" bg="bg-orange-400" />
          <MenuCard icon={<BarChart3 size={20} />} label="My Work" path="/work" bg="bg-blue-400" />
          <MenuCard icon={<PenTool size={20} />} label="Request" path="/request" bg="bg-green-400" />
          <MenuCard icon={<Users size={20} />} label="Team Bills" path="/team-bills" bg="bg-cyan-500" />
          <MenuCard icon={<FileText size={20} />} label="Members List" path="/members" bg="bg-emerald-400" />
          <MenuCard icon={<Mail size={20} />} label="Invite" path="/invite" bg="bg-pink-400" />
          <MenuCard icon={<Gift size={20} />} label="Host Reward" path="/host-reward" bg="bg-yellow-400" />
          <MenuCard icon={<Trophy size={20} />} label="Agent Reward" path="/agent-reward" bg="bg-purple-500" />
        </div>

      </div>
    </div>
  );
}
