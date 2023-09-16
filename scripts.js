let blogsToRender = [];

let currentBlog = {};

function onChange(event) {
  currentBlog[event.target.name] = event.target.value;
}

function onSubmit(event) {
  event.preventDefault();

  blogsToRender = [...blogsToRender, currentBlog];

  addCurrentBlogToBlogContainer();
  currentBlog = {};
  alert("Blog was added!");
}

function addCurrentBlogToBlogContainer() {
  const blogContainer = document.querySelector("#blog-container");

  const blogCard = document.createElement("article");

  blogCard.classList.add("blog-card");
  const newBlog = `
          <header>
              <h3>${currentBlog.title}</h3>
          </header>
          <main>
              <p class="sub-title">${currentBlog.subTitle}</p>
              <p class="description">${currentBlog.description}</p>
          </main>
          <footer>
              Author - <span class="author">${currentBlog.author}<span>
          </footer>
  `;

  blogCard.innerHTML = newBlog;

  blogContainer.appendChild(blogCard);
}

document.addEventListener("DOMContentLoaded", () => {
  const blogForm = document.getElementById("blog-form");
  const formButton = document.getElementById("submit-button");

  blogForm.addEventListener("change", onChange);
  formButton.addEventListener("click", onSubmit);
});
