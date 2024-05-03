<template>
  <div class="container mx-auto mt-20 p-4 text-2xl font-bold lg:text-4xl">
    <!-- Rubrik "Filmer" -->
    <h1 class="text-center mb-4">Filmer</h1>

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

      <!-- Formulär för att lägga till en ny film -->
      <form @submit.prevent="addMovie">
      <label>Filmtitel:</label>
      <input type="text" v-model="movieTitle" required><br>
      <label>Betyg:</label>
      <input type="text" v-model="movieRating" required><br>
      <button type="submit">Lägg till film</button>
    </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const movies = ref([]);
const movieTitle = ref("");
const movieRating = ref("");

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
