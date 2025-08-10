const BASE_URL = "https://dummyjson.com/products";

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
  const data = await fetch(res)
  return data.json();
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
