import MobileHeader from "../components/MobileHeader";

export default function AgentReward() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MobileHeader title="Agent Reward" />

      <main className="max-w-[430px] mx-auto px-4 py-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="font-semibold">Agent Points</p>
          <p className="text-2xl font-bold mt-2">0</p>
        </div>
      </main>
    </div>
  );
}
