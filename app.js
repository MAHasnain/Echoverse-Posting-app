// HTML elements in JS vars
const postCreationBtn = document.querySelector("#post-creation-btn");
const postingBtn = document.querySelector("#posting-btn");
const postBgImg = document.querySelector(".post_bg-img")
const postCreationForm = document.querySelector(".post-creation-form")
const post_username = document.querySelector("#post-username")
const username_display = document.querySelector("#username-display");
const post_time = document.querySelector("#post_time")
const card_text_content = document.getElementById("card-text_content");
const post_text_area = document.querySelector("#post-text_area")
const featured_posts = document.querySelector("#featured_echos");
const allPosts = document.getElementById("all_posts")



// const d = new Date();
// const current_time = d.toLocaleTimeString();


let imgId = 0
let bg_images = [
    { id: 1, img: `<div class="img"><img src="./images/bg_img (1).jpg" alt="" width="60px"></div>` },
    { id: 2, img: `<div class="img"><img src="./images/bg_img (1).png" alt="" width="60px"></div>` },
    { id: 3, img: `<div class="img"><img src="./images/bg_img (2).jpg" alt="" width="60px"></div>` },
    { id: 4, img: `<div class="img"><img src="./images/bg_img (2).png" alt="" width="60px"></div>` },
    { id: 5, img: `<div class="img"><img src="./images/bg_img (3).png" alt="" width="60px"></div>` }
]
let posts = [];
let id = 0
// Functions
function startPosting() {
    event.preventDefault();
    // bgImgLoadPostForm();
    postCreationForm.classList.remove("hidden")
}

function postCreation() {
    event.preventDefault();
    let current_time = moment().format('MMMM Do YYYY, h:mm:ss a');

    if (post_text_area.value === "") {
        return;
    }
    // id = id++;
    let post = {
        id: id++,
        user_name: post_username.value || "Anonymous",
        post_time: current_time,
        text_content: post_text_area.value,
        bg_img: "",
        post_comment: []
    }
    posts.push(post);
    console.log(posts);
    post_username.value = "";
    post_text_area.value = "";

    postCardDisplay()
    postCreationForm.classList.add("hidden")

}

// bg_images[imgId]
function bgImgLoadPostForm() {
    event.preventDefault()
    for (let i = 0; i <= bg_images.length; i++) {
        postBgImg.innerHTML += bg_images[i].img
    };
}

function postCardDisplay() {
    event.preventDefault();
    featured_posts.classList.remove("hidden");

    allPosts.innerHTML = "";
    for (let i = 0; i <= posts.length; i++) {

        allPosts.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="./images/bg_img (1).jpg" width="265px"  alt="">
          <div class="card-body">
            <div class="user_dets">
              <div class="user-img-circle"></div>
              <div class="name_time">
                <h5 class="card-title" id="username-display">${posts[i].user_name}</h5>
                <span id="post_time" class="post_time">${posts[i].post_time}</span>
              </div>
            </div>

            <p class="card-text" id="card-text_content">${posts[i].text_content}</p>
            <div class="btns">
              <a href="" id="likeBtn" onclick="addLike()" class="btn "><span class="material-symbols-outlined">
                  thumb_up
                </span>like</a>
              <a onclick="addComment(${i})" id="comment-btn" class="btn"><span class="material-symbols-outlined">
                  chat
                </span>comment</a>
            </div>
            <div class="users_comments" id="users_comment_Sec_${i}">
                <div id="1">
                </div>
            </div>
          </div>
        </div>`;
    }
}

// function bgImageSelection() {}


function addLike() {
    const likeBtn = document.getElementById("likeBtn");
    event.preventDefault();
    likeBtn.style.backgroundColor = "#7F00FF"
    likeBtn.style.color = "#E5E7EB"
}

function addComment(comment_id = 0) {
    const comment_btn = document.querySelector("#comment-btn");
    const userCommentsDiv = document.getElementById("users_comment_Sec_" + comment_id);

    event.preventDefault();

    let commentInputBox = document.createElement('div');
    commentInputBox.classList.add("comment_input-and-btn");
    commentInputBox.id = "comment_input-and-btn";
    commentInputBox.innerHTML = `<input id="comment_userName" type="text">
        <input id="comment_text" type="text">
        <button onClick="sendComment(${comment_id})"><span class="material-symbols-outlined">send</span></button>`
    userCommentsDiv.insertBefore(commentInputBox, userCommentsDiv.firstChild);
    comment_btn.classList.add("disabled");
}

function sendComment(comment_id_send = 0) {
    // hide the input div
    // taking data from input and store in array and objects 
    // display data at the DOM
    const commentUsername = document.querySelector("#comment-username");
    const commentText = document.querySelector("#comment-text");
    const commentUsernameInput = document.querySelector("#comment_userName");
    const commentTxtInput = document.querySelector("#comment_text");

    event.preventDefault();

    if (commentTxtInput.value === "") {
        return;
    }
    let id = 0;
    for (let i = 0; i < posts.length; i++) {
        id++;
        posts[i].post_comment.push({ id: id, comment_username: commentUsernameInput.value || "Anonymous", comment_text: commentTxtInput.value });
    }

    let comment_Username = commentUsernameInput.value == '' ? 'Anonymous' : commentUsernameInput.value;
    // for (let i = 0; i < posts.length; i++) {
    // commentUsername.textContent = `${posts[i].post_comment[i].comment_username}`
    // commentText.textContent = `${posts[i].post_comment[i].comment_text}`
    let comment_id = document.getElementById('users_comment_Sec_' + comment_id_send).children.length;
    var comment_div = document.createElement('div');
    comment_div.id = comment_id - 1;
    comment_div.innerHTML = `<p class="comment" id="comment-username">${comment_Username}</p>
                    <p class="comment" id="comment-text">${commentTxtInput.value}</p>`;
    document.getElementById('users_comment_Sec_' + comment_id_send).append(comment_div);
    document.querySelector("#comment_input-and-btn").classList.add("hidden")
    document.querySelector("#comment-btn").classList.remove("disabled");
    // }
    commentUsernameInput.value = "";
    commentTxtInput.value = "";
}

function editComment() {
    event.preventDefault();
}

// function updateComment() {}