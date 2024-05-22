import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const postData = async (data) => {
  return await axios.post('https://3000-itforget-legendarytrain-geawftz26u5.ws-us114.gitpod.io/auth/register', data)
}

export function useRegisterMutate(){
    const mutate = useMutation({
      mutationFn: postData
    })
    return mutate
  };
  