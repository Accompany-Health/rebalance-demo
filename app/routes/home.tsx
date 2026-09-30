import { useNavigate } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PanelPulse" }];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-8 p-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-700 tracking-wide">
          PanelPulse
        </h1>
        <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest">
          Clinical Dashboard
        </p>
      </div>

      {/* Alert Button */}
      <button
        onClick={() => navigate("/rebalance")}
        className="
          group flex flex-col items-center justify-center gap-1
          w-72 py-6 px-8 rounded-xl
          bg-amber-50 hover:bg-amber-100 active:bg-amber-200
          shadow-md hover:shadow-lg
          border border-amber-400
          transition-all duration-200 cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-amber-300
        "
        aria-label="View panel imbalance alert"
      >
        <span className="flex items-center gap-2 text-amber-800 font-semibold text-lg tracking-wide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 shrink-0 text-amber-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          Rebalance Required
        </span>

        <span className="text-amber-600 text-xs font-medium uppercase tracking-widest group-hover:text-amber-800 transition-colors">
          CLICK to view
        </span>
      </button>

      {/* Footer note */}
      <p className="text-slate-400 text-xs">
        Monitoring active &bull; All systems nominal except flagged alerts
      </p>
    </div>
  );
}
