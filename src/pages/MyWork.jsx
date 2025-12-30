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
  const Row = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
};


  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="h-14 px-4 flex items-center justify-between bg-[#1e2352] text-white">
        <button onClick={() => navigate(-1)}>&lt;</button>
        <h1 className="font-semibold">Work</h1>
        <button onClick={() => navigate(-1)}>✕</button>
      </div>

      <main className="max-w-[430px] mx-auto px-4 py-4 space-y-4">
  {workData.map((item, i) => (
    <div
      key={i}
      className="relative bg-white border border-gray-200 rounded-xl p-4"
    >
      {/* LEFT ACCENT */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-blue-500" />

      {/* TOP */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-gray-900">{item.month}</p>
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
          Settled
        </span>
      </div>

      {/* DETAILS */}
      <div className="space-y-2 text-sm text-gray-700">
        <Row label="Target" value={item.target} />
        <Row label="Duration" value={item.duration} />
        <Row label="Target Level" value={item.level} />
        <Row label="Salary" value={item.salary} />
      </div>

      {/* ACTION */}
     <button
  onClick={() => setOpenSheet(true)}
  className="
    mt-4
    block
    mx-auto
    text-sm
    font-medium
    text-purple-600
    active:scale-95
  "
>
  View details →
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
