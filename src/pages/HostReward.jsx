// src/pages/HostReward.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

export default function HostReward() {
  const navigate = useNavigate();
  const [targetValue, setTargetValue] = useState(0);
  const maxTarget = 10000;

  const handleReceive = () => {
    if (targetValue >= maxTarget) {
      alert("Reward claimed!");
      setTargetValue(0);
    }
  };

  const incrementTarget = () => {
    if (targetValue < maxTarget) {
      setTargetValue((prev) => Math.min(prev + 1000, maxTarget));
    }
  };

  const decrementTarget = () => {
    if (targetValue > 0) {
      setTargetValue((prev) => Math.max(prev - 1000, 0));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1835] via-[#2a1230] to-[#12060a] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-b from-[#1c1835] to-[#14102a] border-b border-purple-900/50">
        <div className="max-w-[430px] mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-purple-900/30 rounded-lg transition-colors"
          >
            <ArrowLeft size={22} />
          </button>
          <h1 className="text-lg font-semibold">Host Reward</h1>
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-purple-900/30 rounded-lg transition-colors"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[430px] mx-auto px-4 pb-20">
        {/* Tabs */}
        <div className="flex gap-4 mt-6">
          <button
            className={`flex-1 py-3 rounded-xl font-semibold border ${
              true
                ? "bg-gradient-to-r from-[#ff8a3d] to-[#c0392b] border-yellow-400"
                : "bg-black/40 border-yellow-700 text-gray-300"
            }`}
          >
            Target Reward
          </button>

          <button
            className={`flex-1 py-3 rounded-xl font-semibold border ${
              false
                ? "bg-gradient-to-r from-[#ff8a3d] to-[#c0392b] border-yellow-400"
                : "bg-black/40 border-yellow-700 text-gray-300"
            }`}
          >
            Active Reward
          </button>
        </div>

        {/* Rules Section */}
        <div className="mt-6 rounded-2xl border border-purple-400/40 bg-gradient-to-br from-[#4a2a66] to-[#2a133f] p-4">
          <p className="font-semibold mb-2 text-yellow-300">rule:</p>
          <ol className="text-sm leading-relaxed text-gray-200 space-y-1 pl-5 list-decimal">
            <li>Reset at 0:00 on the 1st of each month (GTM +3)</li>
            <li>The anchor can receive the reward if he reaches the specified target</li>
            <li>Each reward can only be claimed once a day</li>
          </ol>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent my-6"></div>

        {/* Target Display */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">
            <strong>Target:</strong>
          </h3>
          <div className="flex justify-center items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold text-green-400">{targetValue}</span>
            <span className="text-4xl text-gray-300">/</span>
            <span className="text-4xl font-bold text-gray-100">10000</span>
          </div>

          {/* Progress Controls */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              onClick={decrementTarget}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold text-3xl hover:shadow-lg hover:shadow-red-900/30 transition-all active:scale-95"
            >
              -
            </button>
            <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300"
                style={{ width: `${(targetValue / maxTarget) * 100}%` }}
              ></div>
            </div>
            <button
              onClick={incrementTarget}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center text-white font-bold text-3xl hover:shadow-lg hover:shadow-green-900/30 transition-all active:scale-95"
            >
              +
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent my-6"></div>

        {/* VIP Reward Card */}
        <div className="relative bg-gradient-to-b from-[#5b1a0f] to-[#2a0705] rounded-2xl border-2 border-yellow-600 p-8 shadow-[0_0_30px_rgba(255,170,0,0.15)]">
          {/* Crown Decoration */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-20 h-10 rounded-b-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
              <div className="w-16 h-8 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-b-full flex items-center justify-center">
                <div className="text-black font-bold text-sm">VIP</div>
              </div>
            </div>
          </div>

          {/* VIP Badge */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-2xl px-6 py-2 rounded-lg shadow-lg">
              VIP3*1D
            </div>
          </div>

          {/* Receive Button */}
          <button
            onClick={handleReceive}
            disabled={targetValue < maxTarget}
            className={`w-full py-4 rounded-xl font-bold text-xl transition-all ${
              targetValue >= maxTarget
                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-orange-400 active:scale-[0.98]"
                : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-400 cursor-not-allowed"
            }`}
          >
            <strong>Receive</strong>
          </button>
        </div>

        {/* Status Info */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-400">
            {targetValue >= maxTarget
              ? "✅ Target reached! You can claim your reward."
              : `⏳ Progress: ${((targetValue / maxTarget) * 100).toFixed(1)}%`}
          </p>
        </div>
      </main>
    </div>
  );
}