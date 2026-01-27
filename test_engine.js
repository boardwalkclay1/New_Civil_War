/* UNIVERSAL TEST ENGINE */

class TestEngine {
  constructor(questions, total, redirectPage) {
    this.questions = questions;
    this.total = total;
    this.index = 0;
    this.correct = 0;
    this.missed = [];
    this.redirectPage = redirectPage;
  }

  current() {
    return this.questions[this.index];
  }

  submit(answer) {
    const q = this.current();

    if (String(answer).trim().toLowerCase() === String(q.answer).toLowerCase()) {
      this.correct++;
    } else {
      this.missed.push(q);
    }

    this.index++;

    if (this.index >= this.total) {
      this.finish();
    }
  }

  finish() {
    Storage.save("lastTestResults", {
      correct: this.correct,
      total: this.total,
      missed: this.missed
    });

    window.location.href = this.redirectPage;
  }
}
