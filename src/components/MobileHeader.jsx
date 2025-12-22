import { useNavigate } from "react-router-dom";

export default function MobileHeader({ title }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-[430px] mx-auto px-4 h-14 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-xl font-semibold active:scale-95"
        >
          ←
        </button>

        <h1 className="text-base font-semibold truncate">
          {title}
        </h1>
      </div>
    </header>
  );
}
