import React, { useState, useEffect } from "react";

const Quiz = () => {
    const [question, setQuestion] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finalTally, setFinalTally] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => { 
        const quizQuestions = [
            { text: 'Which Option Best Describes You?', options: ['A', 'B', 'C', 'D'] },
        ];
        setQuestion(quizQuestions);
    }, []);

    return(
        <div>
            <h3>Which one best describes you?</h3>
            <ul>
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