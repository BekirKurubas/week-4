function homePage () {
  const mainContainer = document.querySelector("#main");
  mainContainer.innerHTML = `
    
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
              <a class="navbar-brand" id="navbar-bloggy" href="/">Bloggy</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link" aria-current="page" id="navbar-home" href="/">Home</a>
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
      <div>
          <h1 class="header">Bloggy</h1>
          <h1 class="subtitle">Where words come to life</h1>
          <img class="image" src="../client/assets/photos/Fullstack-Web-Programming.png" alt="Fullstack-Web-Programming.png">
      </div>
      
             
      <div class="row mt-3">
          <div class="d-grid gap-7 col-7">
              <button id="create-button" class="btn btn-primary ">Create</button>
          </div>
          <div class="d-grid gap-7 col-7">
              <button id="view-posts-button" class="btn btn-primary">View Posts</button>
          </div>
      </div>
  
      <div class="card" style="width: 1400px; height: 190px ;font-size: larger;">        
          <div class="card-header">Quote</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Bloggy is the ultimate blogging platform for anyone looking to express themselves in the digital world. Whether you're a seasoned writer or a novice blogger, Bloggy has everything you need to create and publish your content. With its intuitive interface and easy-to-use tools, Bloggy makes it simple to write, edit, and format your blog posts. Plus, with a wide range of customizable templates and themes, you can make your blog truly your own. So why wait? Sign up for Bloggy today and start sharing your thoughts, ideas, and experiences with the world! </li>         
          </ul>
        </div>     
  `;

  document.addEventListener("DOMContentLoaded", () => {
      const postsButton = document.getElementById("posts-button");
      const createButton = document.getElementById("create-button");
      const navCreate = document.getElementById("nav-create")
    
      postsButton.addEventListener("click", () => {
        fetch("http://localhost:8080/api/v1/posts")
          .then(response => response.json())
          .then(data => {
            console.log(data);             
          })
          .catch(error => console.error("Error fetching posts:", error));
      });
    
      createButton.addEventListener("click", () => {        
        const postData = {
          title: "New Blog Post",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };
        
          fetch("http://localhost:8080/api/v1/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data); 
          })
          .catch(error => console.error("Error creating post:", error));
      });
    });
};

export default homePage; 