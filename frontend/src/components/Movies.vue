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
          :key="movie.id"
          class="bg-white rounded-lg shadow-md p-4"
        >
          <h2 class="text-lg font-semibold">{{ movie.title }}</h2>
          <p class="text-gray-500">{{ movie.director }}</p>
          <button
            @click="deleteMovie(movie.id)"
            class="bg-red-500 text-white px-4 py-2 rounded mt-2"
          >
            Ta bort
          </button>
        </li>
      </ul>

      <!-- Formulär för att lägga till en ny film -->
      <form class="mt-4 flex flex-col items-center" @submit.prevent="addMovie">
        <input
          v-model="newMovie.title"
          type="text"
          placeholder="Titel"
          class="border rounded px-2 py-1 mb-2 w-full"
        />
        <input
          v-model="newMovie.director"
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
const newMovie = ref({ title: "", director: "" });

const fetchMovies = async () => {
  // Anropa backend-API för att hämta filmer
  // Tilldela resultatet till movies
};

const addMovie = async () => {
  // Anropa backend-API för att lägga till en ny film med newMovie
  // Uppdatera movies efteråt
};

const deleteMovie = async (id) => {
  // Anropa backend-API för att ta bort filmen med det givna id:t
  // Uppdatera movies efteråt
};

fetchMovies(); // Hämta filmer när komponenten skapas
</script>
