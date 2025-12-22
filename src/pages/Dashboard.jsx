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
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[430px] p-4">

        {/* PROFILE */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-4 flex items-center gap-4 mb-6 shadow-md">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            👤
          </div>
          <div className="flex-1 ">
            <h2 className="text-lg font-bold text-gray-900">
          HT=Heaven place
            </h2>
            <p className="text-sm text-gray-700">ID: 1</p>
          </div>
          <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
            AGENT
          </span>
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-2 gap-4">
          <MenuCard icon={<Wallet />} label="Balance" path="/balance" bg="bg-orange-400" />
          <MenuCard icon={<BarChart3 />} label="My Work" path="/work" bg="bg-blue-400" />
          <MenuCard icon={<PenTool />} label="Request" path="/request" bg="bg-green-400" />
          <MenuCard icon={<Users />} label="Team Bills" path="/team-bills" bg="bg-cyan-500" />
          <MenuCard icon={<FileText />} label="Members List" path="/members" bg="bg-emerald-400" />
          <MenuCard icon={<Mail />} label="Invite" path="/invite" bg="bg-pink-400" />
          <MenuCard icon={<Gift />} label="Host Reward" path="/host-reward" bg="bg-yellow-400" />
          <MenuCard icon={<Trophy />} label="Agent Reward" path="/agent-reward" bg="bg-purple-500" />
        </div>
      </div>
    </div>
  );
}
