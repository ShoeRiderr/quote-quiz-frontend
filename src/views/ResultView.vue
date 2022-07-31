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

function restart() {
  store.setQuestions([]);

  router.push({
    name: "questions",
  });
}
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
    <div class="card-footer d-flex justify-content-end">
      <button type="button" class="btn btn-success ml-auto" @click="restart">
        Restart
      </button>
    </div>
  </div>
</template>
