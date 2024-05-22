export const fetchUser = async () => {
    const response = await fetch("https://3000-itforget-legendarytrain-geawftz26u5.ws-us114.gitpod.io/register");
    const data = await response.json();
    return data;
  };
  