const Jawaban = ({result}) => {
  console.log(result)
  return (
    <div>
      <h1 style={{marginBottom: '50px', textAlign:'center'}}>JAWABAN</h1>
      <h3>Pilihan Ganda</h3>
      {result.questions.filter(question => question.type === "pg").map((question,index) => (
        <div key={index}>
          <div>Q : {question.data.question}</div>
          <div>A : {question.data.answer}</div>
        </div>
      ))}
      <h3>Pertanyaan Pendek</h3>
      {result.questions.filter(question => question.type === "pendek").map((question,index) => (
        <div key={index}>
          <div>Q : {question.data.question}</div>
          <div>A : {question.data.answer}</div>
        </div>
      ))}
      <h3>Pertanyaan Text</h3>
      {result.questions.filter(question => question.type === "text").map((question,index) => (
        <div key={index}>
          <div>Q : {question.data.question}</div>
          <div>A : {question.data.answer}</div>
        </div>
      ))}
    </div>
  )
}

export default Jawaban
