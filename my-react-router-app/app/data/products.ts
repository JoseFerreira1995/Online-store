const BASE_URL = "https://dummyjson.com/products";

// Todo: error handling
export const getProducts = async (page: number, limit: number) => {
  const res = await fetch(
    `${BASE_URL}?limit=${limit}&skip=${page}`
  );
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

export const getSortedProducts = async () => {};
