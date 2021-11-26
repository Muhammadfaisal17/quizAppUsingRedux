const INITIAL_STATE = [
    {
      questionText: 'What does HTML stand for?',
      answerOptions: [
        { answerText: 'Hypery Text Markup Language', isCorrect: false },
        { answerText: 'Hyperlink Text Markup Language', isCorrect: false },
        { answerText: 'Hyper Text Markup Language', isCorrect: true },
        { answerText: 'Home Tool Markup Language', isCorrect: false },
      ],
    },
    {
      questionText: 'Choose the correct HTML element for the largest heading?',
      answerOptions: [
        { answerText: '<head>', isCorrect: false },
        { answerText: '<h1>', isCorrect: true },
        { answerText: '<heading>', isCorrect: false },
        { answerText: '<h6>', isCorrect: false },
      ],
    },
    {
      questionText: 'What does CSS stand for?',
      answerOptions: [
        { answerText: 'Cascading style sheets', isCorrect: true },
        { answerText: 'Colorful style sheets', isCorrect: false },
        { answerText: 'Creative style sheets', isCorrect: false },
        { answerText: 'Cost style sheets', isCorrect: false },
      ],
    },
    {
      questionText: 'Which HTML tag is used to define an internal style sheet?',
      answerOptions: [
        { answerText: '<css>', isCorrect: false },
        { answerText: '<script>', isCorrect: false },
        { answerText: '<start>', isCorrect: false },
        { answerText: '<style>', isCorrect: true },
      ],
    },
    {
      questionText: 'Inside which HTML element do we put the JavaScript?',
      answerOptions: [
        { answerText: '<scripting>', isCorrect: false },
        { answerText: '<js>', isCorrect: false },
        { answerText: '<script>', isCorrect: true },
        { answerText: '<jsx>', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you write "Hello World" in an alert box?',
      answerOptions: [
        { answerText: 'alertBox("hello world")', isCorrect: false },
        { answerText:  'message("hello world")', isCorrect: false },
        { answerText: 'alert("hello world")', isCorrect: true },
        { answerText: 'msgbox("hello world")', isCorrect: false },
      ],
    },
  ];
const reducer =(questions=INITIAL_STATE)=> questions
export default reducer;