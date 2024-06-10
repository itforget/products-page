import axios from "axios";
import { tokenService } from "../auth/tokenService";

export const fetchAuth = async () => {
  const token = tokenService.get();
  if (!token) {
    throw new Error("Token não encontrado");
  }
  try {
    const { data } = await axios.get(
      "https://3000-itforget-serverzap-boqvgsz8aw6.ws-us114.gitpod.io/autenticacao/session",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error("Erro ao autenticar: " + error.message);
  }
};
