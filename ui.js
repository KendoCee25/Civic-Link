export function renderResults(data) {
    const container = document.getElementById('results');
    if (!data.length) {
      container.innerHTML = '<p>No officials found.</p>';
      return;
    }
  
    container.innerHTML = data.map(item => `
      <div style="padding: 10px; border-bottom: 1px solid #ccc;">
        <strong>${item.name}</strong> - ${item.title}<br/>
        <em>${item.location}</em><br/>
        <span>Issue: ${item.issue}</span><br/>
        <small>Last Verified: ${item.verified}</small>
      </div>
    `).join('');
  }