const posts = [
  { title: "post one", body: "this is post one  " },
  { title: "post two", body: "this is post two  " },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000); // Correctly placed inside the function, timeout only run once
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Failed to create post");
      }
    }, 2000); // 2s
  });
}

// createPost({ title: "post three", body: "this is post three" })
//   .then(getPosts)
//   .catch((error) => cons(error));

const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new promise((resolve, reject) => {
  setTimeout(resolve, "I'm a promise!", 2000);
});

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);
