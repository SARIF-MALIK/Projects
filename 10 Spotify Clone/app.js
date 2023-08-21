const element = document.querySelector("#popularArtists");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -10 : 10,
  });
});