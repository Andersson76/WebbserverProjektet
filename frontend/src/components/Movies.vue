<template>
  <div class="container mx-auto p-4 text-2xl font-bold lg:text-4xl">
    <!-- Rubrik "Filmer" -->
    <h1 class="text-center my-8">Filmer</h1>

    <!-- Lista med filmer -->
    <div class="flex flex-col items-center">
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <li
          v-for="movie in movies"
          :key="movie.movieId"
          class="bg-white rounded-lg shadow-md p-4"
        >
          <h2 class="text-lg font-semibold">{{ movie.movieTitle }}</h2>
          <h2 class="text-lg font-semibold">{{ movie.movieGenreId }}</h2>

          <p class="text-gray-500">{{ movie.movieRating }}</p>
          <!-- <button
            @click="deleteMovie(movieId)"
            class="bg-red-500 text-white px-4 py-2 rounded mt-2"
          >
            Ta bort
          </button> -->
        </li>
      </ul>
      <div class="flex justify-center gap-4 my-8">
        <!-- Formulär för att lägga till en ny film -->
        <form @submit.prevent="addMovie" class="max-w-sm mx-auto mt-8">
          <div class="mb-4">
            <label for="movieTitle" class="block text-gray-700"
              >Filmtitel:</label
            >
            <input
              type="text"
              id="movieTitle"
              v-model="movieTitle"
              required
              class="mt-1 block w-full rounded-md border-gray-900 shadow-sm border-indigo-300 ring ring-indigo-200 ring-opacity-50"
            />
          </div>
          <div class="mb-4 border-gray-900">
            <label for="movieRating" class="block text-gray-700">Betyg:</label>
            <input
              type="text"
              id="movieRating"
              v-model="movieRating"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border-indigo-300 ring ring-indigo-200 ring-opacity-50"
            />
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Lägg till film
            </button>
          </div>
        </form>
        <!-- Formulär för att uppdatera film -->
        <form @submit.prevent="updateMovie" class="max-w-sm mx-auto mt-8">
          <div class="mb-4">
            <label for="updateMovieId" class="block text-gray-700"
              >Film-ID:</label
            >
            <input
              type="text"
              id="updateMovieId"
              v-model="updateMovieId"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border-indigo-300 ring ring-indigo-200 ring-opacity-50"
            />
          </div>
          <div class="mb-4">
            <label for="updateMovieTitle" class="block text-gray-700"
              >Filmtitel:</label
            >
            <input
              type="text"
              id="movieTitle"
              v-model="updateMovieTitle"
              required
              class="mt-1 block w-full rounded-md border-gray-900 shadow-sm border-indigo-300 ring ring-indigo-200 ring-opacity-50"
            />
          </div>
          <div class="mb-4 border-gray-900">
            <label for="updateMovieRating" class="block text-gray-700"
              >Betyg:</label
            >
            <input
              type="text"
              id="movieRating"
              v-model="updateMovieRating"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border-indigo-300 ring ring-indigo-200 ring-opacity-50"
            />
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Uppdatera
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const movies = ref([]);
const movieTitle = ref("");
const movieRating = ref("");
const updateMovieId = ref("");
//
const updateMovieTitle = ref(""); // Här deklareras updateMovieTitle
const updateMovieRating = ref(""); // Här deklareras updateMovieRating

const fetchMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/movies");

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    movies.value = await response.json();

    console.log("Fetched movies:", movies.value);
  } catch (error) {
    console.error(error);
  }
};

const addMovie = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieId: updateMovieId.value,
        movieTitle: movieTitle.value,
        movieRating: movieRating.value,
      }),
    });
    const responseData = await response.json();
    if (responseData.success) {
      alert(responseData.message);
      movieTitle.value = "";
      movieRating.value = "";
    } else {
      alert(responseData.error);
    }
  } catch (error) {
    console.error("Error adding movie:", error);
  }
};

const updateMovie = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/movies", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        movieId: updateMovieId.value,
        movieTitle: updateMovieTitle.value,
        movieRating: updateMovieRating.value,
      }),
    });
    console.log(JSON.stringify("test"));
    const responseData = await response.json();
    if (responseData.success) {
      alert(responseData.message);
      updateMovieId.value = "";
      updateMovieTitle.value = "";
      updateMovieRating.value = "";
    } else {
      alert(responseData.error);
    }
  } catch (error) {
    console.error("Error updating movie:", error);
  }
};

/* const deleteMovie = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/movies/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete movie");
    }
    await fetchMovies(); // Uppdatera listan med filmer
  } catch (error) {
    console.error(error);
  }
}; */

fetchMovies(); // Hämta filmer när komponenten skapas
</script>
