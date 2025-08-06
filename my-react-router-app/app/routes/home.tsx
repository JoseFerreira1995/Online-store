import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link, useLoaderData } from "react-router";
import { getProducts } from "~/data/products";
import Header from "~/components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Header />;
}
