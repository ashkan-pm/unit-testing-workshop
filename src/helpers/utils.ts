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

export { post };
