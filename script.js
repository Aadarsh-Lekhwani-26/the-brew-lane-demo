// MenuMint Category Filter

const tabs = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".menu-item");
const categoryTitle = document.getElementById("category-title");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    // Update category title
    categoryTitle.textContent = tab.textContent;

    items.forEach(item => {
      if(category === "all" || item.dataset.category === category){
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});


// Expand Menu Items

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});



const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});



document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("active");
});
});