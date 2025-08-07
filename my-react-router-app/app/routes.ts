import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("store", "routes/store.tsx"),
  route(`product/id`, "routes/product/$productId.tsx"),
] satisfies RouteConfig;
