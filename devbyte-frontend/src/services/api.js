const API_BASE_URL = 'https://community-api-backend.onrender.com/api/v1';

// Base fetch wrapper with token management
const apiFetch = async (endpoint, options = {}) => {
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // to send cookies (JWT)
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

export default apiFetch;