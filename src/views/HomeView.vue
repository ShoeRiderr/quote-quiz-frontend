<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h2>Quote quiz</h2>
    <div class="d-flex justify-content-center">
      <RouterLink class="btn btn-primary" :to="{ name: 'questions' }">
        Start Quiz
      </RouterLink>
    </div>
  </div>
</template>
