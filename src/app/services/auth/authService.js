import { HttpClient } from '../infra/HttpClient';
import { tokenService } from './tokenService';

export const authService = {
  async login({ email, senha }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/autenticacao/login`, {
      method: 'POST',
      body: { email, senha }
    })
    .then(async (respostaDoServidor) => {
      if(!respostaDoServidor.ok) throw new Error('Usuário ou senha inválidos!')
      const body = respostaDoServidor.body;
      console.log(body)
      tokenService.save(body.token_acesso);
    })
    .catch((err) => {
      console.log(err)
    });
  },
  async getSession(ctx = null) {
    const token = tokenService.get(ctx);
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/autenticacao/session`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
      if(!response.ok) throw new Error('Não autorizado');

      return response.body.data;
    });
  }
};