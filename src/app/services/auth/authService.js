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
      tokenService.save(body.token_acesso);
    })
  }  
};