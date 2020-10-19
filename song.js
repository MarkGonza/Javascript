//Title: This File is a script containing details of a song
//it can be used to fetch details of a song when needed. 


// My favorate Song is "Californication" by Red Hot Chili Peppers 



/*
details 
Of song 
*/

var title = "Californification";
var artist = "Red Hot Chili Peppers";
var genre = "Alternative Rock";
var DurationInSeconds = 300;
var releaseDate = "June 8, 1999";
var GreatSong = true;
var LeadSinger = "Anthondy keidis";
var released =1999;
var album ="Californification";
var recordsSold ="15 Million";
var IsSongOnYoutube =true;
var YoutubeViews =749435049;

//display some detials
console.log("Console log :-")
console.log(title);
console.log(artist);
console.log(genre);
console.log(DurationInSeconds);
console.log(releaseDate);
console.log(GreatSong);
console.log(LeadSinger);
console.log(released);
console.log(album);
console.log(recordsSold);
console.log(IsSongOnYoutube);
console.log(YoutubeViews);

var Songdetails = {
songName : "Californication",
artist : "Red Hot Chili Peppers",
genre : "Alternative Rock",
DurationInSeconds : 300,
releaseDate : "June 8, 1999",
GreatSong : true,
}


//display oject with all detials
console.log(Songdetails);
console.log(Songdetails.GreatSong);

//display only release date
console.log(Songdetails.releaseDate);


//an array with similarly acclaimed songs of the time
var similarartists = ["Eagles","Linkin park","Snow patrol","Greenday","Pink Floyd"];

//display array
console.log( "similar songs of the time are,"+ " " + similarartists);


// to upper case
console.log(artist.toUpperCase());


//Constructor pattern for creating Objects. 
function SongConstructor(title,artist,year,isGood){
  this.title = title;
  this.artist =artist;
  this.year = year;
  this.isGood = isGood;
}

var WishYou = new SongConstructor("Wish You Were Here", "Pink Floyd", 1975, true);


console.log(WishYou.artist);

