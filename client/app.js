import homePage from './assets/homePage.js';
import createPage from './assets/createPage.js';
import postsPage from './assets/postsPage.js';


document.addEventListener('DOMContentLoaded', () => {
  homePage();
  
  const createButton = document.querySelector('#create-button');
  createButton.addEventListener('click', () => {
    createPage();
  });

  const viewPosts = document.querySelector('#view-posts-button');
  viewPosts.addEventListener('click', () => {
    postsPage();
  });

  const navbarHome = document.querySelector('#navbar-home');
  navbarHome.addEventListener('click', () => {
    homePage();
  });
  
});                                                      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* 
  
  
  
  
  
  
  
  
  const contentDiv = document.getElementById('content');
  
  const postsLink = document.getElementById('postsLink');
  const createLink = document.getElementById('create-button');
  
  postsLink.addEventListener('click', async () => {
    const posts = await fetchPosts();
    if (posts.length > 0) {
      postsPage(posts);
    } else {
      contentDiv.innerHTML = '<h2>Posts</h2><p>No posts available.</p>';
    }
  });

createLink.addEventListener('click', () => {
    createPage();
  }); 
}); 

async function fetchPosts() {
  const response = await fetch('http://localhost:8080/api/v1/posts');
  const posts = await response.json();
  return posts;
}

async function createPost(postData) {
  const response = await fetch('http://localhost:8080/api/v1/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  return await response.json();
}


 */











/* document.addEventListener("DOMContentLoaded", () => {
    homePage()
    
    

}); */
