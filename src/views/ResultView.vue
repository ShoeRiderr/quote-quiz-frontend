<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { quizStore } from "@/stores/quiz";
import ResultQuestionComponent from "@/components/ResultQuestionComponent.vue";

const store = quizStore();
const router = useRouter();

onMounted(() => {
  if (store.questions.length === 0) {
    router.push({
      name: "home",
    });
  }
});
</script>

<template>
  <div class="container">
    <div class="card">
      <h2 class="p-2">Summary</h2>
      <ResultQuestionComponent
        v-for="(question, index) in store.questions"
        :key="index"
        :question="question"
      />
    </div>
  </div>
</template>
