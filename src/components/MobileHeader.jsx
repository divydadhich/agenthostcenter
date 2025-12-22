import { useNavigate } from "react-router-dom";

export default function MobileHeader({ title }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="h-14 px-4 flex items-center justify-between bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white">
  <button
    onClick={() => navigate(-1)}
    className="text-2xl font-semibold"
  >
    &lt;
  </button>

  <h1 className="text-lg font-semibold">Agent Reward</h1>

  <button
    onClick={() => navigate(-1)}
    className="text-2xl"
  >
    ✕
  </button>
</div>

    </header>
  );
}
