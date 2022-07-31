<script setup>
import { onMounted } from "vue";
import { quizStore } from "@/stores/quiz";
import { notify } from "@kyvg/vue3-notification";
import { RouterLink } from "vue-router";

import { getAllWithAnswers } from "@/api/modules/questions";
import QuestionComponent from "@/components/QuestionComponent.vue";

const store = quizStore();

onMounted(() => {
  getAllWithAnswers()
    .then((response) => {
      store.addQuestions(response.data);
    })
    .catch(() => {
      notify({
        group: 'alerts',
        type: "error",
        title: "Error",
        text: "Something went wrong during fetching questions.",
      });
    });
});
</script>

<template>
  <div class="container">
    <div class="card">
      <QuestionComponent v-for="(question, index) in store.questions" :key="index" :question="question" />
    </div>
    <div class="card-footer d-flex justify-content-end">
      <RouterLink class="btn btn-success ml-auto" :to="{ name: 'results' }">
        Show results
      </RouterLink>
    </div>
  </div>
</template>
