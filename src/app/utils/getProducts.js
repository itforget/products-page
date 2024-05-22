export const fetchProducts = async () => {
  const response = await fetch("https://3000-itforget-legendarytrain-geawftz26u5.ws-us114.gitpod.io/products");
  const data = await response.json();
  return data;
};
