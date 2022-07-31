<script setup>
import { ref, toRefs, computed } from "vue";

const props = defineProps({
  question: Object,
});

const { question } = toRefs(props);

const isAnswerChecked = ref(question.value.answer.length > 0);

const rightAnswer = question.value.answers.find(
  (answer) => answer.is_correct === "1"
);

const answearStatus = computed(() => {
  return isAnswerChecked && rightAnswer.id === question.value.answer
    ? {
        class: "text-success",
        text: "Correct answer!",
      }
    : {
        class: "text-danger",
        text: `Sorry, you are wrong! The right answer is "${rightAnswer.content}".`,
      };
});
</script>

<template>
  <div>
    <notifications group="answer-status" position="top center" />
    <div class="card-header">"{{ question.content }}"</div>
    <div class="questions-grid">
      <div class="card-body">
        <div v-for="(answer, index) in question.answers" :key="index">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              disabled
              :value="answer.id"
              v-model="question.answer"
            />
            <label class="form-check-label">
              {{ answer.content }}
            </label>
          </div>
        </div>
      </div>
      <div :class="answearStatus.class" class="d-flex align-items-center">
        <span class="text-center">
          {{ answearStatus.text }}
        </span>
      </div>
    </div>
  </div>
</template>
