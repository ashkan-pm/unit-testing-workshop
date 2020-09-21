import { httpPost, httpGet } from './utils';

function verify(email: string) {
  return httpPost('/api/verify', { body: { email }, parseJson: false });
}

function login(email: string, code: string) {
  return httpPost('/api/login', { body: { email, code } });
}

function getUser() {
  return httpGet('/api/user', { auth: true });
}

export { verify, login, getUser };
