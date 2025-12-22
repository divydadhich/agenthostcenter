import { useNavigate } from "react-router-dom";

export default function MenuCard({ icon, label, path, bg }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur border border-white shadow-md active:scale-95 transition"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl ${bg}`}
      >
        {icon}
      </div>
      <span className="text-lg font-semibold text-gray-800">
        {label}
      </span>
    </button>
  );
}
