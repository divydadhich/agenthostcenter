import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
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
    month: "2025-03",
    target: "3004613",
    duration: "01h11m",
    level: 14,
    salary: "$296",
  },
  {
    month: "2025-02",
    target: "3008149",
    duration: "02h57m",
    level: 14,
    salary: "$296",
  },
];

export default function MyWork() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#eef2fb]">
     <div className="h-14 px-4 flex items-center justify-between bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white">
  <button
    onClick={() => navigate(-1)}
    className="text-2xl font-semibold"
  >
    &lt;
  </button>

  <h1 className="text-lg font-semibold">Work</h1>

  <button
    onClick={() => navigate(-1)}
    className="text-2xl"
  >
    ✕
  </button>
</div>

      {/* CONTENT */}
      <main className="max-w-[430px] mx-auto px-4 py-4 space-y-4">
        {workData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow"
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-blue-600 font-semibold">
                {item.month}
              </p>
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm">
                Settled
              </span>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p>
                Target:{" "}
                <span className="text-blue-600 font-semibold">
                  {item.target}
                </span>
              </p>
              <p className="text-right">
                Duration:{" "}
                <span className="text-purple-600 font-semibold">
                  {item.duration}
                </span>
              </p>

              <p>
                Target LV:{" "}
                <span className="text-orange-500 font-semibold">
                  {item.level}
                </span>
              </p>
              <p className="text-right">
                Salary:{" "}
                <span className="text-orange-500 font-semibold">
                  {item.salary}
                </span>
              </p>
            </div>

            {/* SEE MORE */}
            <button
              onClick={() => setOpen(true)}
              className="mt-3 w-full text-center text-blue-500 text-sm font-medium active:scale-95"
            >
              See more details &gt;&gt;
            </button>
          </div>
        ))}
      </main>

      {/* BOTTOM POPUP */}
      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <WorkDetails />
      </BottomSheet>
    </div>
  );
}
