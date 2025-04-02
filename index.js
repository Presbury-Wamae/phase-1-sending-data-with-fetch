// Add your code here

function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch('http://localhost:3000/users', config)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Append the new id to the DOM
        const idElement = document.createElement('div');
        idElement.textContent = data.id;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        // Append the error message to the DOM
        const errorElement = document.createElement('div');
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
  }