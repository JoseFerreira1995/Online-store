const BASE_URL = "https://dummyjson.com/products";

// Todo: error handling
export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

export const getProductsById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const getProductsByLimit = async () => {
  const res = await fetch(`${BASE_URL}?limit=10&skip=10&select=title,price`);
  return res.json();
};
