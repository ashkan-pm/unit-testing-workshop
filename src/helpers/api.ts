import { post } from './utils';

function verify(email: string) {
  return post('/api/verify', { body: { email }, parseJson: false });
}

function login(email: string, code: string) {
  return post('/api/login', { body: { email, code } });
}

export { verify, login };
