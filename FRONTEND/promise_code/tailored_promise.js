// const fetchPosts = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("network response was not ok");
//       }
//       return response.json();
//     })
//     .then((posts) => {
//       console.log("fetched posts: ", posts);
//     })
//     .catch((error) => {
//       console.error("Error fetching posts: ", error);
//     });
// };

// fetchPosts();

// getting a particukar post
const fetchPostById = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("network response was not ok");
      }
      return response.json();
    })
    .then((post) => {
      console.log("fetched post: ", post);
    })
    .catch((error) => {
      console.error("Error fetching the post: ", error);
    });
};

fetchPostById(5);
