const API_URL = 'http://localhost:3000/jobs';

export const JobService = {
  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`)
    if (!res.ok) throw new Error('Failed to fetch todos!')
    return res.json();
  },

  async getAll(filters) {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(filters),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json()
  },

  async create(dataJob) {
    const res = await fetch(`${API_URL}/create`, {
      method: "POST",
      body: JSON.stringify(dataJob),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json();
  },

  async update(dataJob) {
    const res = await fetch(`${API_URL}/update/${dataJob?.id}`, {
      method: "PUT",
      body: JSON.stringify(dataJob),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json();
  }
}
