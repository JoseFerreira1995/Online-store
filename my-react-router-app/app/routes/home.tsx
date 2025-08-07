import type { Route } from "./+types/home";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Button from "@mui/joy/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to THE ONLINE STORE
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Discover the best products at unbeatable prices. Browse our collection
        and find your next favorite item today.
      </motion.p>
      <div className="mt-8">
        <Link to={"/store"}>
          <Button color="neutral" loading={false} variant="solid">
            Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}
