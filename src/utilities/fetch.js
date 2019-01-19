import apiKey from "../apiKey";

export const fetchData = async () => {
  const url = `https://api.themoviedb.org/3/person/1223/movie_credits?api_key=${
    apiKey.theMoveDBApiKey
  }`;
  const response = await fetch(url);
  const movieData = await response.json();
  return movieData;
};

export const fetchLoginUser = async (email, password) => {
  const response = await fetch("https://coen-collection-backend.herokuapp.com/api/users", {
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: { "Content-Type": "application/json" }
  });
  const data = await response.json();
  return data;
};

export const fetchSignupUser = async (username, email, password) => {
  const response = await fetch("https://coen-collection-backend.herokuapp.com/api/users/new", {
    method: "POST",
    body: JSON.stringify({
      name: username,
      email: email,
      password: password
    }),
    headers: { "Content-Type": "application/json" }
  });
  const data = await response.json();
  return data;
};

export const fetchAddFavorite = async movie => {
  const response = await fetch(
    "https://coen-collection-backend.herokuapp.com/api/users/favorites/new",
    {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        movie_id: movie.id,
        user_id: movie.currentUser.id,
        title: movie.title,
        poster_path: movie.poster,
        release_date: movie.date,
        vote_average: parseInt(movie.voteAverage),
        overview: movie.overview
      }),
      headers: { "Content-Type": "application/json" }
    }
  );
  const data = await response.json();
  return data;
};

export const retrieveUserFavorites = async userId => {
  const response = await fetch(
    `https://coen-collection-backend.herokuapp.com/api/users/${userId}/favorites`
  );
  const favorites = await response.json();
  return favorites;
};

export const removeFavorite = async (userId, movieId) => {
  return fetch(
    `https://coen-collection-backend.herokuapp.com/api/users/${userId}/favorites/${movieId}`,
    {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        movie_id: movieId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
