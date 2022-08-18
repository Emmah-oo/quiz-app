import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Who is the first President of USA?',
			answerOptions: [
				{ answerText: 'John F Kennedy', isCorrect: false },
				{ answerText: 'George Washington', isCorrect: true },
				{ answerText: 'John Quincy Adams', isCorrect: false },
				{ answerText: 'Barack Obama', isCorrect: false },
			],
		},
		{
			questionText: 'What is the biggest Country in the world by population?',
			answerOptions: [
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'Nigeria', isCorrect: false },
				{ answerText: 'USA', isCorrect: false },
				{ answerText: 'China', isCorrect: true },
			],
		},
		{
			questionText: 'How many continents are in the world?',
			answerOptions: [
				{ answerText: '8', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '5', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'For which of the following disciplines is Nobel Prize awarded?',
			answerOptions: [
				{ answerText: 'Literature, Peace and Economics', isCorrect: false },
				{ answerText: 'Physics and Chemistry', isCorrect: false },
				{ answerText: 'Physiology or Medicine', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Hitler party which came into power in 1933 is known as?',
			answerOptions: [
				{ answerText: 'Labour Party', isCorrect: false },
				{ answerText: 'Nazi Party', isCorrect: true },
				{ answerText: 'Ku-Klux-Klan', isCorrect: false },
				{ answerText: 'Democratic Party', isCorrect: false },
			],
		},
		{
			questionText: 'What is the biggest Country in the world by land mass?',
			answerOptions: [
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'Canada', isCorrect: false },
				{ answerText: 'USA', isCorrect: false },
				{ answerText: 'Russia', isCorrect: true },
			],
		},
		{
			questionText: 'In which year of First World War Germany declared war on Russia and France?',
			answerOptions: [
				{ answerText: '1914', isCorrect: false },
				{ answerText: '1913', isCorrect: false },
				{ answerText: '1915', isCorrect: false },
				{ answerText: '1917', isCorrect: true },
			],
		},
		{
			questionText: "In which year, terrorists crash two planes into New York's World Trade Centre on September 11 in a sequence of destruction?",
			answerOptions: [
				{ answerText: '1993', isCorrect: false },
				{ answerText: '2004', isCorrect: false },
				{ answerText: '2001', isCorrect: true },
				{ answerText: '2003', isCorrect: false },
			],
		},
		{
			questionText: 'In a normal human body, the total number of red blood cells is?',
			answerOptions: [
				{ answerText: '10 Trillion', isCorrect: false },
				{ answerText: '40 Trillion', isCorrect: false },
				{ answerText: '20 Trillion', isCorrect: false },
				{ answerText: '30 Trillion', isCorrect: true },
			],
		},
		{
			questionText: 'In which season do we need more fat?',
			answerOptions: [
				{ answerText: 'Rainy Season', isCorrect: false },
				{ answerText: 'Summer', isCorrect: false },
				{ answerText: 'Winter', isCorrect: true },
				{ answerText: 'Spring', isCorrect: false },
			],
		},
		{
			questionText: 'If force is expressed in Newton and the distance in metre, then the work done is expressed in',
			answerOptions: [
				{ answerText: 'Joule', isCorrect: true },
				{ answerText: 'Kg wt', isCorrect: false },
				{ answerText: 'Watt', isCorrect: false },
				{ answerText: 'kg wt m', isCorrect: false },
			],
		},
		{
			questionText: 'How many teeth does a normal adult dog have?',
			answerOptions: [
				{ answerText: '31', isCorrect: false },
				{ answerText: '34', isCorrect: false },
				{ answerText: '26', isCorrect: false },
				{ answerText: '42', isCorrect: true },
			],
		},
		{
			questionText: 'How many times has Brazil won the World Cup Football Championship?',
			answerOptions: [
				{ answerText: 'Four times', isCorrect: false },
				{ answerText: 'Twice', isCorrect: false },
				{ answerText: 'Five times', isCorrect: true },
				{ answerText: 'Once', isCorrect: false },
			],
		},
		{
			questionText: 'How many players are there on each side in the game of Basketball?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '5', isCorrect: true },
				{ answerText: '7', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'Modern football is said to have evolved from?',
			answerOptions: [
				{ answerText: 'England', isCorrect: true },
				{ answerText: 'Spain', isCorrect: false },
				{ answerText: 'Italy', isCorrect: false },
				{ answerText: 'USA', isCorrect: false },
			],
		},
		{
			questionText: 'Malfunctioning of which of the following organs causes jaundice?',
			answerOptions: [
				{ answerText: 'Pancreas', isCorrect: false },
				{ answerText: 'Kidney', isCorrect: false },
				{ answerText: 'Liver', isCorrect: true },
				{ answerText: 'Stomach', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [score, setScore] = useState(0)
	const [name, setName] = useState('')

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handleNextQuestion = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1)
		}

		if (name === '') {
			alert('Enter Your Name')
		}

		const nextQuestion = currentQuestion + 1
		if (questions.length > nextQuestion && name.length > 0) {
			setCurrentQuestion(nextQuestion)
		} else if (questions.length <= nextQuestion) {
			setShowScore(true)
		}
	}

	return (
		<div className='body'>
			<input type='text' placeholder='Enter Name...' value={name} onChange={handleNameChange} required />
			<div className='app'>
				{showScore ? (
					<div className='score-section'>{name}, You scored {score} out of {questions.length}!</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answer) => (
								<button onClick={() => handleNextQuestion(answer.isCorrect)}>{answer.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
