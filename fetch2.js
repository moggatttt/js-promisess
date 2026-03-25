async function getposts() {
  try {
    const res = await fetch ( "https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    posts.forEach(posts => {
      console.log(posts);
    });

  } catch (err) {
    console.log('error', err);
  }
}

getposts();