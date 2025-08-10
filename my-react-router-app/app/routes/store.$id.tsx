import Button from "@mui/joy/Button";
import { Link, useLoaderData } from "react-router";
import { getProductsById } from "~/data/products";

export async function loader({ params }: any) {
  return getProductsById(params.id);
}

export default function Id() {
  const product = useLoaderData() as {
    id: number;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
    images: string[];
  };

  console.log("PRODUCT---->>>", product);

  return (
    <div className="p-8 flex gap-8">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-1/2 h-96 object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl mb-4">${product.price}</p>
        <div>
          <Button color="neutral" loading={false} variant="solid">
            Add to Cart
          </Button>
        </div>

        <p className="mt-4 text-gray-700 text-sm">{product.description}</p>
      </div>
    </div>
  );
}
