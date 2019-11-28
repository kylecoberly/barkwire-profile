const pictures = document.querySelectorAll(".pictures li img")

pictures[1].addEventListener('click', () => {
 document.querySelector('.featured-image').src = pictures[1].src;
})
