import MobileHeader from "../components/MobileHeader";

export default function Request() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MobileHeader title="Request" />

      <main className="max-w-[430px] mx-auto px-4 py-6">
        <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold active:scale-95">
          Create Request
        </button>
      </main>
    </div>
  );
}
