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
export const getProducts = async (
  page: number,
  limit: number,
  sortBy?: string,
  order?: "asc" | "desc"
) => {
  let res = `${BASE_URL}?limit=${limit}&skip=${page}`;

  if (sortBy && order) {
    res += `&sortBy=${sortBy}&order=${order}`;
  }
  const data = await fetch(res);
  return data.json();
};

export const getProductsById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};
