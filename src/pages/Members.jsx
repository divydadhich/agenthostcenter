import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const membersData = [
  {
    name: "trk",
    id: "12610181",
    time: "0s",
    coins: "0",
    month: "2025-12",
    role: "Agent",
    roleColor: "bg-red-400",
  },
  {
    name: "Rocky",
    id: "982102",
    time: "20s",
    coins: "15",
    month: "2025-11",
    role: "Agent",
    roleColor: "bg-orange-400",
  },
];

export default function Members() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white">

<div className="h-14 px-4 flex items-center justify-between bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white">
  <button
    onClick={() => navigate(-1)}
    className="text-2xl font-semibold"
  >
    &lt;
  </button>

  <h1 className="text-lg font-semibold">Members List</h1>

  <button
    onClick={() => navigate(-1)}
    className="text-2xl"
  >
    ✕
  </button>
</div>


      {/* CONTENT */}
      <main className="max-w-[430px] mx-auto px-4 pt-4 pb-16 ">

        {/* SEARCH */}
        <div className="relative mb-4 shadow-md rounded-2xl">
          <Search
            size={18}
            className="absolute  left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Please enter an account"
            className="w-full h-12 rounded-full pl-12 pr-4 text-sm outline-none"
          />
        </div>

        {/* MEMBERS LIST */}
        <div className="space-y-4">
          {membersData.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-md flex gap-4"
            >
              {/* AVATAR */}
              <div className="w-14 h-14 rounded-full bg-purple-200 flex-shrink-0" />

              {/* INFO */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {m.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      ID: {m.id}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 text-xs text-white rounded-full ${m.roleColor}`}
                  >
                    {m.role}
                  </span>
                </div>

                {/* STATS */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-semibold">
                      ⏱ {m.time}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs font-semibold">
                      💰 {m.coins}
                    </span>
                  </div>

                  <span className="text-sm text-gray-400">
                    {m.month}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        <button className="w-full mt-10 text-blue-400 text-sm font-semibold">
          Load more
        </button>
      </main>
    </div>
  );
}
