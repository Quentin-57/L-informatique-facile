function getPosts() {
  return JSON.parse(localStorage.getItem("posts") || "[]");
}

function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// afficher posts
function displayPosts() {
  let posts = getPosts();
  let container = document.getElementById("posts");

  if (!container) return;

  container.innerHTML = "";

  posts.forEach(p => {
    container.innerHTML += `
      <div class="post">
        <h2>${p.title}</h2>
        <p>${p.content}</p>
      </div>
    `;
  });
}

// ajouter post
function addPost(title, content) {
  let posts = getPosts();

  posts.push({
    title,
    content
  });

  savePosts(posts);
}
