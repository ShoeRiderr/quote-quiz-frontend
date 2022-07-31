import { defineStore } from "pinia";

export const quizStore = defineStore("quizStore", {
  state: () => ({
    questions: [],
  }),
  actions: {
    setQuestions(questions) {
      this.questions = questions.map((question) => {
        question["answer"] = "";

        return question;
      });
    },
  },
});
