import { Link } from "react-router";
import type { Provider, ProvidersResponse } from "../types/provider";
import type { Route } from "./+types/rebalance";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Rebalance | PanelPulse" }];
}

const MOCK_PROVIDERS: Provider[] = [
  {
    provider_id: "a1b2c3d4-0001-4e5f-8a9b-000000000001",
    first_name: "Sarah",
    last_name: "Mitchell",
    market: "Detroit",
    role: "APC",
    prior_panel_size: 210,
    prior_weighted_panel_size: 380,
    new_panel_size: 165,
    new_weighted_panel_size: 310,
    target_weighted_panel: 300,
  },
  {
    provider_id: "a1b2c3d4-0002-4e5f-8a9b-000000000002",
    first_name: "James",
    last_name: "Okonkwo",
    market: "Detroit",
    role: "MD",
    prior_panel_size: 420,
    prior_weighted_panel_size: 510,
    new_panel_size: 480,
    new_weighted_panel_size: 560,
    target_weighted_panel: 500,
  },
  {
    provider_id: "a1b2c3d4-0003-4e5f-8a9b-000000000003",
    first_name: "Priya",
    last_name: "Nair",
    market: "Detroit",
    role: "APC",
    prior_panel_size: 175,
    prior_weighted_panel_size: 290,
    new_panel_size: 200,
    new_weighted_panel_size: 330,
    target_weighted_panel: 320,
  },
  {
    provider_id: "a1b2c3d4-0004-4e5f-8a9b-000000000004",
    first_name: "Marcus",
    last_name: "Chen",
    market: "Detroit",
    role: "MD",
    prior_panel_size: 390,
    prior_weighted_panel_size: 460,
    new_panel_size: 350,
    new_weighted_panel_size: 415,
    target_weighted_panel: 450,
  },
  {
    provider_id: "a1b2c3d4-0005-4e5f-8a9b-000000000005",
    first_name: "Danielle",
    last_name: "Torres",
    market: "Detroit",
    role: "APC",
    prior_panel_size: 130,
    prior_weighted_panel_size: 210,
    new_panel_size: 155,
    new_weighted_panel_size: 250,
    target_weighted_panel: 280,
  },
  {
    provider_id: "a1b2c3d4-0006-4e5f-8a9b-000000000006",
    first_name: "Robert",
    last_name: "Patel",
    market: "Detroit",
    role: "MD",
    prior_panel_size: 500,
    prior_weighted_panel_size: 590,
    new_panel_size: 455,
    new_weighted_panel_size: 540,
    target_weighted_panel: 500,
  },
  {
    provider_id: "a1b2c3d4-0007-4e5f-8a9b-000000000007",
    first_name: "Amara",
    last_name: "Williams",
    market: "Detroit",
    role: "APC",
    prior_panel_size: 190,
    prior_weighted_panel_size: 340,
    new_panel_size: 220,
    new_weighted_panel_size: 370,
    target_weighted_panel: 350,
  },
  {
    provider_id: "a1b2c3d4-0008-4e5f-8a9b-000000000008",
    first_name: "Kevin",
    last_name: "Larson",
    market: "Detroit",
    role: "MD",
    prior_panel_size: 445,
    prior_weighted_panel_size: 530,
    new_panel_size: 395,
    new_weighted_panel_size: 475,
    target_weighted_panel: 490,
  },
  {
    provider_id: "a1b2c3d4-0009-4e5f-8a9b-000000000009",
    first_name: "Fatima",
    last_name: "Hassan",
    market: "Detroit",
    role: "APC",
    prior_panel_size: 160,
    prior_weighted_panel_size: 260,
    new_panel_size: 185,
    new_weighted_panel_size: 295,
    target_weighted_panel: 300,
  },
  {
    provider_id: "a1b2c3d4-0010-4e5f-8a9b-000000000010",
    first_name: "Gregory",
    last_name: "Nakamura",
    market: "Detroit",
    role: "MD",
    prior_panel_size: 360,
    prior_weighted_panel_size: 440,
    new_panel_size: 410,
    new_weighted_panel_size: 495,
    target_weighted_panel: 480,
  },
];

export async function loader(): Promise<ProvidersResponse> {
  const response = await fetch(
    "https://hackathon-patient-pulse.onrender.com/providers"
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch providers: ${response.status}`);
  }
  return response.json();
}

function Delta({ prior, next }: { prior: number; next: number }) {
  const diff = next - prior;
  if (diff === 0) return null;
  const up = diff > 0;
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-full ${
        up ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"
      }`}
    >
      {up ? "▲" : "▼"} {Math.abs(diff)}
    </span>
  );
}

function TargetBadge({ value, target }: { value: number; target: number }) {
  const diff = value - target;
  const absDiff = Math.abs(diff);
  if (diff === 0)
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
        ✓ On target
      </span>
    );
  if (diff > 0)
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-700">
        ▲ {absDiff} over
      </span>
    );
  return (
    <span className="inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">
      ▼ {absDiff} under
    </span>
  );
}

function StatRow({
  label,
  prior,
  next,
}: {
  label: string;
  prior: number;
  next: number;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 border-b border-slate-100 last:border-0">
      <span className="text-xs text-slate-500 w-36 shrink-0">{label}</span>
      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <span>{prior.toLocaleString()}</span>
        <span className="text-slate-400">→</span>
        <span className="font-semibold text-slate-900">
          {next.toLocaleString()}
        </span>
        <Delta prior={prior} next={next} />
      </div>
    </div>
  );
}

function ProviderCard({ provider }: { provider: Provider }) {
  const fullName = `${provider.first_name} ${provider.last_name}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex">
      {/* Accent stripe */}
      <div className="w-1.5 shrink-0 bg-amber-400" />

      <div className="flex-1 p-5 sm:p-6">
        {/* Top: name + badges */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{fullName}</h2>
            <p className="text-xs text-slate-400 mt-0.5 font-mono">
              {provider.provider_id}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wide">
              {provider.role}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
              {provider.market}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="divide-y divide-slate-100">
          <StatRow
            label="Panel size"
            prior={provider.prior_panel_size}
            next={provider.new_panel_size}
          />
          <StatRow
            label="Weighted panel"
            prior={provider.prior_weighted_panel_size}
            next={provider.new_weighted_panel_size}
          />
          {/* Target row */}
          <div className="flex items-center justify-between gap-4 py-1.5">
            <span className="text-xs text-slate-500 w-36 shrink-0">
              Target weighted panel
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="font-semibold text-slate-900">
                {provider.target_weighted_panel.toLocaleString()}
              </span>
              <TargetBadge
                value={provider.new_weighted_panel_size}
                target={provider.target_weighted_panel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Rebalance({ loaderData }: Route.ComponentProps) {
  const { providers } = loaderData as ProvidersResponse;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10 shadow-sm">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>
        <div className="h-5 w-px bg-slate-200" />
        <div className="flex-1">
          <h1 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-amber-500"
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
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Detroit &bull; {providers.length} providers affected
          </p>
        </div>
        <Link
          to="/patient-assignments"
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-3 py-1.5 rounded-lg transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          Patient Assignments
        </Link>
      </header>

      {/* Card list */}
      <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-4">
        {providers.map((p) => (
          <ProviderCard key={p.provider_id} provider={p} />
        ))}
      </main>
    </div>
  );
}
