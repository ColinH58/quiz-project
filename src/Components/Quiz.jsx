import React, { useState, useEffect } from "react";

const Quiz = () => {
    const [question, setQuestion] = useState([]);
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [finalTally, setFinalTally] = useState(0);
    // const [selectedAnswer, setSelectedAnswer] = useState(null);;

    useEffect(() => {
        fetch('../db/quizQuestions.json', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "id": "id",
                // "text": "text",
                // "description": "description",
            },
        })
            .then(response => response.json())
            .then((result) => {
                setQuestion(result)
            })
            .catch((error) => console.log(error))
    }, [])


    return(
        <div>
            <h3>Which one best describes you?</h3>
            <ul>
                <li>Question {question.text}</li>
                <li>I'm Independent</li>
                <li>I Prefer Large Groups</li>
                <li>Just Please Don't Notice Me</li>
                <li>I'm a Bit of All of That, Honestly</li>
            </ul>
            <button>⬅️ Previous</button>
            <button>Next ➡️</button>
        </div>
    )
}

export default Quiz;