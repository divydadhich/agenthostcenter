import { useState } from "react";
import { useNavigate } from "react-router-dom";

const requests = Array.from({ length: 12 }).map((_, i) => ({
  id: 1000 + i,
  name: `User ${i + 1}`,
}));

export default function RequestsList() {
  const navigate = useNavigate();
  const [data, setData] = useState(requests);

  const handleRemove = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

      {/* HEADER (SAFE + RESPONSIVE) */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-[430px] h-14 px-3 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-semibold shrink-0"
          >
            &lt;
          </button>

          <h1 className="text-base font-semibold truncate">
            Requests
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="text-xl shrink-0"
          >
            ✕
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-[430px] px-3 py-4 space-y-3">

        {data.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              shadow-md
              rounded-xl
              p-3
              flex
              items-center
              gap-2
            "
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-base shrink-0">
              👤
            </div>

            {/* Name + ID */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">
                {item.name}
              </p>
              <p className="text-[11px] text-gray-500 truncate">
                ID: {item.id}
              </p>
            </div>

            {/* ACTIONS */}
            <div
              className="
                flex
                gap-1
                shrink-0
                max-[340px]:flex-col
                max-[340px]:gap-1
              "
            >
              <button
                onClick={() => handleRemove(item.id)}
                className="
                  px-2
                  h-7
                  rounded-full
                  bg-gray-100
                  text-gray-700
                  text-[11px]
                  font-medium
                  active:scale-95
                  whitespace-nowrap
                "
              >
                Ignore
              </button>

              <button
                onClick={() => handleRemove(item.id)}
                className="
                  px-2
                  h-7
                  rounded-full
                  bg-green-500
                  text-white
                  text-[11px]
                  font-medium
                  active:scale-95
                  whitespace-nowrap
                "
              >
                Accept
              </button>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <p className="text-center text-gray-400 text-sm mt-10">
            No pending requests
          </p>
        )}
      </main>
    </div>
  );
}
