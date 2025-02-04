const postParent = document.getElementById("postparent");

const postsList = [];
const fetchComments = () => {
  return fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Network response failed, check your internet connection"
        );
      }
      return response.json();
    })
    .then((comments) => {
      comments.forEach((comment) => {
        const li = document.createElement("li");
        postsList.push(li);
        li.innerHTML = `
          <div class="postwrapper">
          <h3>${comment.name}</h3>
          <p>${comment.email}</p>
          <p>${comment.body}</p>
          </div>
          `;
        postParent.appendChild(li);
      });
    })
    .catch((error) => console.log(error));
};

fetchComments();
