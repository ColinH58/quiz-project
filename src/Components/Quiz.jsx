import React, { useState, useEffect } from "react";
// import { questions } from "../db/quizQuestions.json"

const Quiz = () => {
    // const questionObject = JSON.stringify(questions)
    const [question, setQuestion] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finalTally, setFinalTally] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('../db/quizQuestions');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            JSON.stringify(result)
            setQuestion(result);
          } catch (e) {
            console.log(e);
          }
        }
        fetchData();
      }, [question]);


    return(
        <div>
            <h3>Which one best describes you?</h3>
            <ul>
                <li>Question {question.text}</li>
                {console.log(question)}
                <li>I'm Independent</li>
                <li>I Prefer Large Groups</li>
                <li>Just Please Don't Notice Me</li>
                <li>I'm a Bit of All of That, Honestly</li>
            </ul>
            <button>Next</button>
            <button>Previous</button>
        </div>
    )
}

export default Quiz;