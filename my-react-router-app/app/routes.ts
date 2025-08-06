import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("store", "routes/store.tsx"),
] satisfies RouteConfig;
