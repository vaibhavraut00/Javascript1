let blogs = [];

let currentBlog = {};

function onChange(event) {
  currentBlog[event.target.name] = event.target.value;
}

document.addEventListener("DOMContentLoaded", () => {
  const blogForm = document.getElementById("blog-form");

  blogForm.addEventListener("change", onChange);
});
