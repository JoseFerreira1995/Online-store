import Button from "@mui/joy/Button";
import { Form, Link, redirect, useLoaderData } from "react-router";
import { addToCart, getProductsById } from "~/data/products";

export async function loader({ params }: any) {
  return getProductsById(params.id);
}

export async function action({ request, params }: any) {
  const product = await getProductsById(params.id);
  addToCart(product);
  return redirect("/store");
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

  return (
    <div className="p-4 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 max-w-7xl mx-auto">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full sm:w-1/2 h-64 sm:h-96 object-cover rounded"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl mb-4">${product.price}</p>
        <div>
          <Form method="post">
            <input type="hidden" name="title" value={product.title} />
            <input type="hidden" name="price" value={product.price} />
            <Button type="submit" color="neutral" variant="solid"     sx={{
              width: 400,
              maxWidth: "100%",
              height: 36,
              paddingTop: 1,
              paddingBottom: 1,
              paddingLeft: 2,
              paddingRight: 2,
              opacity: 1,
              borderRadius: 1,
            }}>
              Add to Cart
            </Button>
          </Form>
        </div>

        <p className="mt-4 text-gray-700 text-sm">{product.description}</p>
      </div>
    </div>
  );
}
