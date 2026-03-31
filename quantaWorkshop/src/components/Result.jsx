function Result({ score, total, restart }) {
  return (
    <div>
      <h1>Quiz Finished 🎉</h1>
      <p>
        Score: {score} / {total}
      </p>

      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default Result;