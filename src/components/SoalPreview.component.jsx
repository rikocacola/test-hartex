const SoalPreview = ({questions}) => {
  // console.log(questions)
  return (
    <>{questions.map((question,index) => (
      <div key={index}>
        <strong>{question.data.question}</strong>
        {
        question.type === 'pg' ? 
        <ul>
          <li>{question.data.option1}</li>
          <li>{question.data.option2}</li>
          <li>{question.data.option3}</li>
          <li>{question.data.option4}</li>
        </ul> : ''
      }
      </div>
    ))}</>
  )
}

export default SoalPreview
