export const login = async (username: string, password: string) => {
  const res = await fetch('http://localhost:8000/api/v1/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Login failed');
  }

  const data = await res.json();
  return data;
};
