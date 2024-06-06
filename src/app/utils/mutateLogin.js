import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const postData = async (data) => {
  const response = await axios.post(
    "https://3000-itforget-serverzap-boqvgsz8aw6.ws-us114.gitpod.io/autenticacao/login",
    data
  );
  const token = response.data.token_acesso;
  Cookies.set("token", token);
  const usuarioLogado = true
  return response;
};

export function useLoginMutate() {
  const mutate = useMutation({
    mutationFn: postData,
  });
  return mutate;
}
