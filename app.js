const current_time = new Date();
var posts = [
    {
        id: Date.now,
        user_name: "anonymous",
        text_content: "lorem ipsum",
        bg_img: "img.jpg"
    },
    {
        id: Date.now,
        user_name: "anonymous",
        post_time: current_time.toLocaleTimeString(),
        text_content: "lorem ipsum",
        bg_img: "img.jpg"
    },
]