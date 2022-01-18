"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
document.writeln(`Вы посмотрели ${numberOfFilms} фильмов!`);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
for (let i = 0; i < 2; i++) {
    const questionRes = prompt('Один из последних просмотренных фильмов?'),
    rating = prompt('На сколько оцените его?');
    personalMovieDB['movies'][questionRes] = rating;

}
const label = document.getElementById('label1')
label.innerHTML = JSON.stringify(personalMovieDB);