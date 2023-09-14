const API_URL_JOBS = `${import.meta.env.VITE_API_URL}/jobs`;

export const JobService = {
  async getById(id) {
    const res = await fetch(`${API_URL_JOBS}/${id}`)
    if (!res.ok) throw new Error('Failed to fetch posts!')
    return res.json();
  },

  async getAll(filters) {
    const res = await fetch(`${API_URL_JOBS}`, {
      method: "POST",
      body: JSON.stringify(filters),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json()
  },

  async getAllJobsUser(id) {
    const res = await fetch(`${API_URL_JOBS}/profile/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return res.json();
  },

  async create({ data, email }) {
    const token = localStorage.getItem('token');

    const res = await fetch(`${API_URL_JOBS}/create`, {
      method: "POST",
      body: JSON.stringify({ data, email }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return res.json();
  },

  async update(dataJob) {
    const token = localStorage.getItem('token');

    const res = await fetch(`${API_URL_JOBS}/update/${dataJob?.id}`, {
      method: "PUT",
      body: JSON.stringify(dataJob),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return res.json();
  },

  async delete(id) {
    const token = localStorage.getItem('token');

    const res = await fetch(`${API_URL_JOBS}/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return res.json();
  }
}
