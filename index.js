function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(data => {
      const userId = data.id;
      const userIdElement = document.createElement('p');
      userIdElement.textContent = userId;
      document.body.appendChild(userIdElement);
    })
    .catch(error => {
      const errorMessage = error.message;
      const errorElement = document.createElement('p');
      errorElement.textContent = errorMessage;
      document.body.appendChild(errorElement);
    });
}


submitData('John Doe', 'johndoe@example.com');


export { submitData };
