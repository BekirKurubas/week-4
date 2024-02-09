function postsPage(posts) {
  const mainContainer = document.querySelector("#main");
  mainContainer.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
      <a class="navbar-brand" id="navbar-bloggy" href="#">Bloggy</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link" aria-current="page" id="navbar-home" href="#">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="navbar-posts" href="#">Posts</a>
              </li>
              <li class="nav-item" >
                  <a class="nav-link" id="navbar-create" href="#">Create</a>
              </li>
          </ul>
      </div>
  </div>
</nav>
<h3 id="posts-page">no posts found..</h3>
`;
}


export default postsPage;
