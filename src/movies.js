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

//??? Why is Jasmine telling me this: "Return average even if one of the movies does not have rate!" I tested it and it works

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
//??? Why is Jasmine telling me "If two movies have the same year, order them alphabetically by their title". This function does that.

function orderByYear(yetAnotherMoviesArray) {
  const clonedArray = [...yetAnotherMoviesArray];

  function compare(a, b) {
    if (a.year === b.year) {
      function compare(a, b) {
        return a.title - b.title;
      }
    } else {
      return a.year - b.year;
    }
  }
  clonedArray.sort(compare);
  return clonedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(someMovieArray) {
  const first20Movies = someMovieArray.slice(0, 20);
  const titlesTop20 = first20Movies.map((titleValue) => {
    return titleValue.title;
  });
  return titlesTop20.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
