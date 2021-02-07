/* ----- Synchronous ------*/

const s = document.querySelector(".s");
s.textContent = "My name is Dilson!";
alert("Text set!"); // the entire code will stop until alert is closed.
s.style.color = "red";

/* ----- Asynchronous ------*/
const p = document.querySelector(".p");
setTimeout(function () {
  // handle the asynchronous works
  p.textContent = "My name is Dilson!";
}, 5000);
p.style.color = "red";

// listen for a load event
const img = document.querySelector("img");
img.src = "dog.jpg"; // this is Asynchronous
img.addEventListener("load", function () {
  img.classList.add("fadeIn");
});
p.style.width = "300px";

// listen for a load event

// // fetch() users Data
// API endpoint
const api = "https://jsonplaceholder.typicode.com";
const fetchUser = function (id) {
  fetch(api + "/users")
    .then((response) => response.json())
    .then((data) => {
      const getUsersClassName = document.querySelector(".user");
      // console.log(data); //returns data in array format

      Object.keys(data).map(function (e) {
        if (data[e].id === id) {
          const usersHTML = `
                  <h1>${data[e].name}</h1>
                  <p>ID : ${id}</p>
                  <p>Username : ${data[e].username}</p>
                  <p>Email : ${data[e].email}</p>
                  <p>Address : ${data[e].address.street}, ${data[e].address.suite}, ${data[e].address.city} city, zipcode:${data[e].address.zipcode}</p>
                  <p>Phone : ${data[e].phone}</p>
                  <p>Website : ${data[e].website}</p>
                  <p>Company : ${data[e].company.name}, ${data[e].company.catchPhrase}, ${data[e].company.bs}</p>
          `;
          return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
        }
        return "";
      });
    })
    // will catch error in promises
    .catch((err) => {
      console.log(`${err} Error Error Error`);
      // can render err using html.insertAdjacentText("beforeend", usersHTML);
    })
    .finally(() => {
      // Always being even promise is fullfilled or not
    });
};
fetchUser(1);
