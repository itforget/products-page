import axios from "axios";
import { tokenService } from "../auth/tokenService";

export const fetchAuth = async () => {
  const token = tokenService.get();
  if (!token) {
    throw new Error("Token não encontrado");
  }
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`,
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
