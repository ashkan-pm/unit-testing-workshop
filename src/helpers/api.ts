import { post } from './utils';

function verify(email: string) {
  return post('/api/verify', { body: { email }, parseJson: false });
}

export { verify };
