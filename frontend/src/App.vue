<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <div class="blue">
      <HelloWorld msg="Welcome to..." />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
