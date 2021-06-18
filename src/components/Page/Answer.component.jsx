import {useState} from 'react'
import {useForm} from 'react-hook-form'
import { Redirect } from 'react-router'

import JawabanPendek from '../Jawaban/JawabanPendek'
import JawabanPilgan from '../Jawaban/JawabanPilgan'
import JawabanText from '../Jawaban/JawabanText'

const Answer = ({result, setResult}) => {
  // const {questions} = result.questions
  const {register, handleSubmit,reset} = useForm()
  const [number, setNumber] = useState(0)
  const [redirect, setRedirect] = useState(false)
  const [submitAnswer, setSubmitAnswer] = useState(false)
  const submitAnswersClick = () => {
    setRedirect(redirect => true)
  }
  const nextQuestion = (dataAnswer) => {
    console.log(result.questions[number].data)
    result.questions[number].data['answer'] = dataAnswer.answer
    console.log(result.questions[number].data)
    if(result.questions.length -1 === number) {
      setSubmitAnswer(submitAnswer => true)
    } else {
      setNumber(number => number +1)
    }
    reset()
  }
  let answerForm = ''
  if(result.questions[number].type === 'pg') {
    answerForm = <div><JawabanPilgan register={register} result={result} number={number}/></div>
  } else if (result.questions[number].type === 'pendek') {
    answerForm = <div><JawabanPendek register={register}/></div>
  } else if (result.questions[number].type === 'text') {
    answerForm = <div><JawabanText register={register}/></div>
  }
  // console.log(result.questions[number].type)
  console.log(result.questions.length)
  return (
    <>
    {
      redirect ? <Redirect to='/jawaban'/> :
      <div>
      {/* {result.questions.length - 1 === number ? 
      <div>Selesai</div> :
      } */}
      {submitAnswer ? 
      <div>
        Selesai
        Terimakasih {result.identitas.nama} <br/>
        <button onClick={submitAnswersClick}>Lihat Jawaban</button>
      </div> : 
      <form onSubmit={handleSubmit(nextQuestion)}>
      {result.questions[number].data.question}
      {answerForm}
      <button type="submit">Next</button>
    </form>}
    </div>
    }
    </>
  )
}

export default Answer
