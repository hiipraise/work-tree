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
  
  function createPost(post, callback) {
    setTimeout(() => {
      posts.push(post);
      callback(); // Correctly calls the callback function
    }, 2000); // 2s
  }
  
  createPost({ title: "post three", body: "this is post three" }, getPosts); // Correctly passes the getPosts function