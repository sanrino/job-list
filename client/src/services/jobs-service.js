const API_URL_JOBS = 'https://job-list-server.vercel.app/jobs';

export const JobService = {
  async getById(id) {
    const res = await fetch(`${API_URL_JOBS}/${id}`)
    if (!res.ok) throw new Error('Failed to fetch todos!')
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

  async create(dataJob) {
    const res = await fetch(`${API_URL_JOBS}/create`, {
      method: "POST",
      body: JSON.stringify(dataJob),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json();
  },

  async update(dataJob) {
    const res = await fetch(`${API_URL_JOBS}/update/${dataJob?.id}`, {
      method: "PUT",
      body: JSON.stringify(dataJob),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json();
  }
}
