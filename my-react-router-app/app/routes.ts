// import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [
//   index("routes/home.tsx"),
//   route("store", "routes/store.tsx"),
//   route("store/:id", "routes/product/productId.tsx"),
// ] satisfies RouteConfig;
import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes() satisfies RouteConfig;
