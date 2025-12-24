export default function WorkDetails({ data }) {
  if (!data) return null;

  return (
    <>
      <h2 className="text-lg font-semibold text-center mb-4">
        Details
      </h2>

      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="flex justify-between mb-3">
          <p className="text-blue-600 font-semibold">
            {data.month}
          </p>
          <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm">
            Settled
          </span>
        </div>

        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <p>
            Target:{" "}
            <span className="text-blue-600 font-semibold">
              {data.target}
            </span>
          </p>
          <p className="text-right">
            Duration:{" "}
            <span className="text-purple-600 font-semibold">
              {data.duration}
            </span>
          </p>
          <p>
            Target LV:{" "}
            <span className="text-orange-500 font-semibold">
              {data.level}
            </span>
          </p>
          <p className="text-right">
            Salary:{" "}
            <span className="text-orange-500 font-semibold">
              {data.salary}
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 rounded-xl overflow-hidden text-sm font-semibold text-center">
        <div className="bg-gray-100 py-3">Date</div>
        <div className="bg-gradient-to-r from-yellow-200 to-orange-200 py-3">
          Duration
        </div>
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white py-3">
          Target
        </div>
      </div>

      {[
        ["2025-10-26", "02h00m", "1"],
        ["2025-10-17", "00h10m", "0"],
        ["2025-10-13", "00h30m", "0"],
        ["2025-10-06", "0s", "32004"],
      ].map((row, i) => (
        <div key={i} className="grid grid-cols-3 text-center text-sm">
          <div className="bg-white py-3 border-b">{row[0]}</div>
          <div className="bg-orange-50 py-3 border-b">{row[1]}</div>
          <div className="bg-emerald-50 py-3 border-b text-emerald-700 font-semibold">
            {row[2]}
          </div>
        </div>
      ))}
    </>
  );
}
