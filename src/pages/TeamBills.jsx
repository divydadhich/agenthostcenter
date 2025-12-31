import MobileHeader from "../components/MobileHeader";

export default function TeamBills() {
  return (
    <div className="min-h-screen bg-white">
      <MobileHeader title="Team Bills" />

      <main className="max-w-[430px] mx-auto px-4 py-6 space-y-3">
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <p className="font-semibold">This Month</p>
          <p className="text-gray-500 text-sm">No records</p>
        </div>
      </main>
    </div>
  );
}
