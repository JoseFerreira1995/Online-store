const BASE_URL = "https://dummyjson.com/products";
const CATEGORY_URL = `${BASE_URL}/category`;

/**
 * Represents a product in the cart.
 */
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}


let cart: CartItem[] = [];

/**
 * Retrieves the current cart items.
 * @returns {CartItem[]} Array of cart items.
 */
export function getCart(): CartItem[] {
  return cart;
}

/**
 * Adds a product to the cart or increments its quantity if it already exists.
 * @param {Omit<CartItem, 'quantity'>} product - Product to add (without quantity).
 */
export function addToCart(product: Omit<CartItem, "quantity">): void {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

/**
 * Removes a product from the cart by ID.
 * @param {number} id - ID of the product to remove.
 */
export function removeFromCart(id: number): void {
  cart = cart.filter((item) => item.id !== id);
}

/**
 * Fetches products with pagination and optional sorting.
 * @param {number} [page=1] - Page number (starting at 1).
 * @param {number} [limit=10] - Number of products per page.
 * @param {string} [sortBy] - Field to sort by (e.g., "price").
 * @param {"asc" | "desc"} [order] - Sort order.
 * @returns {Promise<any>} Promise resolving to the products data.
 * @throws Will throw an error if the fetch fails.
 */
export async function getProducts(
  page = 1,
  limit = 10,
  sortBy?: string,
  order?: "asc" | "desc"
): Promise<any> {
  const skip = (page - 1) * limit;
  const url = new URL(BASE_URL);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("skip", String(skip));
  if (sortBy) url.searchParams.set("sortBy", sortBy);
  if (order) url.searchParams.set("order", order);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

/**
 * Fetches a product by its ID.
 * @param {string} id - Product ID.
 * @returns {Promise<any>} Promise resolving to the product data.
 * @throws Will throw an error if the fetch fails.
 */
export async function getProductsById(id: string): Promise<any> {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

/**
 * Fetches the list of product categories.
 * @returns {Promise<string[]>} Promise resolving to an array of category names.
 * @throws Will throw an error if the fetch fails.
 */
export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/category-list`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

/**
 * Fetches products by category with pagination and optional sorting.
 * @param {string} category - Category name.
 * @param {number} [page=1] - Page number.
 * @param {number} [limit=10] - Number of products per page.
 * @param {string} [sortBy] - Field to sort by.
 * @param {"asc" | "desc"} [order] - Sort order.
 * @returns {Promise<any>} Promise resolving to products data.
 * @throws Will throw an error if the fetch fails.
 */
export async function getProductsByCategory(
  category: string,
  page = 1,
  limit = 10,
  sortBy?: string,
  order?: "asc" | "desc"
): Promise<any> {
  const skip = (page - 1) * limit;
  const url = new URL(`${CATEGORY_URL}/${category}`);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("skip", String(skip));
  if (sortBy) url.searchParams.set("sortBy", sortBy);
  if (order) url.searchParams.set("order", order);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch products by category");
  return res.json();
}