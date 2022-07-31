<script setup>
import { onMounted } from "vue";
import { quizStore } from "@/stores/quiz";
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
import { getAllWithAnswers } from "@/api/modules/questions";
import QuestionComponent from "../components/QuestionComponent.vue";

const store = quizStore();
const router = useRouter();

onMounted(() => {
  getAllWithAnswers()
    .then((response) => {
      store.addQuestions(response.data);
    })
    .catch(() => {
      notify({
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
  </div>
</template>
