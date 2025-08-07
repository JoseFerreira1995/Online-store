import { Link, useLoaderData } from "react-router";
import ProductPagination from "~/components/productPagination";
import { getProducts } from "~/data/products";

export async function loader() {
  return getProducts();
}

export default function Store() {
  const { products, total } = useLoaderData() as {
    products: {
      id: number;
      title: string;
      price: number;
      thumbnail: string;
    }[];
    total: number;
  };

  return (
    <>
      <div>
        <h2>
          Showing {products.length} of {total}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12  ">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product.id}
              to={`/store/${product.id}`}
              className=" rounded-lg hover:shadow-lg transition-all bg-white"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-64 w-full object-cover mb-4 rounded"
              />
              <h2 className="font-semibold text-xl">{product.title}</h2>
              <p className="text-md text-gray-600">${product.price}</p>
            </Link>
          ))
        ) : (
          <p>There is no products</p>
        )}
      </div>
      <div>
        <ProductPagination />
      </div>
    </>
  );
}
