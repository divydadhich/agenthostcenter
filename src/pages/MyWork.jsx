import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BottomSheet from "../components/BottomSheet";
import WorkDetails from "../components/WorkDetails";

const workData = [
  {
    month: "2025-05",
    target: "1592118",
    duration: "06h19m",
    level: 11,
    salary: "$140",
  },
  {
    month: "2025-04",
    target: "3099346",
    duration: "02h12m",
    level: 14,
    salary: "$274",
  },
  {
    month: "2025-05",
    target: "1592118",
    duration: "06h19m",
    level: 11,
    salary: "$140",
  },
  {
    month: "2025-04",
    target: "3099346",
    duration: "02h12m",
    level: 14,
    salary: "$274",
  },
  {
    month: "2025-05",
    target: "1592118",
    duration: "06h19m",
    level: 11,
    salary: "$140",
  },
  {
    month: "2025-04",
    target: "3099346",
    duration: "02h12m",
    level: 14,
    salary: "$274",
  },
  {
    month: "2025-05",
    target: "1592118",
    duration: "06h19m",
    level: 11,
    salary: "$140",
  },
  {
    month: "2025-04",
    target: "3099346",
    duration: "02h12m",
    level: 14,
    salary: "$274",
  },
];

export default function MyWork() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="min-h-screen bg-[#eef2fb]">
      {/* HEADER */}
      <div className="h-14 px-4 flex items-center justify-between bg-[#1e2352] text-white">
        <button onClick={() => navigate(-1)}>&lt;</button>
        <h1 className="font-semibold">Work</h1>
        <button onClick={() => navigate(-1)}>✕</button>
      </div>

      <main className="max-w-[430px] mx-auto px-4 py-4 space-y-4">
        {workData.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow">
            <div className="flex justify-between mb-3">
              <p className="text-blue-600 font-semibold">{item.month}</p>
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                Settled
              </span>
            </div>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p>Target: <span className="font-semibold">{item.target}</span></p>
              <p className="text-right">Duration: <span className="font-semibold">{item.duration}</span></p>
              <p>Target LV: <span className="font-semibold">{item.level}</span></p>
              <p className="text-right">Salary: <span className="font-semibold">{item.salary}</span></p>
            </div>

            <button
              onClick={() => {
                setSelectedWork(item);
                setOpen(true);
              }}
              className="mt-3 w-full text-blue-500 text-sm font-medium"
            >
              See more details &gt;&gt;
            </button>
          </div>
        ))}
      </main>

      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <WorkDetails data={selectedWork} />
      </BottomSheet>
    </div>
  );
}
