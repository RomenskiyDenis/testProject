"use strict";
let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

//function block
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const questionRes = prompt('Один из последних просмотренных фильмов?'),
            rating = prompt('На сколько оцените его?');
        if (!questionRes || questionRes.length === 0 || questionRes.length > 50 || !rating) {
            i--;
            alert('Вы не корректно ответили на вопрос! Повторите, пожалуйста.');
            continue;
    
        } else {
            personalMovieDB.movies[questionRes] = rating;
        }
    
    
    }
}
function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мал фильмов');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Вы классический зритель');
    }
}
//end function block

start();
rememberMyFilms();
detectPersonalLevel();

const label = document.getElementById('label1');
label.innerHTML = JSON.stringify(personalMovieDB);