function Question({ data, handleAnswer }) {
  return (
    <div>
      <h2>{data.question}</h2>

      {data.answers.map((ans, index) => (
        <button key={index} onClick={() => handleAnswer(ans)}>
          {ans}
        </button>
      ))}
    </div>
  );
}

export default Question;