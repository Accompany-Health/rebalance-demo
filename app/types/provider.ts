export interface Provider {
  provider_id: string;
  first_name: string;
  last_name: string;
  market: string;
  role: string;
  prior_panel_size: number;
  prior_weighted_panel_size: number;
  new_panel_size: number;
  new_weighted_panel_size: number;
  target_weighted_panel: number;
}

export interface ProvidersResponse {
  providers: Provider[];
}
