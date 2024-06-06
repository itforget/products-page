export const fetchProducts = async () => {
  const response = await fetch("https://3000-itforget-serverzap-boqvgsz8aw6.ws-us114.gitpod.io/produtos");
  const data = await response.json();
  return data;
};
