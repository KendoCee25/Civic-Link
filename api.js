export async function fetchOfficials(query) {
    // Simulate an API call using the mock data
    const response = await fetch('../../data/mock-data.json');
    const data = await response.json();
  
    // Filter results based on query (name, issue, or location)
    return data.filter(official =>
      official.name.toLowerCase().includes(query.toLowerCase()) ||
      official.issue.toLowerCase().includes(query.toLowerCase()) ||
      official.location.toLowerCase().includes(query.toLowerCase())
    );
  }