async function httpPost(
  url: string,
  { body, parseJson = true }: { body: { [key: string]: string }; parseJson?: boolean }
) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(String(response.status));
  }

  return parseJson ? response.json() : response;
}

async function httpGet(
  url: string,
  { auth = false, parseJson = true }: { auth?: boolean; parseJson?: boolean }
) {
  const headers = new Headers();

  if (auth) {
    headers.append('Authorization', getToken() || '');
  }

  const response = await fetch(url, {
    method: 'GET',
    headers
  });

  if (!response.ok) {
    throw new Error(String(response.status));
  }

  return parseJson ? response.json() : response;
}

function setToken(token: string) {
  localStorage.setItem('token', token);
}

function getToken() {
  return localStorage.getItem('token');
}

function removeToken() {
  localStorage.removeItem('token');
}

export { httpPost, httpGet, setToken, getToken, removeToken };
