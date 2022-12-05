function activeContainerText(title, paragraph) {
  const titleContainerText = document.getElementById("title-container-text");
  const descriptionContainerText = document.getElementById(
    "description-container-text"
  );
  containerText.classList.add("active");
  titleContainerText.innerHTML = title;
  descriptionContainerText.innerHTML = paragraph;
}
