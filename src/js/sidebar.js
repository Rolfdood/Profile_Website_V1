document.addEventListener("DOMContentLoaded", () => {
  fetch("/src/components/sidebar.html") // load sidebar from components folder
    .then(response => response.text())
    .then(data => {
      document.getElementById("sidebar").innerHTML = data;

      // Highlight active link
      const links = document.querySelectorAll(".sidebar a");
      links.forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });
    })
    .catch(error => console.error("Sidebar load error:", error));
});
