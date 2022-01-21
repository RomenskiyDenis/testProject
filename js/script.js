"use strict";
let numberOfFilms;

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

function writeLog(value){
    console.log(value);
}

function showMyDB(hidden){
    
    if (!hidden){
        writeLog(personalMovieDB);
    } else {
        writeLog('Доступ закрыт!');
    }
}
function writeYourGenres(){
    for (let i = 1; i < 4; i++) {
        const questionRes = prompt(`Ваш любимый жанр под номером ${i}`);
        if (!questionRes || questionRes.length === 0) {
            i--;
            alert('Вы не корректно ответили на вопрос! Повторите, пожалуйста.');
            continue;
    
        } else {
            personalMovieDB.genres.push(questionRes);
        }
    
    
    }
}
//end function block

start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();

const label = document.getElementById('label1');
label.innerHTML = JSON.stringify(personalMovieDB);