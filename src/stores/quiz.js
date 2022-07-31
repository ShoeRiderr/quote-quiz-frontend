import { defineStore } from "pinia";

export const quizStore = defineStore("quizStore", {
  state: () => ({
    questions: [],
  }),
  actions: {
    addQuestions(questions) {
      this.questions = questions.map((question) => {
        question["answer"] = "";

        return question;
      });
    },
  },
});
