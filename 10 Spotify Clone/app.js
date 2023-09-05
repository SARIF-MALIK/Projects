
const scrollClass = document.querySelectorAll(".scrollHorizontal");

scrollClass.forEach(element => {
  element.addEventListener('wheel', (event) => {
    event.preventDefault();
    element.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
      behavior: 'smooth', // Add smooth scrolling behavior if desired
    });
  });
});


const player = document.querySelector('.player'); 
const closePlayer = document.querySelector('.closePlayer'); 

closePlayer.addEventListener('click', function(){
  player.style.display = 'none'; 
})