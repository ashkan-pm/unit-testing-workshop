async function post(
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

function setToken(token: string) {
  localStorage.setItem('token', token);
}

function getToken() {
  localStorage.getItem('token');
}

function removeToken() {
  localStorage.removeItem('token');
}

export { post, setToken, getToken, removeToken };
