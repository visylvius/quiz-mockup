var questions = [
  new Question("Who was the first President of the United States?", [ "George Washington", "Thomas Jefferson" ], "George Washington"),
  new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["pi", "42"], "42"),
  new Question("What is your favorite color?", ["green", "blue"], "green")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quick
QuizUI.displayNext();
