function searchData() {
  const searchData = document.querySelector("#btn-search-data");
  searchData.addEventListener("click", () => {
    menu.classList.remove("active");
    menuIcons.classList.remove("active");
    containerMain.classList.remove("active");
    containerText.classList.remove("active");
    containerMidia.classList.remove("active");
  });
}

searchData();