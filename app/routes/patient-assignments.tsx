import { Link } from "react-router";
import type { Route } from "./+types/patient-assignments";
import type { PatientAssignment } from "~/types/patient";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Patient Assignments | PanelPulse" }];
}

const MOCK_PATIENTS: PatientAssignment[] = [
  {
    id: "a1b2c3d4-0001-4000-8000-000000000001",
    first_name: "Margaret",
    last_name: "Thompson",
    care_program: "Chronic Care Management",
    clinical_segment: "Complex",
    risk_factor: "Diabetes, HTN",
    role: "APC",
    prior_provider_id: "prov-001",
    new_provider_id: "prov-007",
    risk_segment: "High",
  },
  {
    id: "a1b2c3d4-0002-4000-8000-000000000002",
    first_name: "James",
    last_name: "Rivera",
    care_program: "Behavioral Health",
    clinical_segment: "Moderate",
    risk_factor: "Depression, Anxiety",
    role: "APC",
    prior_provider_id: "prov-002",
    new_provider_id: "prov-005",
    risk_segment: "Medium",
  },
  {
    id: "a1b2c3d4-0003-4000-8000-000000000003",
    first_name: "Linda",
    last_name: "Patel",
    care_program: "Chronic Care Management",
    clinical_segment: "Complex",
    risk_factor: "COPD, CHF",
    role: "APC",
    prior_provider_id: "prov-003",
    new_provider_id: "prov-007",
    risk_segment: "High",
  },
  {
    id: "a1b2c3d4-0004-4000-8000-000000000004",
    first_name: "Robert",
    last_name: "Kim",
    care_program: "Preventive Care",
    clinical_segment: "Low",
    risk_factor: "None",
    role: "APC",
    prior_provider_id: "prov-001",
    new_provider_id: "prov-004",
    risk_segment: "Low",
  },
  {
    id: "a1b2c3d4-0005-4000-8000-000000000005",
    first_name: "Susan",
    last_name: "Nguyen",
    care_program: "Chronic Care Management",
    clinical_segment: "Moderate",
    risk_factor: "CKD, Diabetes",
    role: "APC",
    prior_provider_id: "prov-002",
    new_provider_id: "prov-006",
    risk_segment: "Medium",
  },
  {
    id: "a1b2c3d4-0006-4000-8000-000000000006",
    first_name: "David",
    last_name: "Martinez",
    care_program: "Palliative Care",
    clinical_segment: "Complex",
    risk_factor: "Cancer, CHF",
    role: "APC",
    prior_provider_id: "prov-004",
    new_provider_id: "prov-008",
    risk_segment: "High",
  },
  {
    id: "a1b2c3d4-0007-4000-8000-000000000007",
    first_name: "Patricia",
    last_name: "Johnson",
    care_program: "Behavioral Health",
    clinical_segment: "Moderate",
    risk_factor: "Bipolar Disorder",
    role: "APC",
    prior_provider_id: "prov-003",
    new_provider_id: "prov-005",
    risk_segment: "Medium",
  },
  {
    id: "a1b2c3d4-0008-4000-8000-000000000008",
    first_name: "Michael",
    last_name: "Chen",
    care_program: "Preventive Care",
    clinical_segment: "Low",
    risk_factor: "Hypertension",
    role: "APC",
    prior_provider_id: "prov-001",
    new_provider_id: "prov-003",
    risk_segment: "Low",
  },
  {
    id: "a1b2c3d4-0009-4000-8000-000000000009",
    first_name: "Barbara",
    last_name: "Williams",
    care_program: "Chronic Care Management",
    clinical_segment: "Complex",
    risk_factor: "Diabetes, CKD, HTN",
    role: "APC",
    prior_provider_id: "prov-005",
    new_provider_id: "prov-007",
    risk_segment: "High",
  },
  {
    id: "a1b2c3d4-0010-4000-8000-000000000010",
    first_name: "Christopher",
    last_name: "Davis",
    care_program: "Behavioral Health",
    clinical_segment: "Low",
    risk_factor: "Anxiety",
    role: "APC",
    prior_provider_id: "prov-006",
    new_provider_id: "prov-002",
    risk_segment: "Low",
  },
];

export async function loader() {
  const response = await fetch(
    "https://hackathon-patient-pulse.onrender.com/patients"
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch patients: ${response.status}`);
  }
  return response.json();
}

const COLUMNS: {
  key: keyof PatientAssignment | "patient_name";
  label: string;
}[] = [
  { key: "patient_name", label: "Patient Name" },
  { key: "care_program", label: "Care Program" },
  { key: "clinical_segment", label: "Clinical Segment" },
  { key: "risk_factor", label: "Risk Factor" },
  { key: "role", label: "Role" },
  { key: "prior_provider_id", label: "Prior Provider ID" },
  { key: "new_provider_id", label: "New Provider ID" },
  { key: "risk_segment", label: "Risk Segment" },
];

export default function PatientAssignments({
  loaderData,
}: Route.ComponentProps) {
  const { patients } = loaderData;
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10 shadow-sm">
        <Link
          to="/rebalance"
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
              className="w-4 h-4 text-blue-500"
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
            Patient Assignment Table
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Detroit &bull; Pending rebalance assignments
          </p>
        </div>
      </header>

      {/* Table */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {patients.length === 0 ? (
                  <tr>
                    <td
                      colSpan={COLUMNS.length}
                      className="px-4 py-16 text-center text-slate-400"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-slate-300"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4"
                          />
                        </svg>
                        <span className="text-sm font-medium text-slate-400">
                          No assignments yet
                        </span>
                        <span className="text-xs text-slate-300">
                          Patient data will appear here once loaded
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  patients.map((patient, i) => (
                    <tr
                      key={patient.id}
                      className={`border-b border-slate-100 last:border-0 hover:bg-blue-50 transition-colors ${i % 2 === 1 ? "bg-slate-50" : ""}`}
                    >
                      {COLUMNS.map((col) => (
                        <td
                          key={col.key}
                          className="px-4 py-3 text-slate-700 whitespace-nowrap"
                        >
                          {col.key === "patient_name"
                            ? `${patient.first_name} ${patient.last_name}`
                            : patient[col.key as keyof PatientAssignment]}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
