function activeContainerMidia(media_type, url, description, title) {
  const imgContainerMidia = document.getElementById("img-container-midia");
  const video = document.getElementById("video-container-midia");
  const paragraph = document.getElementById("description-container-midia");
  containerMidia.classList.add("active");
  if (media_type === "image") {
    video.style.display = "none";
    imgContainerMidia.style.display = "block";
    imgContainerMidia.setAttribute("src", url);
    imgContainerMidia.setAttribute("alt", title);
  } else {
    imgContainerMidia.style.display = "none";
    video.style.display = "block";
    video.src = url;
  }

  paragraph.innerHTML = description;
}
