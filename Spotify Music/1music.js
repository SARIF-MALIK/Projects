console.log("Welcome to Go Music");
// song Index
let songIndex = 0;
let audioElement = new Audio('Source/SpotifyHarry/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songVolume = document.getElementById('Volume');
let songs = [
    {songName: "Warriyo Mortals", filePath: "Source/SpotifyHarry/songs/1.mp3", coverPath: "Source/SpotifyHarry/covers/1.jpg"},
    {songName: "Cielo- Huma Huma", filePath: "Source/SpotifyHarry/songs/2.mp3", coverPath: "Source/SpotifyHarry/covers/2.jpg"},
    {songName: "Brown-Munde", filePath: "Source/SpotifyHarry/songs/3.mp3", coverPath: "Source/SpotifyHarry/covers/3.jpg"},
    {songName: "Sutta na mila", filePath: "Source/SpotifyHarry/songs/4.mp3", coverPath: "Source/SpotifyHarry/covers/4.jpg"},
    {songName: "Brown-Munde", filePath: "Source/SpotifyHarry/songs/5.mp3", coverPath: "Source/SpotifyHarry/covers/5.jpg"},
    {songName: "Unknown", filePath: "Source/SpotifyHarry/songs/6.mp3", coverPath: "Source/SpotifyHarry/covers/6.jpg"},
    {songName: "Unknown", filePath: "Source/SpotifyHarry/songs/7.mp3", coverPath: "Source/SpotifyHarry/covers/7.jpg"},
    {songName: "Unknown", filePath: "Source/SpotifyHarry/songs/8.mp3", coverPath: "Source/SpotifyHarry/covers/8.jpg"},
    {songName: "Unknown", filePath: "Source/SpotifyHarry/songs/9.mp3", coverPath: "Source/SpotifyHarry/covers/9.jpg"}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;    
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;    
})



//Handle Play/Pause on click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

// sound mute / on
songVolume.addEventListener('click', ()=>{
    if(songVolume.Volume > 0){
        songVolume.src = "Source/mute.png";
        songVolume.Volume = 0;
    }   
    else {
        songVolume.src = "Source/volume-up-interface-symbol.png";
        songVolume.Volume = 30;
    }
})


//audioElement.play();

//Listen to Event 
audioElement.addEventListener('timeupdate', () => {

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Source/SpotifyHarry/songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;

    })
})   

document.getElementById('forward').addEventListener('click', ()=>{
    if(songIndex < 9){
        songIndex += 1;
    }
    else {
        songIndex = 0;
    }
    audioElement.src = `Source/SpotifyHarry/songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex > 0){
        songIndex--;
    }
    else{
        songIndex = 9;
    }
    audioElement.src = `Source/SpotifyHarry/songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText = songs[songIndex].songName;
})