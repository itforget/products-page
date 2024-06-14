import { HttpClient } from '../infra/HttpClient';
import { tokenService } from './tokenService';

export const authService = {
  async login({ email, password }) {
    return HttpClient("https://silver-sniffle-gv79r6gxv7w29p4j-5000.app.github.dev/api/auth/login", {
      method: 'POST',
      body: { email, password }
    })
    .then(async (respostaDoServidor) => {
      if(!respostaDoServidor.ok) throw new Error('Usuário ou senha inválidos!')
      const body = respostaDoServidor.body;
      tokenService.save(body.token);
    })
  }  
};