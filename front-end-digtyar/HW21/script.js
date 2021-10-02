const postItems = document.getElementById("postItemsInTemplate");
let postsContainer = document.getElementById("postsContainer");
const btnLoadList = document.getElementById("btn");
const div = document.getElementById("div");


btnLoadList.addEventListener("click", onClickLoadList);

function onClickLoadList(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => getPosts(data));
}

function getPosts (posts){
    for(post of posts){
        addPost(post);
    }
}
  
function addPost(post){
    let html = postItems.innerHTML
    .replace("{{title}}", post.title)
    .replace("{{data}}", post.id);
    
    html = setColor(post, html);

    postsContainer.insertAdjacentHTML("beforeend", html); 
}

function setColor(post, html){
    if(post.completed){
        return html.replace("{{class}}", "green");
    }
    return html.replace("{{class}}", "");
}



function setDataAtribute(){
    postsContainer.lastElementChild.setAttribute("data-id", post.id);
}





