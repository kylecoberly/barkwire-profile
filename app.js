document.querySelector(".theme-1").addEventListener("click", function(){
    const color = "hsl(0, 30%, 50%)";
    document.querySelector("body").style.backgroundColor = color;
});
document.querySelector(".theme-2").addEventListener("click", function(){
    const color = "hsl(240, 30%, 50%)";
    document.querySelector("body").style.backgroundColor = color;
    document.querySelector("body").style.backgroundColor = color;
});
document.querySelector(".theme-3").addEventListener("click", function(){
    changeColor("hsl(120, 30%, 50%)");
    const color = "hsl(120, 30%, 50%)";
    document.querySelector("body").style.backgroundColor = color;
    document.querySelector("body").style.backgroundColor = color;
});

const featuredImage = document.querySelector(".featured-image");
const pictures = document.querySelectorAll(".pictures li img");
for (let i = 0; i < pictures.length; i++){
    pictures[i].addEventListener("click", function(){
        featuredImage.src = pictures[i].src;
    });
}

const button = document.querySelector(".comment-input button");
button.addEventListener("click", function(){
    const message = document.querySelector("textarea").value;
    document.querySelector("blockquote").innerText = message;
});
