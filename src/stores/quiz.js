import { defineStore } from "pinia";

export const quizStore = defineStore("quizStore", {
  state: () => ({
    questions: [],
  }),
  getters: {
    getQuestionById: (state) => {
      return (questionId) => state.questions.find((question) => question.id === questionId);
    },
  },
  actions: {
    addQuestions(questions) {
      this.questions = questions;
    },
  },
});
