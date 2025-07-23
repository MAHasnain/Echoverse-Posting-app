// HTML elements in JS vars
var postCreationBtn = document.querySelector("#post-creation-btn");
var postingBtn = document.querySelector("#posting-btn");
var likeBtn = document.getElementById("likeBtn");
var postBgImg = document.querySelector(".post_bg-img")
var postCreationForm = document.querySelector(".post-creation-form")

var bg_images = [
    { id: 1, img: `<div class="img"><img src="./images/bg_img (1).jpg" alt="" width="60px"></div>` },
    { id: 2, img: `<div class="img"><img src="./images/bg_img (1).png" alt="" width="60px"></div>` },
    { id: 3, img: `<div class="img"><img src="./images/bg_img (2).jpg" alt="" width="60px"></div>` },
    { id: 4, img: `<div class="img"><img src="./images/bg_img (2).png" alt="" width="60px"></div>` },
    { id: 5, img: `<div class="img"><img src="./images/bg_img (3).png" alt="" width="60px"></div>` }
]

var current_time = new Date();
var posts = [
    
    {
        id: Date.now,
        user_name: "anonymous",
        post_time: current_time.toLocaleTimeString(),
        text_content: "lorem ipsum",
        bg_img: "img.jpg"
    },
]


// Functions

function startPosting() {
    event.preventDefault()
    bgImgLoadPostForm;
    postCreationForm.classList.remove("hidden");
}

function postCreation() {
    event.preventDefault();
}

function bgImgLoadPostForm() {
    event.preventDefault()
    for (let i = 0; i <= bg_images.length; i++) {
        postBgImg.innerHTML += bg_images[i].img
    };
}


// function bgImageSelection() {}


function addLike() {
    event.preventDefault();
    likeBtn.style.backgroundColor = "#7F00FF"
    likeBtn.style.color = "#E5E7EB"
}

function addComment() {
    event.preventDefault();

}

function editComment() {
    event.preventDefault();
}

// function updateComment() {}