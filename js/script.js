/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var image = ["https://m.media-amazon.com/images/M/MV5BNGE2ZmFkZTYtNjRiOS00ZjE3LThjOWMtZTViZjRmNDFjNTQwXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/The_Blacklist_season_5_poster.jpg/220px-The_Blacklist_season_5_poster.jpg","https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_.jpg"]
var tv = ["Criminal Minds", "The Office", "The Blacklist", "Daredevil"];
var platform = ["Netflix","Netflix","Netflix","Netflix"]
var episodeNumbers = [313, 188, 127, 39]
var IMDb = ["https://www.imdb.com/title/tt0452046/?ref_=nv_sr_1", "https://www.imdb.com/title/tt2741602/?ref_=nv_sr_1","https://www.imdb.com/title/tt0386676/?ref_=nv_sr_1","https://www.imdb.com/title/tt3322312/?ref_=nv_sr_1"]

// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
tv.forEach(function(tvList){
    $("#tvs").append("<p>" + tvList + "</p>");
    });
image.forEach(function(tvImage){
    $("#images").append("<img src=" + tvImage + ">");
    });
platform.forEach(function(platformList){
    $("#platforms").append("<p>" + platformList + "</p>");
    });
episodeNumbers.forEach(function(episodeNum){
    $("#episodes").append("<p>" + episodeNum + "</p>");
    });
IMDb.forEach(function(IMDbList){
    $("#links").append("<a href=" + IMDbList + "> Summary </a>");
    });


function emptyTVInfo(){
    $("#tvs").empty();
    $("#platforms").empty();
    $("#episodes").empty();
    $("#images").empty();
    $("#links").empty();
}


function addTVInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var newShow = $("#tv").val();
    var anotherPlatform = $("#platform").val();
    var moreNumber = $("#episode").val();
    var newImage = $("#image").val();
    var newIMDb =$("#link").val();
    
    tv.push(newShow);
    image.push(newImage);
    platform.push(anotherPlatform);
    episodeNumbers.push(moreNumber);
    IMDb.push(newIMDb);

}
function displaySongInfo() {
    emptyTVInfo();
    tv.forEach(function(newShow){
    $("#tvs").append("<p>" + newShow + "</p>");
    });
image.forEach(function(newImage){
    $("#images").append("<img src=" + newImage + ">");
    });
platform.forEach(function(anotherPlatform){
    $("#platforms").append("<p>" + anotherPlatform + "</p>");
    });
episodeNumbers.forEach(function(moreNumber){
    $("#episodes").append("<p>" + moreNumber + "</p>");
    });
IMDb.forEach(function(newIMDb){
    $("#links").append("<a href=" + newIMDb + "> Summary </a>");
    });
}

$("#add").click(function() {
    emptyTVInfo();
    addTVInfo();
    displaySongInfo();
});


