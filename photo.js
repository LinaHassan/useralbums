const currentUrl = new URL(window.location.href);
const albumid = new URLSearchParams(currentUrl.search).get("id");
window.addEventListener("load", () => {
  getAllPhoto();
});

const ceatePhoto = (myphoto) => {
  const continer = document.getElementById("continer");

  const card = document.createElement("div");
  card.setAttribute("class", "allphoto");

  const title = document.createElement("p");
  title.innerHTML = myphoto.title;

  const photo = document.createElement("img");
  photo.setAttribute("src", myphoto.url);
  photo.setAttribute("alt", " pic");

  continer.append(card);
  card.append(title);
  card.append(photo);
};

const getAllPhoto = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  data.forEach((photo) => {
    if (photo.albumId == albumid) {
      ceatePhoto(photo);
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};
