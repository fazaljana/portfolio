const navBarMenuButton = document.querySelector("#menuButton");
const menuList = document.querySelector("#menuList");
const menuItems = document.querySelector("#menuItems");
console.log(menuItems);

navBarMenuButton.addEventListener("click", () => {
	menuList.classList.toggle("hidden");
});

menuItems.addEventListener("click", () => {
	menuList.classList.add("hidden");
});
