'use client';
// pages/index.js
import { useState } from 'react';

const questions = [
  { id: 1, question: "Какой ваш любимый цвет?", answers: ["Красный", "Синий", "Зеленый"] },
  { id: 2, question: "Какой ваш любимый животное?", answers: ["Кошка", "Собака", "Птица"] },
  { id: 3, question: "Какой ваш любимый спорт?", answers: ["Футбол", "Баскетбол", "Теннис"] }
];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  const handleAnswer = (answer) => {
    setResponses([...responses, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Ваши ответы: ${responses.join(', ')}, ${answer}`);
      setResponses([]); // Сбросить ответы после завершения опроса
      setCurrentQuestionIndex(0); // Вернуться к первому вопросу
    }
  };

  return (
    <div>
      <h1>Опрос</h1>
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
}