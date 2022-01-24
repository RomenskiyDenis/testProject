"use strict";
let numberOfFilms;

//function block
function writeLog(value){
    console.log(value);
}
//end function block


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        this.count = numberOfFilms;
    },
    toggleVisibleMyDB: function(){
        this.privat=!this.privat;
        console.log(`priv: ${this.privat}`);
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const questionRes = prompt('Один из последних просмотренных фильмов?'),
                rating = prompt('На сколько оцените его?');
            if (!questionRes || questionRes.length === 0 || questionRes.length > 50 || !rating) {
                i--;
                alert('Вы не корректно ответили на вопрос! Повторите, пожалуйста.');
                continue;
        
            } else {
                this.movies[questionRes] = rating;
            }
        
        
        }
    },
    detectPersonalLevel: function(){
        if (this.count < 10) {
            alert('Просмотрено довольно мал фильмов');
        } else if (this.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Вы классический зритель');
        }
    },
    showMyDB: function(){
    
        if (!this.privat){
            writeLog(personalMovieDB);
        } else {
            writeLog('Доступ закрыт!');
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 4; i++) {
            const questionRes = prompt(`Ваш любимый жанр под номером ${i}`);
            if (!questionRes || questionRes.length === 0) {
                i--;
                alert('Вы не корректно ответили на вопрос! Повторите, пожалуйста.');
                continue;
        
            } else {
                this.genres.push(questionRes);
            }
        
        
        }
        this.genres.forEach(function(item,ind){
            console.log(`Любимый жанр #${++ind} - это ${item}`);
        });
    }

};
personalMovieDB.start(); 
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

const label = document.getElementById('label1');
label.innerHTML = JSON.stringify(personalMovieDB);

