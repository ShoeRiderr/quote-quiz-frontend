<script setup>
import { ref, toRefs, watch } from "vue";
import { notify } from "@kyvg/vue3-notification";

const props = defineProps({
  question: Object,
});

const { question } = toRefs(props);

const isAnswerChecked = ref(false);

const rightAnswer = question.value.answers.find(
  (answer) => answer.is_correct === "1"
);

watch(
  () => question.value.answer,
  (value) => {
    isAnswerChecked.value = true;
    const message =
      rightAnswer.id === value
        ? {
            type: "success",
            text: `Correct! The right answer is "${rightAnswer.content}"`,
          }
        : {
            type: "error",
            text: `Sorry, you are wrong! The right answer is "${rightAnswer.content}"`,
          };

    notify({
      group: "answer-status",
      type: message.type,
      text: message.text,
    });
  }
);
</script>

<template>
  <div>
    <notifications group="answer-status" position="top center" />
    <div class="card-header">"{{ question.content }}"</div>

    <div class="card-body">
      <div v-for="(answer, index) in question.answers" :key="index">
        <div class="form-check">
          <input
            class="form-check-input"
            :id="`answer-${answer.id}`"
            type="radio"
            :disabled="isAnswerChecked"
            :value="answer.id"
            v-model="question.answer"
          />
          <label class="form-check-label" :for="`answer-${answer.id}`">
            {{ answer.content }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
