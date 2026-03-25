async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();




resolve promise

let promise1 = new Promise((resolve, reject) => {
  resolve("Hello, Promise!");
});

promise1.then((result) => {
  console.log(result);
});



reject promise

let promise2 = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

promise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });