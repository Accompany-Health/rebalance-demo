import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("rebalance", "routes/rebalance.tsx"),
  route("patient-assignments", "routes/patient-assignments.tsx"),
] satisfies RouteConfig;
