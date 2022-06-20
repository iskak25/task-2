// let postsList = document.querySelector(".posts_list");

// let btnPosts = document.querySelector(".posts_get_posts");

// const state = {
//   posts: [],
// };

// const createPost = (post, index) => `
// <div class="posts">
// <h1 class="post_id">${post.id}</h1>
//     <h1 class="post_tiile">${post.title}</h1>
//     <div class="post_body">${post.body}</div>
//   </div>
//   `;

// const fillPost = (posts) => {
//   postsList.innerHTML = "";
//   console.log("fhkj");

//   if (posts.length) {
//     posts.forEach(
//       (post, index) => (postsList.innerHTML += createPost(post, index))
//     );
//   }
// };

// function getPosts() {
//   console.log("ghbjnk");

//   return fetch("https://jsonplaceholder.typicode.com/posts?", {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8 ",
//     },
//   })
//     .then((res) => res.json())
//     .then(
//       (posts) => (console.log(posts), (state.posts = state.posts.concat(posts)))
//     );
// }

// btnPosts.addEventListener("click", async () => {
//   fillPost(state.posts);
//   await getPosts();
// });

// end 1

// start 2

let APIKEY = "GA902ccSNaYV5Dbygm91rcsa5K1luNyp";

document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
