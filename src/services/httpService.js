export function loadData(title) {
  let data = null;

  const xhr = new XMLHttpRequest();

  return new Promise(function (resolve, reject) {

    // Setup our listener to process compeleted requests
    xhr.onreadystatechange = function () {

      // Only run if the request is complete
      if (xhr.readyState !== 4) return;

      // Process the response
      if (xhr.status >= 200 && xhr.status < 300) {
        // If successful
        resolve(xhr);
      } else {
        // If failed
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }

    };

    xhr.open("GET", `https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${ title }`);
    xhr.setRequestHeader("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "805303678bmsh779cccb7096181ep1df96djsn2ae1d544f035");

    xhr.send(data);
  });
}

