export interface PatientAssignment {
  id: string;
  first_name: string;
  last_name: string;
  care_program: string;
  clinical_segment: string;
  risk_factor: string;
  role: string;
  prior_provider_id: string;
  new_provider_id: string;
  risk_segment: string;
}

export interface PatientsResponse {
  patients: PatientAssignment[];
}
