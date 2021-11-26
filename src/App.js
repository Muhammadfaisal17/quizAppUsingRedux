import { useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';

function App() 
{
  const questions = useSelector((e)=>e)
  console.log(questions);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [scored, setScore] = useState(0);

	const OptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(scored + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='scoresection'>
					Your Quiz scored {scored} out of {questions.length}
				</div>
			) : (
				<>
					<div className='questionsection'>
						<div className='questioncount'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='questiontext'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answersection'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => OptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default App;