const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsListEl = document.querySelector(".posts-list")
let likeBtn = "like-btn.png"

function generatePosts() {
    let postsList = []
    for (let i=0; i<posts.length; i++) {
        postsList += `
            <li>
                <div class="user-container">
                    <img class="profile-img" src="${posts[i].avatar}" alt="${posts[i].name}'s profile picture">
                    <div class="user-info"> 
                        <h1>${posts[i].name}</h1>
                        <h2 class="skinny-text">${posts[i].location}</h2>
                    </div>
                </div>
                <img class="post-img" src="${posts[i].post}" alt="${posts[i].name}'s post" ondblclick="likePost(${i})">
                <img class="btn like-btn" src="${likeBtn}" onclick="likePost(${i})">
                <img class="btn comment-btn" src="images/comment-btn.png">
                <img class="btn share-btn" src="images/share-btn.png">
                <h2 class="bold-text like-counter">${posts[i].likes} likes</h2>
                <h1 class="img-description"><span class="username">${posts[i].username}</span> <span class="skinny-text">${posts[i].comment}</span></h1>
            </li>
        `
    }
    postsListEl.innerHTML = postsList
}

generatePosts()

const likeBtnEl = document.querySelector(".like-btn")

function likePost(p) {
    if( likeBtn === "like-btn.png" ) {
        likeBtn = "liked-btn.png"
        posts[p].likes++
    } else {
        likeBtn = "like-btn.png"
        posts[p].likes--
    }
 
    generatePosts()
}
