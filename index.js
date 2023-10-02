// Add your code here

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })
    })
    .then(response => response.json())
    .then(data => handleResponse(data))
    .catch(error => handleError(error))
  }
  
submitData("steve", "steve@steve.com")

  function handleResponse(response) {
    const body = document.querySelector('body')
    const responseID = response.id
    let p = document.createElement('p')
    p.textContent = responseID
    body.appendChild(p)
  }
  
  function handleError(error) {
    const body = document.querySelector('body')
    const errorMessage = error.message
    let p = document.createElement('p')
    p.textContent = errorMessage
    body.appendChild(p)
  }










