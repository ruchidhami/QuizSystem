export class Question {
  id: string;
  question: string;
  incorrectAnswer: string;
  correctAnswer: string;
  description: string;
  categoryId: string;

  // Derived properties
  answers: Array<string>;
  correctAnswerChoosen: boolean = false;
  displayAnswer: boolean = false;
  answerShown : boolean = false;
  wrongAsnwerChoosen: boolean = false;
  showSnackbar: boolean = false;

  constructor(props: any) {
    this.id = props._id;
    this.question = props.question;
    this.incorrectAnswer = props.incorrectAnswer;
    this.correctAnswer = props.correctAnswer;
    this.description = props.description;
    if (this.correctAnswer) {
      this.answers = this.incorrectAnswer.split('|');
      const correctAnswerIndex = Math.floor(Math.random() * this.answers.length);
      this.answers.splice(correctAnswerIndex, 0, this.correctAnswer);
    }
  }
}
