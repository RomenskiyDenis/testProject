"use strict";
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
document.writeln(`Вы посмотрели ${numberOfFilms} фильмов!`);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
for (let i = 0; i < 2; i++) {
    let questionRes = prompt('Один из последних просмотренных фильмов?');
    let rating = prompt('На сколько оцените его?');
    personalMovieDB['movies'][questionRes] = rating;

}

document.write(JSON.stringify(personalMovieDB));