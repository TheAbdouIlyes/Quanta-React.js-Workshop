import { useState } from "react";
import questions from "../data/questions";
import Question from "../components/Question";
import Result from "../components/Result";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[current].correct) {
      setScore(score + 1);
    }

    setCurrent(current + 1);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
  };

  if (current >= questions.length) {
    return (
      <Result
        score={score}
        total={questions.length}
        restart={restart}
      />
    );
  }

  return (
    <Question
      data={questions[current]}
      handleAnswer={handleAnswer}
    />
  );
}

export default Quiz;