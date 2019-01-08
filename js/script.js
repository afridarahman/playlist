/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var image = ["https://m.media-amazon.com/images/M/MV5BNGE2ZmFkZTYtNjRiOS00ZjE3LThjOWMtZTViZjRmNDFjNTQwXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_.jpg", "https://resizing.flixster.com/PKPFvfJ9zWU_4izSQeFLplnXlwM=/206x305/v1.dDsyNTI1MTY7ajsxNzkxMjsxMjAwOzIyMDA7MzMwMA","https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_.jpg"]
var tv = ["Criminal Minds", "The Office", "The Blacklist", "Daredevil"];
var platform = ["Netflix","Netflix","Netflix","Netflix"]
var episodenumbers = [313, 188, 127, 39]
var IMDb = ["https://www.imdb.com/title/tt0452046/?ref_=nv_sr_1", "https://www.imdb.com/title/tt2741602/?ref_=nv_sr_1","https://www.imdb.com/title/tt0386676/?ref_=nv_sr_1","https://www.imdb.com/title/tt3322312/"]

// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptyTVInfo(){
    $("#tv").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
