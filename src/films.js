

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = [];
  result = array.map(movie => movie.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}



// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  
  let moviesFromDirector = [] 
  moviesFromDirector = array.filter(movie => movie.director == director);
  console.log(moviesFromDirector.score);
  console.log(moviesFromDirector.length)
  console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;
  

}




// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  let scorePerDirector = [];
  let averScorePerDirector = [];
  let finalAverScorePerDirector
  array.filter(movie => movie.director == director).map(movie => scorePerDirector.push(movie.score));
  averScorePerDirector = scorePerDirector.reduce((acumulator, inicial) => acumulator + inicial,0);
  finalAverScorePerDirector = Number((averScorePerDirector/scorePerDirector.length).toFixed(2));
  return finalAverScorePerDirector
  
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let sortedMovies = [...array];
  let orderedFilms = sortedMovies.map(movie => movie.title).sort().slice(0,20)
  return orderedFilms;
}





// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortedMovies = [...array];
  sortedMovies.sort(function(a,b){
    if (a.year === b.year) {
      if (a.title < b.title){
        return -1;
      } else if (a.title > b.title){
        return 1;
      } else return 0;
      
    } else if (a.year < b.year) {
      return - 1;
    } else return 1;
   
  })
  const orderedFilmsByYears = sortedMovies.slice(0,50);
  console.log(orderedFilmsByYears.forEach(item =>console.log(item.title + ', ' + item.year)))  
  return sortedMovies;
}




// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let scorePerCategory = [];
  let averScorePerCategory = [];
  let finalAverScorePerCategory
  array.filter(movie => movie.genre == genre).map(movie => scorePerCategory.push(movie.score));
  averScorePerCategory = scorePerCategory.reduce((acumulator, inicial) => acumulator + inicial,0);
  finalAverScorePerCategory = Number((averScorePerCategory/scorePerCategory.length).toFixed(2));
  return finalAverScorePerCategory
  

}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  
  let result = array.map(movie => {
    let [hours, minutes] = movie.duration.split("h")
    let durationInMinuts = parseInt(hours) * 60 
  
   if (minutes) {
    durationInMinuts += parseInt(minutes) 
   }
  
    return {
      ...movie,
      duration: durationInMinuts
    }
  })
 
  return result
  
  
  
  
  /* let moviesWithMinuteDuration = [...array];
  
  let hoursMin;
  let totalInMin;
  moviesWithMinuteDuration.forEach(un => {
    var regex = /(\d+)/g;
    hoursMin = un.duration.match(regex);
    hoursMin.forEach(item => {
      totalInMin = parseInt((item[0]*60) + item[1]);
      })
    moviesWithMinuteDuration.forEach(movie => {
      movie.duration == totalInMin
    })
    
  return moviesWithMinuteDuration;
})
   */
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let bestFilmOfYear = array.map(movie => movie.year === year);
  let result = [];
  let maxScoreDelYear = Math.max(bestFilmOfYear.map(item => item.score));
  result = bestFilmOfYear.filter(item => item.score === maxScoreDelYear);
  return result
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}


