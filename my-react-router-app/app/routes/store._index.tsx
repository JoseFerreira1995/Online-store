import Pagination from "@mui/material/Pagination";
import { Link, useLoaderData, useSearchParams } from "react-router";
import FilterBar from "~/components/filterBar";
import SideBar from "~/components/sideBar";

import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "~/data/products";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface LoaderData {
  products: Product[];
  total: number;
  limit: number;
  page: number;
  categories: string[];
  selectedCategory?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}

/**
 * Loader function for the store route.
 * Fetches products, categories, and query parameters for pagination, sorting, and filtering.
 *
 * @param {Object} params - Remix loader parameters.
 * @param {Request} params.request - The HTTP request object.
 * @returns {Promise<LoaderData>} Data for the store page.
 */
export async function loader({
  request,
}: {
  request: Request;
}): Promise<LoaderData> {
  const url = new URL(request.url);

  // Extract query params
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = 12;
  const sortBy = url.searchParams.get("sortBy") || undefined;
  const order = url.searchParams.get("order") as "asc" | "desc" | undefined;
  const category = url.searchParams.get("category") || undefined;

  const categories = await getCategories();

  let productsData;
  if (category) {
    productsData = await getProductsByCategory(
      category,
      page,
      limit,
      sortBy,
      order
    );
  } else {
    productsData = await getProducts(page, limit, sortBy, order);
  }

  return {
    categories: categories.slice(0, 5),
    selectedCategory: category,
    page,
    limit,
    sortBy,
    order,
    ...productsData,
  };
}

export default function Store() {
  const {
    products,
    total,
    limit,
    page,
    categories,
    selectedCategory,
    sortBy,
    order,
  } = useLoaderData<LoaderData>();

  const totalNumberOfPages = Math.ceil(total / limit);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    searchParams.set("page", newPage.toString());
    setSearchParams(searchParams);
  };

  return (
    <div
      className="
        max-w-[1344px] 
        min-h-[1425px] 
        mx-auto    
        flex 
        gap-12      
        opacity-100
        px-4       
        flex-col sm:flex-row 
      "
    >
      <main
        className="
          w-full sm:w-[1056px]
          min-h-[1425px]
          opacity-100
          bg-white
          box-border
          flex flex-col
        "
      >
        <FilterBar productsLength={products.length} total={total} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1056px] opacity-100 ">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product.id}
                to={`/store/${product.id}`}
                className="rounded-lg hover:shadow-lg transition-all bg-white"
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
            <p>There are no products.</p>
          )}
        </div>
        <div
          className="
            w-full sm:w-[1056px]
            h-[36px]
            flex justify-end items-center
            mt-6
            opacity-100
          "
        >
          <Pagination
            count={totalNumberOfPages}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </main>

      <SideBar categories={categories} selectedCategory={selectedCategory} />
    </div>
  );
}
