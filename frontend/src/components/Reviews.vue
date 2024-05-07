<template>
  <div
    class="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-full"
  >
    <!-- Review form -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Skapa en ny recension</h2>
      <form @submit.prevent="submitReview" class="flex flex-col">
        <div class="flex flex-col mb-4">
          <label for="movie" class="font-semibold mb-2">Film:</label>
          <input
            type="text"
            v-model="movie"
            id="movie"
            class="border rounded px-2 py-1"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="user" class="font-semibold mb-2">Användare:</label>
          <input
            type="text"
            v-model="user"
            id="user"
            class="border rounded px-2 py-1"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="rating" class="font-semibold mb-2">Betyg:</label>
          <input
            type="number"
            v-model="rating"
            id="rating"
            class="border rounded px-2 py-1"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="comment" class="font-semibold mb-2">Kommentar:</label>
          <textarea
            v-model="comment"
            id="comment"
            rows="4"
            class="border rounded px-2 py-1"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Skicka
        </button>
      </form>
    </div>

    <!-- Reviews -->
    <div>
      <h2 class="text-xl font-semibold mb-4">Recensioner</h2>
      <div v-if="reviews.length === 0">Inga recensioner tillgängliga</div>
      <div v-else>
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="border mb-4 p-4 shadow-md relative"
        >
          <h3 class="text-lg font-semibold">{{ review.movie }}</h3>
          <p class="text-gray-600">Användare: {{ review.user }}</p>
          <p class="text-gray-600">Betyg: {{ review.rating }}</p>
          <p>{{ review.comment }}</p>
          <button
            @click="deleteReview(index)"
            class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Radera
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

const movie = ref("");
const user = ref("");
const rating = ref(0);
const comment = ref("");
const reviews = ref([]);

const fetchReviews = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/reviews");
    const data = await response.json();
    reviews.value = data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

const submitReview = async () => {
  try {
    await fetch("http://localhost:3000/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: movie.value,
        user: user.value,
        rating: rating.value,
        comment: comment.value,
      }),
    });
    fetchReviews();
    movie.value = "";
    user.value = "";
    rating.value = 0;
    comment.value = "";
  } catch (error) {
    console.error("Error submitting review:", error);
  }
};
const deleteReview = async (index) => {
  try {
    await fetch(
      `http://localhost:3000/api/reviews/${reviews.value[index]._id}`,
      {
        method: "DELETE",
      }
    );
    fetchReviews();
  } catch (error) {
    console.error("Error deleting review:", error);
  }
};

onMounted(fetchReviews);
</script>
