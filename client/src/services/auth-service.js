
const API_URL_AUTH = `${import.meta.env.VITE_API_URL}/user`;

export const AuthService = {
  async registration(userData) {
    const res = await fetch(`${API_URL_AUTH}/registration`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return res.json();
  },

  async login(userData) {
    const res = await fetch(`${API_URL_AUTH}/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return res.json();
  },

  async check() {
    const res = await fetch(`${API_URL_AUTH}/auth`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    return res.json();
  },
}
