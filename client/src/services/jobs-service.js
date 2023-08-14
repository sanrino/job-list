const API_URL = '';

export const JobService = {
  async getById(id) {

    const res = await fetch(`${API_URL}/job/${id}`)

    if (!res.ok) throw new Error('Failed to fetch todos!')

    return res.json();
  },

  async getAll(filters) {
    const res = await fetch(`${API_URL}/jobs`, {
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

// export async function fetchAllJobsService(filters) {
//   const res = await fetch(`${API_URL}/jobs`, {
//     method: "POST",
//     body: JSON.stringify(filters),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   return res.json()
// }

// export async function fetchJobIdService(id) {

//   const res = await fetch(`${API_URL}/job/${id}`)

//   if (!res.ok) throw new Error('Failed to fetch todos!')

//   return res.json();
// }

// export async function createJobService(dataJob) {
//   const res = await fetch(`${API_URL}/create`, {
//     method: "POST",
//     body: JSON.stringify(dataJob),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   return res.json();
// }

// export async function updatedJobService(dataJob) {

//   const res = await fetch(`${API_URL}/update/${dataJob?.id}`, {
//     method: "PUT",
//     body: JSON.stringify(dataJob),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

//   return res.json();
// }