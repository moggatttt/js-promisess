async function getuser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.forEach(user => {
      // console.log(user.name);
      document.body.innerHTML += <p>${user.id}-{user.name}</p>
    });

  } catch (err) {
    console.log('error', err);
  }
}

getuser();

async function getuser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.forEach(user => {
      // console.log(user.name);
      document.body.innerHTML += <p>${user.id}-{user.name}</p>
    });

  } catch (err) {
    console.log('error', err);
  }
}

getuser();