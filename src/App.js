import "./styles.css";

function greeting() {
  const date = new Date();
  // const year = date.getFullYear();
  const hour = date.getHours();
  let greetings = "";

  if (hour > 12 && hour < 18) {
    greetings = "Good Afternoon";
  } else if (hour >= 18 && hour < 24) {
    greetings = "Good Evening";
  } else {
    greetings = "Good Morning";
  }
  return greetings;
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// USING AJAX http Request
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// API endpoint
const api = "https://jsonplaceholder.typicode.com";

// ======= Process User Data ===============
const req_user_data = new XMLHttpRequest();
req_user_data.open("GET", api + "/users");
req_user_data.send();

const selectUser = function (id) {
  req_user_data.addEventListener("load", function () {
    const getUsersClassName = document.querySelector(".user");
    // console.log(this.responseText);
    // console.log(this.responseType);
    const data = JSON.parse(req_user_data.responseText);
    let filterPost = document.querySelector(".filterPost");
    let filterComment = document.querySelector(".filterComment");
    let name = "";

    Object.keys(data).map(function (e) {
      if (data[e].id === id) {
        name = data[e].name;
        const usersHTML = `
            <h1>${data[e].name}</h1>
            <p>ID : ${data[e].id}</p>
            <p>Username : ${data[e].username}</p>
            <p>Email : ${data[e].email}</p>
            <p>Address : ${data[e].address.street}, ${data[e].address.suite}, ${data[e].address.city} city, zipcode:${data[e].address.zipcode}</p>
            <p>Phone : ${data[e].phone}</p>
            <p>Website : ${data[e].website}</p>
            <p>Company : ${data[e].company.name}, ${data[e].company.catchPhrase}, ${data[e].company.bs}</p>
      `;
        return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
      }
      return (
        (filterPost.innerHTML = `Filter ${name} posts.`) &&
        (filterComment.innerHTML = `Filter ${name} comments.`)
      );
    });
  });
};

// ======= Process Post Data ===============
const req_post_data = new XMLHttpRequest();
req_post_data.open("GET", api + "/posts");
req_post_data.send();

const getPost = function (id) {
  req_post_data.addEventListener("load", function () {
    const getUsersClassName = document.querySelector(".post");
    // console.log(this.responseText);
    // console.log(this.responseType);
    const data = JSON.parse(req_post_data.responseText);

    Object.keys(data).map(function (e) {
      if (data[e].userId === id) {
        const usersHTML = `
            <h4>ID[${data[e].userId}] Post[${data[e].id}] Title[ ${data[e].title} ]</h4>
            <p>Content:<br> ${data[e].body}</p>
            <p>---------------------------------------------------------------------------------------</p>
        `;
        return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
      }
      return "";
    });
  });
};

// ======= Process Comments Data ===============
const req_comment_data = new XMLHttpRequest();
req_comment_data.open("GET", api + "/comments");
req_comment_data.send();

const getComment = function (id) {
  req_comment_data.addEventListener("load", function () {
    const getUsersClassName = document.querySelector(".comment");
    // console.log(this.responseText);
    // console.log(this.responseType);
    const data = JSON.parse(req_comment_data.responseText);

    Object.keys(data).map(function (e) {
      if (data[e].id === id) {
        const usersHTML = `
          <h4>ID[${data[e].id}] CommentID[${data[e].postId}] CommentTitle[ ${data[e].name} ]</h4>
          <p>Email: ${data[e].email}</p>
          <p>Content:<br>${data[e].body}</p>
          <p>---------------------------------------------------------------------------------------</p>
        `;
        return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
      }
      return "";
    });
  });
};

// Using fetch() function()
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// // fetch() users Data
// const fetchUser = function (id) {
//   fetch(api + "/users")
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       const getUsersClassName = document.querySelector(".user");
//       // console.log(data); //returns data in array format
//       let filterPost = document.querySelector(".filterPost");
//       let filterComment = document.querySelector(".filterComment");
//       let name = "";

//       Object.keys(data).map(function (e) {
//         if (data[e].id === id) {
//           name = data[e].name;
//           const usersHTML = `
//                   <h1>${data[e].name}</h1>
//                   <p>ID : ${id}</p>
//                   <p>Username : ${data[e].username}</p>
//                   <p>Email : ${data[e].email}</p>
//                   <p>Address : ${data[e].address.street}, ${data[e].address.suite}, ${data[e].address.city} city, zipcode:${data[e].address.zipcode}</p>
//                   <p>Phone : ${data[e].phone}</p>
//                   <p>Website : ${data[e].website}</p>
//                   <p>Company : ${data[e].company.name}, ${data[e].company.catchPhrase}, ${data[e].company.bs}</p>
//           `;
//           return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
//         }
//         return (
//           (filterPost.innerHTML = `Filter ${name} posts.`) &&
//           (filterComment.innerHTML = `Filter ${name} comments.`)
//         );
//       });
//     });
// };

// // fetch() posts Data
// const fetchPost = function (id) {
//   fetch(api + "/posts")
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       const getUsersClassName = document.querySelector(".post");
//       // console.log(data); //returns data in array format

//       Object.keys(data).map(function (e) {
//         if (data[e].userId === id) {
//           const usersHTML = `
//                 <h4>ID[${data[e].userId}] Post[${data[e].id}] Title[ ${data[e].title} ]</h4>
//                 <p>Content:<br> ${data[e].body}</p>
//                 <p>--------------------------------------------------------</p>          `;
//           return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
//         }
//         return "";
//       });
//     });
// };

// // fetch() comments Data
// const fetchComment = function (id) {
//   fetch(api + "/comments")
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       const getUsersClassName = document.querySelector(".comment");
//       // console.log(data); //returns data in array format

//       Object.keys(data).map(function (e) {
//         if (data[e].id === id) {
//           const usersHTML = `
//                   <h4>ID[${data[e].id}] CommentID[${data[e].postId}] CommentTitle[ ${data[e].name} ]</h4>
//                   <p>Email: ${data[e].email}</p>
//                   <p>Content:<br>${data[e].body}</p>
//                   <p>--------------------------------------------------------</p>
//           `;
//           return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
//         }
//         return "";
//       });
//     });
// };

// Arrow function()
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// // fetch() users Data
// const fetchUser = function (id) {
//   fetch(api + "/users")
//     .then((response) => response.json())
//     .then((data) => {
//       const getUsersClassName = document.querySelector(".user");
//       // console.log(data); //returns data in array format
//       let filterPost = document.querySelector(".filterPost");
//       let filterComment = document.querySelector(".filterComment");
//       let name = "";

//       Object.keys(data).map(function (e) {
//         if (data[e].id === id) {
//           name = data[e].name;
//           const usersHTML = `
//                   <h1>${data[e].name}</h1>
//                   <p>ID : ${data[e].id}</p>
//                   <p>Username : ${data[e].username}</p>
//                   <p>Email : ${data[e].email}</p>
//                   <p>Address : ${data[e].address.street}, ${data[e].address.suite}, ${data[e].address.city} city, zipcode:${data[e].address.zipcode}</p>
//                   <p>Phone : ${data[e].phone}</p>
//                   <p>Website : ${data[e].website}</p>
//                   <p>Company : ${data[e].company.name}, ${data[e].company.catchPhrase}, ${data[e].company.bs}</p>
//           `;
//           return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
//         }
//         return (
//           (filterPost.innerHTML = `Filter ${name} posts.`) &&
//           (filterComment.innerHTML = `Filter ${name} comments.`)
//         );
//       });
//     });
// };

// // fetch() posts Data
// const fetchPost = function (id) {
//   fetch(api + "/posts")
//     .then((response) => response.json())
//     .then((data) => {
//       const getUsersClassName = document.querySelector(".post");
//       // console.log(data); //returns data in array format

//       Object.keys(data).map(function (e) {
//         if (data[e].userId === id) {
//           const usersHTML = `
//                 <h4>ID[${data[e].userId}] Post[${data[e].id}] Title[ ${data[e].title} ]</h4>
//                 <p>Content:<br> ${data[e].body}</p>
//                 <p>--------------------------------------------------------</p>          `;
//           return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
//         }
//         return "";
//       });
//     });
// };

// // fetch() comments Data
// const fetchComment = function (id) {
//   fetch(api + "/comments")
//     .then((response) => response.json())
//     .then((data) => {
//       const getUsersClassName = document.querySelector(".comment");
//       // console.log(data); //returns data in array format

//       Object.keys(data).map(function (e) {
//         if (data[e].id === id) {
//           const usersHTML = `
//                   <h4>ID[${data[e].id}] CommentID[${data[e].postId}] CommentTitle[ ${data[e].name} ]</h4>
//                   <p>Email: ${data[e].email}</p>
//                   <p>Content:<br>${data[e].body}</p>
//                   <p>--------------------------------------------------------</p>
//           `;
//           return getUsersClassName.insertAdjacentHTML("beforeend", usersHTML);
//         }
//         return "";
//       });
//     });
// };

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let selector = 9;
/* fetch() implementation */
// fetchUser(selector);
// fetchPost(selector);
// fetchComment(selector);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* AJAX implementation */
selectUser(selector);
getPost(selector);
getComment(selector);

// App visualization
export default function App() {
  return (
    <div className="App">
      <div>
        <h1 className="Heading">{`Welcome to React Dilson - ${greeting()}`}</h1>
      </div>

      {/* insert here users data */}
      <div className="user"></div>
      <p></p>

      {/* insert here post data */}
      <div className="filterPost"></div>
      <div className="post"></div>
      <p></p>

      {/* insert here comment data */}
      <div className="filterComment"></div>
      <div className="comment"></div>
    </div>
  );
}
