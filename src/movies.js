// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(placeholderformovies) {
  return placeholderformovies.map((value) => {
    return value.director;
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
//How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(someArray) {
  const newfilter = someArray.filter((value) => {
    return (
      value.director === 'Steven Spielberg' && value.genre.includes('Drama')
    );
  });
  return newfilter.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

//Why is Jasmine telling me this: "Return average even if one of the movies does not have rate!" I tested it and it works

function ratesAverage(anotherArray) {
  const ratedmoviesarray = anotherArray.filter((value) => {
    return value.rate;
  });
  const averagerates = ratedmoviesarray.reduce(
    (accumulator, rateValue, index, ratedmoviesarray) => {
      return accumulator + rateValue.rate / ratedmoviesarray.length;
    },
    0
  );
  return Number(averagerates.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(filmarray) {
  const dramamoviesarray = filmarray.filter((value) => {
    return value.genre.includes('Drama') && value.rate;
  });
  const averageDramarates = dramamoviesarray.reduce(
    (accumulator, rateValue, index, ratedmoviesarray) => {
      return accumulator + rateValue.rate / dramamoviesarray.length;
    },
    0
  );
  return Number(averageDramarates.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
