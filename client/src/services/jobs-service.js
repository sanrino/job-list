const API_URL = 'http://localhost:3000';

export async function fetchAllJobsService(filters) {
  const res = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    body: JSON.stringify(filters),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}

export async function createJobService(dataJob) {
  const res = await fetch(`${API_URL}/create`, {
    method: "POST",
    body: JSON.stringify(dataJob),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json();
}