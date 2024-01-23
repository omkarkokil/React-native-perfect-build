import axios from "axios";

export const getTrendingMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWVmMzFhZDc5OTIwZGZjYzM4ZWZiZTFiNDllNWIzZSIsInN1YiI6IjY1YWQ1MDRkNTQ0YzQxMDEwYjZkMjZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-e3tQgnJOydsbvikKR7GVvFvpDDtaxGvHzpvBQFffZY",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWVmMzFhZDc5OTIwZGZjYzM4ZWZiZTFiNDllNWIzZSIsInN1YiI6IjY1YWQ1MDRkNTQ0YzQxMDEwYjZkMjZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-e3tQgnJOydsbvikKR7GVvFvpDDtaxGvHzpvBQFffZY",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getTopRatedMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWVmMzFhZDc5OTIwZGZjYzM4ZWZiZTFiNDllNWIzZSIsInN1YiI6IjY1YWQ1MDRkNTQ0YzQxMDEwYjZkMjZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-e3tQgnJOydsbvikKR7GVvFvpDDtaxGvHzpvBQFffZY",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (id: string | string[] | undefined) => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWVmMzFhZDc5OTIwZGZjYzM4ZWZiZTFiNDllNWIzZSIsInN1YiI6IjY1YWQ1MDRkNTQ0YzQxMDEwYjZkMjZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-e3tQgnJOydsbvikKR7GVvFvpDDtaxGvHzpvBQFffZY",
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async (id: string | string[] | undefined) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWVmMzFhZDc5OTIwZGZjYzM4ZWZiZTFiNDllNWIzZSIsInN1YiI6IjY1YWQ1MDRkNTQ0YzQxMDEwYjZkMjZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-e3tQgnJOydsbvikKR7GVvFvpDDtaxGvHzpvBQFffZY",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
