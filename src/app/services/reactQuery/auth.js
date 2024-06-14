import axios from "axios";
import { tokenService } from "../auth/tokenService";

export const fetchAuth = async () => {
  const token = tokenService.get();
  if (!token) {
    throw new Error("Token não encontrado");
  }
  try {
    const { data } = await axios.get('https://silver-sniffle-gv79r6gxv7w29p4j-5000.app.github.dev/api/auth/session',
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
