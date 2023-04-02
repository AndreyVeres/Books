export const register = async (username: string, password: string) => {
  const request = await fetch('http://localhost:5432/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const response = await request.json();
  return response;
};
