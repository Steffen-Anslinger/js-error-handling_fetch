console.clear();

const userElement = document.querySelector(".user");
const errorMessage = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
      errorMessage.textContent = "";
    } catch (error) {
      userElement.innerHTML = "";
      errorMessage.textContent = "Could not be found - please check URL";
    }
  })
);
