<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl text-green-500">{{ msg }}</h1>
    <h3 class="mt-4 text-lg text-blue-700">Welcome to our modernized page!</h3>
  </div>
</template>
