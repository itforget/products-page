export const fetchProducts = async () => {
  const response = await fetch("https://3000-itforget-nestjstypeorma-piafsuxeam7.ws-us114.gitpod.io/produtos");
  const data = await response.json();
  return data;
};
