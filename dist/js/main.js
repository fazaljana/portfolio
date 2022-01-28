const navBarMenuButton = document.querySelector("#menuButton");
const menuList = document.querySelector("#menuList");
const menuItems = document.querySelector("#menuItems");
const navbarItems = document.querySelectorAll("nav ul li a");
console.log(navbarItems);

navBarMenuButton.addEventListener("click", () => {
	menuList.classList.toggle("hidden");
});

menuItems.addEventListener("click", () => {
	menuList.classList.add("hidden");
});
