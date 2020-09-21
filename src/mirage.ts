import { Server, Response } from 'miragejs';
import faker from 'faker';

const SECRET_CODE = '132435';
const SECRET_TOKEN = 'super_secure_token';

const server = new Server({
  routes() {
    this.namespace = 'api';
    this.timing = 0;

    this.post('/verify', (_, request) => {
      const { email } = JSON.parse(request.requestBody);

      if (!email) {
        return new Response(400);
      }

      return new Response(204);
    });

    this.post('/login', (_, request) => {
      const { email, code } = JSON.parse(request.requestBody);

      if (!email || !code) {
        return new Response(400);
      }
      if (code !== SECRET_CODE) {
        return new Response(401);
      }

      let user = server.db.users.findBy({ email });
      if (!user) {
        user = server.db.users.insert({ email, name: faker.name.firstName() });
      }

      return { name: user.name, token: `super_secure_token:${user.id}` };
    });

    this.post('/validate', (_, request) => {
      const { token } = JSON.parse(request.requestBody);

      if (!token) {
        return new Response(400);
      }

      const secret = token.split(':')[0];
      if (secret !== SECRET_TOKEN) {
        return new Response(401);
      }

      const id = token.split(':')[1];
      const user = server.db.users.findBy({ id });
      if (!user) {
        return new Response(404);
      }

      return user;
    });
  }
});

server.db.loadData({
  users: [{ email: 'unit@gmail.com', name: 'Orwell' }]
});
