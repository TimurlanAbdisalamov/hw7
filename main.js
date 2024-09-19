document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const userContainer = document.getElementById('user-container');
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        loader.style.display = 'none'; 
        userContainer.style.display = 'block'; 
  
        users.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
            <p>Company: ${user.company.name}</p>
          `;
          userContainer.appendChild(userDiv);
        });
      })
      .catch(error => {
        loader.innerText = 'Error loading data';
      });
  });
  