let songList = document.querySelector('#song-list'); 
let progress = document.querySelector('#progress'); 
let playBtn = document.querySelector('#play-btn'); 
let forwardBtn = document.querySelector('#forward-btn')
let backwardBtn = document.querySelector('#backward-btn'); 

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

const audio = new Audio('./songs/5.mp3'); 
playBtn.addEventListener('click', ()=>{
    audio.paused ? audio.play() : audio.pause();  
    
    if(playBtn.children[0].classList.contains('fa-play') ){
        playBtn.children[0].classList.remove('fa-play'); 
        playBtn.children[0].classList.add('fa-pause')
    }else{
        playBtn.children[0].classList.remove('fa-pause'); 
        playBtn.children[0].classList.add('fa-play')
    }
    
})

audio.addEventListener('timeupdate', ()=>{
    let percentage = audio.currentTime*100/audio.duration; 
    progress.value = percentage; 

})

progress.addEventListener('change', ()=>{
    let updatedTime = audio.duration*progress.value/100; 
    audio.currentTime = updatedTime; 
})

for(song of songObj){
    let li = document.createElement('li'); 
    li.innerText = song.songName;
    li.setAttribute('id', song.id); 
    songList.appendChild(li);
   
}

songList.addEventListener('click', function(event){
    let songId = event.target.getAttribute('id'); 
    audio.src = songObj[songId-1].songSrc; 
    audio.currentTime = 0; 
    audio.play(); 

        playBtn.children[0].classList.remove('fa-play'); 
        playBtn.children[0].classList.add('fa-pause')
})


forwardBtn.addEventListener('click', ()=>{
    
})

