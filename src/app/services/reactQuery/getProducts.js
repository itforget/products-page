
export const fetchProducts = async () => {
  const token = tokenService.get();
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
};
