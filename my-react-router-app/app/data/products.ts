const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data.products;
};

export const getProductsById = async (id: string) => {
  const res = await fetch(`BASE_URL/${id}`);
  return res.json();
};
