const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.innerHTML = output;
  }, 1000);
};
const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("error: something is missing");
      }
    }, 2000);
  });
};

// createPost({ title: "post three", body: "this is psot three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// async/await
// async function init() {
//   createPost({ title: "post three", body: "this is psot three" });

//   getPosts();
// }
// init();

// async/await/fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}
fetchUsers();

// promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
