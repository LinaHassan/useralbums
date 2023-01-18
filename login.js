const email = document.getElementById("email");
const btn = document.getElementById("btn");
const error = document.getElementById("error");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!email.value) {
    error.innerHTML = "Please enter your email.";
    return;
  }
  getUser();
});

const getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  const user = data.find((item) => item.email == email.value);

  if (user) {
    location.href = "album.html?id=" + `${user.id}`;
  } else {
    email.innerHTML = "";

    error.innerHTML = "Your Email is wrong please try again";
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};
