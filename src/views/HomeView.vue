<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h2>Quote quiz</h2>
    <RouterLink :to="{ name: 'questions' }">Start Quiz</RouterLink>
  </div>
</template>
