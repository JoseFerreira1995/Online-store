import { Link, useLoaderData } from "react-router";
import Header from "~/components/header";
import { getProducts } from "~/data/products";

export async function loader() {
  return getProducts();
}

export default function Store() {
  const products = useLoaderData() as {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  }[];

  return (
    <>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <>
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="border p-4 rounded hover:shadow"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-cover mb-2 rounded"
              />
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-sm text-gray-600">${product.price}</p>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
