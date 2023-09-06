
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
  pauseSong(); 
})

const songObj = [
  {
  id: 1,
  imgSrc: "assets/engSong1.jpg",
  date: "Aug 11, 2023" ,
  songName: "Despacito" ,
  duration : "4:30",
  Singer : "Luis Fonsi ft. Puerto Ricon",
  songSrc : "/songs/1.mp3" 
},
{
  id : 2,
  imgSrc: "assets/engSong2.jpg",
  date: "Aug 12, 2021" ,
  songName: "Shape of You" ,
  duration : "4:30",
  Singer : "Ed Sheeran",
  songSrc : "/songs/2.mp3" 
},
{
  id : 3,
  songSrc : "/songs/3.mp3",
  imgSrc: "assets/engSong3.jpg",
  date: "Aug 11, 2023" ,
  songName: "See you again" ,
  duration : "5:20",
  Singer : "Wiz Khalifa",
},
{
  id : 4,
  songSrc : "/songs/4.mp3",
  imgSrc: "assets/engSong4.jpg",
  date: "Aug 11, 2023" ,
  songName: "Gangnam" ,
  duration : "3:20",
  Singer : "Random",
},
{
  id : 5,
  songSrc : "/songs/5.mp3",
  imgSrc: "assets/engSong5.jpg",
  date: "Aug 11, 2023" ,
  songName: "Sugar" ,
  duration : "3:24",
  Singer : "Adam",
},
{
  id : 6,
  songSrc : "/songs/6.mp3",
  imgSrc: "assets/engSong6.jpg",
  date: "Aug 11, 2023" ,
  songName: "Despacito" ,
  duration : "3:25",
  Singer : "Luis Fonsi ft. Puerto Ricon",
},
{
  id : 7,
  songSrc : "/songs/7.mp3",
  imgSrc: "assets/engSong1.jpg",
  date: "Aug 11, 2023" ,
  songName: "Despacito" ,
  duration : "4:30",
  Singer : "Luis Fonsi ft. Puerto Ricon",
},
{
  id : 8,
  songSrc : "/songs/8.mp3",
  imgSrc: "assets/engSong2.jpg",
  date: "Aug 12, 2021" ,
  songName: "Shape of You" ,
  duration : "4:30",
  Singer : "Ed Sheeran",
},
{
  id : 9,
  songSrc : "/songs/9.mp3",
  imgSrc: "assets/engSong3.jpg",
  date: "Aug 11, 2023" ,
  songName: "See you again" ,
  duration : "5:20",
  Singer : "Wiz Khalifa",
},
{
  id : 10,
  songSrc : "/songs/10.mp3",
  imgSrc: "assets/engSong4.jpg",
  date: "Aug 11, 2023" ,
  songName: "Gangnam" ,
  duration : "3:20",
  Singer : "Random",
},
{
  id : 11,
  songSrc : "/songs/1.mp3",
  imgSrc: "assets/engSong5.jpg",
  date: "Aug 11, 2023" ,
  songName: "Sugar" ,
  duration : "3:24",
  Singer : "Adam",
},
{
  id : 12,
  songSrc : "/songs/2.mp3",
  imgSrc: "assets/engSong6.jpg",
  date: "Aug 11, 2023" ,
  songName: "Despacito" ,
  duration : "3:25",
  Singer : "Luis Fonsi ft. Puerto Ricon",
},
{
  id : 13,
  songSrc : "/songs/3.mp3",
  imgSrc: "assets/engSong1.jpg",
  date: "Aug 11, 2023" ,
  songName: "Despacito" ,
  duration : "4:30",
  Singer : "Luis Fonsi ft. Puerto Ricon",
},
{
  id : 14,
  songSrc : "/songs/4.mp3",
  imgSrc: "assets/engSong2.jpg",
  date: "Aug 12, 2021" ,
  songName: "Shape of You" ,
  duration : "4:30",
  Singer : "Ed Sheeran",
},
{
  id : 15,
  songSrc : "/songs/5.mp3",
  imgSrc: "assets/engSong3.jpg",
  date: "Aug 11, 2023" ,
  songName: "See you again" ,
  duration : "5:20",
  Singer : "Wiz Khalifa",
},
{
  id : 16,
  songSrc : "/songs/6.mp3",
  imgSrc: "assets/engSong4.jpg",
  date: "Aug 11, 2023" ,
  songName: "Gangnam" ,
  duration : "3:20",
  Singer : "Random",
},
{
  id : 17,
  songSrc : "/songs/7.mp3",
  imgSrc: "assets/engSong5.jpg",
  date: "Aug 11, 2023" ,
  songName: "Sugar" ,
  duration : "3:24",
  Singer : "Adam",
},
{
  id : 18,
  songSrc : "/songs/4.mp3",
  imgSrc: "assets/engSong6.jpg",
  date: "Aug 11, 2023" ,
  songName: "Despacito" ,
  duration : "3:25",
  Singer : "Luis Fonsi ft. Puerto Ricon",
},
];

const queue = document.querySelector('.queue ol');

songObj.forEach( (item)=>{
  let newList = document.createElement('LI'); 
  newList.innerHTML = `<div class="queueRow">
  <img src=${item.imgSrc} alt="">
  <div class="latestSong-detail">
      <h3>${item.songName}</h3>
      <h3>${item.date}</h3>
  </div>
  <i class="fa-regular fa-heart"></i>
  </div>`;

  queue.appendChild(newList);
})


const progress = document.getElementById("progress"); 
const song = document.getElementById("song")

song.onloadedmetadata = function(){
  progress.max = song.duration; 
  progress.value = song.currentTime; 
}

let playPauseBtn = document.querySelector(".playPause i"); 

function playPause(){
  if(playPauseBtn.classList.contains("fa-pause")){
    pauseSong(); 

  }else{
    playSong(); 
  }
}

function pauseSong(){
  song.pause(); 
    playPauseBtn.classList.remove('fa-pause'); 
    playPauseBtn.classList.add('fa-play'); 
}

function playSong(){
  song.play(); 
  playPauseBtn.classList.remove('fa-play'); 
  playPauseBtn.classList.add('fa-pause'); 
}

if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime; 
  }, 1000)
}

progress.onchange = function(){
  playSong(); 
  song.currentTime = progress.value; 
}

let playerPicImg = document.querySelector('.playerPic img');
let songName = document.querySelector('.playerSongName h1'); 
let id = 0; 
function playNext(){
  id = ((id+1) % 18);  
  song.src = songObj[id].songSrc; 
  let newImgSrc = songObj[id].imgSrc; 
  let songNaam = songObj[id].songName; 
  playerPicImg.setAttribute("src", `${newImgSrc}`);  
  songName.innerText = songNaam; 
  console.log(id); 
  playSong(); 
}

function playPrv(){
  id = id -1; 
  if(id < 0) id = 17;   
  song.src = songObj[id].songSrc; 
  let newImgSrc = songObj[id].imgSrc; 
  let songNaam = songObj[id].songName; 
  playerPicImg.setAttribute("src", `${newImgSrc}`);  
  songName.innerText = songNaam; 
  console.log(id);  
  playSong(); 
}