console.log("welcom to my spotify");
let songIndex = 0;
let audioElement =new Audio('songs/1.mp3');
let smallPlay = document.getElementsByClassName('songItemPause');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs =[
    {SongName:"Mortals by Warriyo",filePath: "songs/1.mp3", coverPath: "1.jpg"},
    {SongName:"So Happy by Raden Siwa",filePath: "songs/2.mp3", coverPath: "2.jpg"},
    {SongName:"Invincible by Deaf Kev",filePath: "songs/3.mp3", coverPath: "3.jpg"},
    {SongName:"Judaai by Rekha Bhardwaj ",filePath: "songs/4.mp3", coverPath: "4.jpg"},
    {SongName:"Shake That Ass by eminum",filePath: "songs/5.mp3", coverPath: "5.jpg"},
    {SongName:"Darkside by Neoni",filePath: "songs/6.mp3", coverPath: "6.jpg"},
    {SongName:"The Search by Nf",filePath: "songs/7.mp3", coverPath: "7.jpg"},
    {SongName:"Jai Bhavani Jai Shivaji by Ajay &....",filePath: "songs/8.mp3", coverPath: "8.jpg"},
    {SongName:"Can't Hold Us by Macklemore & Ryan ...",filePath: "songs/9.mp3", coverPath: "9.jpg"},
    {SongName:"I Love You For Infinity by Jamyes Young... ",filePath: "songs/10.mp3", coverPath: "10.jpg"},
]
// audioElement.play();
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].SongName;
})

//handel play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
    })


// handel smallPause



// listen to ecents


audioElement.addEventListener('timeupdate',()=>{
   //update seeker
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
//


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// erased file here

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        gif.style.opacity = 1;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
 })


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



