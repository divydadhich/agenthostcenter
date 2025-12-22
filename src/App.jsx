import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Balance from "./pages/Balance";
import MyWork from "./pages/MyWork";
import Request from "./pages/Request";
import TeamBills from "./pages/TeamBills";
import Members from "./pages/Members";
import Invite from "./pages/Invite";
import HostReward from "./pages/HostReward";
import AgentReward from "./pages/AgentReward";

export default function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Dashboard />} />

      {/* Menu Pages */}
      <Route path="/balance" element={<Balance />} />
      <Route path="/work" element={<MyWork />} />
      <Route path="/request" element={<Request />} />
      <Route path="/team-bills" element={<TeamBills />} />
      <Route path="/members" element={<Members />} />
      <Route path="/invite" element={<Invite />} />
      <Route path="/host-reward" element={<HostReward />} />
      <Route path="/agent-reward" element={<AgentReward />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
