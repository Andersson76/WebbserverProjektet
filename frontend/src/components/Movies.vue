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
          <h2 class="text-lg font-semibold">{{ movieTitle }}</h2>
          <p class="text-gray-500">{{ movieDirector }}</p>
          <button
            @click="deleteMovie(movieId)"
            class="bg-red-500 text-white px-4 py-2 rounded mt-2"
          >
            Ta bort
          </button>
        </li>
      </ul>

      <!-- Formulär för att lägga till en ny film -->
      <form class="mt-4 flex flex-col items-center" @submit.prevent="addMovie">
        <input
          v-model="newMovie.movieTitle"
          type="text"
          placeholder="Titel"
          class="border rounded px-2 py-1 mb-2 w-full"
        />
        <input
          v-model="newMovie.movieDirector"
          type="text"
          placeholder="Regissör"
          class="border rounded px-2 py-1 mb-2 w-full"
        />
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Lägg till film
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const movies = ref([]);
const newMovie = ref({ movieTitle: "", movieDirector: "" });

const fetchMovies = async () => {
  try {
    console.log("Fetching movies...");
    const response = await fetch("/api/movies");
    console.log("Response status:", response.status);
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
    const response = await fetch("/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie.value),
    });
    if (!response.ok) {
      throw new Error("Failed to add movie");
    }
    newMovie.value = { movieTitle: "", movieDirector: "" }; // Nollställ formuläret
    await fetchMovies(); // Uppdatera listan med filmer
  } catch (error) {
    console.error(error);
  }
};

const deleteMovie = async (id) => {
  try {
    const response = await fetch(`/api/movies/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete movie");
    }
    await fetchMovies(); // Uppdatera listan med filmer
  } catch (error) {
    console.error(error);
  }
};

fetchMovies(); // Hämta filmer när komponenten skapas
</script>
