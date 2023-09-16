let blogs = [];

let currentBlog = {};

function onChange(event) {
  currentBlog[event.target.name] = event.target.value;
}

function onSubmit(event) {
  event.preventDefault();

  createCard();
}

function createCard() {
  const blogContainer = document.querySelector("#blog-container");
  const newCard = document.createElement("article");

  newCard.classList.add("blog-card");

  newCard.innerHTML = `
        <header>
              <h3>${currentBlog.title}</h3>
          </header>
          <main>
              <p class="sub-title">${currentBlog["sub-title"]}</p>
              <p class="description">${currentBlog.description}</p>
          </main>
          <footer>
              Author - <span class="author">${currentBlog.author}<span>
          </footer>
    `;

  blogContainer.appendChild(newCard);
  alert("The blog was submitted");
  currentBlog = {};
}

document.addEventListener("DOMContentLoaded", () => {
  const blogForm = document.getElementById("blog-form");
  const formButton = document.getElementById("submit-button");

  blogForm.addEventListener("change", onChange);
  formButton.addEventListener("click", onSubmit);
});
