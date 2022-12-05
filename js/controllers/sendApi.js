const btnDate = document.querySelector("#btn-date");
const btnImg = document.querySelector("#btn-img");
const btnText = document.querySelector("#btn-text");
const inputDate = document.getElementById("date");
const containerMain = document.querySelector(".container");
const containerText = document.querySelector(".container-text");
const containerMidia = document.querySelector(".container-midia");
const menuIcons = document.querySelector(".menu-icons");
const menu = document.querySelector(".menu");
console.log(inputDate);
btnDate.addEventListener("click", async () => {
  const dateSelect = inputDate.value;
  const url = `https://api.nasa.gov/planetary/apod?date=${dateSelect}&api_key=kt4gU4tiJMydfcDDp9hk7sYsKbNhonGeycsaTKNY`;
  if (dateSelect > dateMax || dateSelect < inputDate.min) {
    menu.classList.add("erro");
  } else {
    menu.classList.remove("erro")
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        activeContainerText(res.title, res.explanation);

        btnText.addEventListener("click", () => {
          containerMidia.classList.remove("active");
          containerText.classList.add("active");
        });

        btnImg.addEventListener("click", () => {
          containerText.classList.remove("active");
          activeContainerMidia(
            res.media_type,
            res.url,
            res.explanation,
            res.title
          );
        });
      });

    activeMenuIcons();
    activeContainerMain();
  }
});
