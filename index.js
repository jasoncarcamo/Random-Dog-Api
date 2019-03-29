'use strict';

function getImages(){
    let amountSet = $('#amountinput').val();
    if(amountSet >= 1 && amountSet <= 50){
        fetch(`https://dog.ceo/api/breeds/image/random/${amountSet}`)
        .then(response => response.json())
        .then(responseJson => showImage(responseJson, amountSet))
        .catch(error => console.log(error));
    }
}

function showImage(responseJson, amountSet){
    console.log(responseJson);
    for(let i = 0; i < amountSet; i++){
        $('#container').append(`<img class='dogimg' src='${responseJson.message[i]}' alt='placeholder'>`);
    }
}

$('#formsection').submit(function(event){
    event.preventDefault();

    getImages();
})