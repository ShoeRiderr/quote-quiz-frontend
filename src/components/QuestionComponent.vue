<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  question: Object,
});

const form = ref({
  answer: "",
});

const { question } = toRefs(props);

</script>

<template>
  <div>
    <div class="card-header">"{{ question.content }}"</div>
    <div
      v-for="(answer, index) in question.answers"
      :key="index"
      class="card-body"
    >
      <div class="form-check">
        <input
          class="form-check-input"
          :id="`answer-${answer.id}`"
          type="radio"
          :value="answer.id"
          v-model="form.answer"
        />
        <label class="form-check-label" :for="`answer-${answer.id}`">{{
          answer.content
        }}</label>
      </div>
    </div>
  </div>
</template>
