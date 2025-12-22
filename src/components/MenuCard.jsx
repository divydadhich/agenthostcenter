import { useNavigate } from "react-router-dom";

export default function MenuCard({ icon, label, path, bg }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="
        w-full
        bg-white
        rounded-2xl
        p-3
        sm:p-4
        shadow
        flex
        items-center
        gap-3
        active:scale-95
        transition
      "
    >
      {/* Icon */}
      <div
        className={`
          ${bg}
          w-10 h-10
          sm:w-12 sm:h-12
          rounded-xl
          flex
          items-center
          justify-center
          text-white
          shrink-0
        `}
      >
        {icon}
      </div>

      {/* Label */}
      <span className="
        text-xs
        sm:text-sm
        font-semibold
        text-gray-800
        truncate
      ">
        {label}
      </span>
    </button>
  );
}
