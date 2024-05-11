<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div
    class="text-3xl font-bold flex justify-center items-center lg:text-5xl mt-20"
  >
    <h1>{{ msg }}</h1>
  </div>
</template>
