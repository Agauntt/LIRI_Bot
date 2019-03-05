//setting up initial values and switch statements
var operator = process.argv[2];
var statement = process.argv[3];

const fs = require('fs');
const axios = require('axios');


function movieReport(){
axios
    .get("http://www.omdbapi.com/?t=" + statement + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        rating = response.data.imdbRating;
        console.log("This movie got a rating of " + rating + " from IMDB");
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