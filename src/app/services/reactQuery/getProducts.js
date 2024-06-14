
export const fetchProducts = async () => {
  const response = await fetch("https://silver-sniffle-gv79r6gxv7w29p4j-5000.app.github.dev/api/products");
  const data = await response.json();
  return data;
};
