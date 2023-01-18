const currentUrl = new URL(window.location.href);
const id = new URLSearchParams(currentUrl.search).get("id");
window.addEventListener("load", () => {
  getAlbum();
});

const ceateAlbum = (myAlbum) => {
  const continer = document.getElementById("continer");

  const section = document.createElement("div");
  continer.append(section);
  section.setAttribute("class", "albums");
  section.setAttribute("id", myAlbum.id);

  const album = document.createElement("p");
  section.append(album);
  section.innerHTML = myAlbum.title;

  album.setAttribute("class", "albumEle");
};

const getAlbum = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  data.forEach((album) => {
    if (album.userId == id) {
      ceateAlbum(album);
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.matches(".albums")) {
      const albumId = event.target.id;
      location.href = "photo.html?id=" + `${albumId}`;
      return;
    }
  });
};
