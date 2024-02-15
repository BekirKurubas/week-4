function createPage() {
  const mainContainer = document.querySelector("#main");
  mainContainer.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid" id="navbar-bloggy">
                <a class="navbar-brand" href="#">Bloggy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav" >
                        <li class="nav-item1" id="navbar-home">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item" id="navbar-posts">
                            <a class="nav-link" href="#">Posts</a>
                        </li>
                        <li class="nav-item" id="navbar-create">
                            <a class="nav-link"  href="#">Create</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <h3 class="create-header">Create new Post</h3>
        <form id="create-post-form">
          <div class="mb-3">
              <label for="table" class="form-label"></label>
              <textarea class="form-control" id="title" rows="1" placeholder="title"></textarea>
          </div>
      
          <div class="mb-3">
              <label for="content" class="form-label"></label>
              <textarea class="form-control" id="content" rows="5" placeholder="content"></textarea>
          </div>
      
          <div class="col-12">
              <button class="btn btn-primary" type="submit" id="submit-button">Submit form</button>
              </div>
        </form>
  `;
  

  const createPostForm = document.getElementById("create-post-form");
  createPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const titleElement = document.getElementById("title");
    const contentElement = document.getElementById("content");
    console.log(contentElement)
    console.log(titleElement)

    if (!!titleElement && !!contentElement) {
      const title = titleElement.value;
      const content = contentElement.value;
      try {
        const response = await fetch('http://localhost:3000/api/v1/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        });
        console.log(JSON.stringify({ title, content }))

        if (response.ok) {
          console.log("Post created successfully!");
          } else {
          console.error("Error creating post:", response.statusText);        
        }
      } catch (error) {
        console.error("Error creating post:", error);         }
      }
  });
}

export default createPage;