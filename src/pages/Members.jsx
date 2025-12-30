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
      <main className="max-w-[430px] mx-auto px-4 py-4 pb-20">

        {/* SEARCH */}
        <div className="relative mb-5">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search member"
            className="
              w-full h-12
              rounded-xl
              border border-gray-300
              pl-12 pr-4
              text-sm
              outline-none
              focus:ring-2 focus:ring-purple-500
            "
          />
        </div>

        {/* MEMBERS LIST */}
        <div className="space-y-3">
          {membersData.map((m, i) => (
            <div
              key={i}
              className="relative bg-white border border-gray-200 rounded-xl p-4 flex gap-4"
            >
              {/* LEFT COLOR STRIP */}
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${m.roleColor}`}
              />

              {/* AVATAR */}
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center font-semibold text-purple-600">
                {m.name.charAt(0).toUpperCase()}
              </div>

              {/* INFO */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{m.name}</p>
                    <p className="text-xs text-gray-500">
                      ID: {m.id}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {m.role}
                  </span>
                </div>

                {/* STATS */}
                <div className="flex justify-between items-center mt-3 text-xs text-gray-600">
                  <div className="flex gap-4">
                    <span>⏱ {m.time}</span>
                    <span>💰 {m.coins}</span>
                  </div>
                  <span>{m.month}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        <button className="w-full mt-10 text-sm font-medium text-purple-600">
          Load more
        </button>
      </main>
    </div>
  );
}
