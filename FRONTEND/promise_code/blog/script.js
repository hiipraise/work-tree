// we nned a function that help us get all posts
// when we get the post we format it

const postParent = document.getElementById("postparent");

const postsList = [];

const fetchPosts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Network response failed, check your internet connection"
        );
      }
      return response.json();
    })
    .then((posts) => {
      posts.forEach((post) => {
        const li = document.createElement("li");
        postsList.push(li);
        li.innerHTML = `
        <div class="postwrapper">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        </div>
        `;
        postParent.appendChild(li);
      });
    })
    .catch((error) => console.log(error));
};

fetchPosts();

const fetchAnotherPost = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/1/comments`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const post = await response.json();
    console.log("fetched another post: ", post);
  } catch (error) {
    return console.log(error);
  }
};

fetchAnotherPost();
const fetchPostComment = () => {
  return fetch(`https://jsonplaceholder.typicode.com/comments`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("network status bad");
      }
      return response.json();
    }
  );
};

fetchPostComment();
