//setting up initial values and switch statements
var operator = process.argv[2];
var statement = process.argv[3];

const fs = require('fs');
const axios = require('axios');


function movieReport(){
axios
    .get("http://www.omdbapi.com/?t=" + statement + "&y=&plot=short&apikey=trilogy&tomatoes=true")
    .then(function(response){
        console.log("Title: " + response.data.Title + 
                    "\nYear of Release: " + response.data.Year +
                    "\nRating: " + response.data.imdbRating +
                    "\nRotten Tomatoes Rating: " + response.data.tomatoRating +
                    "\nProduced in: " + response.data.Country + 
                    "\nLanguage: " + response.data.Language +
                    "\nPlot: " + response.data.Plot +
                    "\nStarring: " + response.data.Actors);
    })
    .catch(function(error){
        if (error.response){
            console.log(error.response);
        }
    })
};

switch(operator) {
    case "movie-this":
        movieReport();
        break;
    case "spotify-this":
        console.log("feature not implemented yet");
        break;
    default:
        console.log("invalid selector");
}