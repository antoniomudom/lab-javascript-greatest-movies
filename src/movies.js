// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors
    allDirectors = moviesArray.map (element => {
        return element.director
    });

    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let FilteredDramaSpielberg = moviesArray.filter((eachMovie)=>{
        if(moviesArray.length ===0){
            return 0;
        }
        else { return eachMovie.genre.includes("Drama") && eachMovie.director === "Steven Spielberg"}
           

            
        });
        return FilteredDramaSpielberg.length;
    }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let totalScore = moviesArray.reduce((total,movie)=>{
        if(movie.score){
        return total + movie.score
        } else{
            return total
        }
    }, 0);
    return Number((totalScore/moviesArray.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    
    let dramaMovies =moviesArray.filter((eachMovie) => {
        if(moviesArray.length === 0){
            return 0;
        }
        else { return eachMovie.genre.includes("Drama");
    }
        
    }, 0);
    if (dramaMovies.length === 0) {
        return 0;
    }

    let totalScoreDrama = dramaMovies.reduce((total,movie)=>{
        
        if(movie.score){
        return total + movie.score
        } else{
            return total}
     }, 0);
     return Number((totalScoreDrama/dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
        let  moviesCopy = JSON.parse(JSON.stringify(moviesArray));
        moviesCopy.sort((elem1, elem2) => {
          if (elem1.year > elem2.year) {
            return 1;
          } else if (elem1.year < elem2.year) {
            return -1;
          } else {
            if (elem1.title > elem2.title) {
              return 1;
            } else if (elem1.title < elem2.title) {
              return -1;
            } else {
              return 0;
            }
          }
        });
        return moviesCopy;
      
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let  moviesCopy2 = JSON.parse(JSON.stringify(moviesArray));
        moviesCopy2.sort((elem1, elem2) => {
          
            return elem1.title.localeCompare(elem2.title);
          
        });
        let titlesArray = moviesCopy2.map((movie) => movie.title);

        // Esto me ha costado muchísimo.No tenía claro cómo usar solo los primeros 20 títulos.
        //Primero pensé en un filter pero Antonio me dijo que podía "cortar"el array si era de más de 20 títulos.
        //Me sonaba lo de cortar de slice o splice y lo busqué en los apuntes.

        if (titlesArray.length > 20) {
                titlesArray = titlesArray.slice(0, 20);
            }
        
            return titlesArray;
    }
        // return moviesCopy;
        // let first20Titles =


// 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
