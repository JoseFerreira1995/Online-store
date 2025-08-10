const BASE_URL = "https://dummyjson.com/products";

let cart: { id: number; title: string; price: number; quantity: number }[] = [];

export function getCart() {
  return cart;
}

export function addToCart(product: {
  id: number;
  title: string;
  price: number;
}) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

// export const incrementProductCart = (productId: number) => {
//   cart.map((item) =>
//     item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//   );
// };

export const removeFromCart = (id: number) => {
  cart = cart.filter((item) => item.id !== id);
};

// Todo: error handling
export async function getProducts(
  page = 1,
  limit = 10,
  sortBy?: string,
  order?: "asc" | "desc"
) {
  const skip = (page - 1) * limit;
  const url = new URL(BASE_URL);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("skip", String(skip));
  if (sortBy) url.searchParams.set("sortBy", sortBy);
  if (order) url.searchParams.set("order", order);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json(); // {products, total, skip, limit}
}

export const getProductsById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/category-list`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getProductsByCategory(
  category: string,
  page = 1,
  limit = 10,
  sortBy?: string,
  order?: "asc" | "desc"
) {
  const skip = (page - 1) * limit;
  // DummyJSON supports ?limit/skip on category endpoint
  const url = new URL(`https://dummyjson.com/products/category/${category}`);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("skip", String(skip));
  if (sortBy) url.searchParams.set("sortBy", sortBy);
  if (order) url.searchParams.set("order", order);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch products by category");
  return res.json(); // {products, total, skip, limit}
}
