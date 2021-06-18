import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Button} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router';

import SoalPilgan from '../../tipe-soal/SoalPilgan'
import SoalText from '../../tipe-soal/SoalText'
import SoalPreview from '../../SoalPreview.component'

const Quiz = ({result,setResult}) => {
  const [valOpt,setValOpt] = useState('pg')
  const [redirectToQ, setRedirectToQ] = useState(false)
  const [questions, setQuestions] = useState([])
  const {handleSubmit, register, reset} = useForm()
  const uuid = uuidv4();
  // console.log(uuid)
  // let questions = []
  
  const handleChange = (event) => {
    // event.preventDefault()
    setValOpt(event.target.value)
  }
  const onSubmit = (data) => {
    setQuestions(current => [...current, { data, type: valOpt }])
    reset()
  }
  console.log(result)


  let soal =' '
  // console.log(valOpt)
  if(valOpt === 'pg') {
    soal = <div><SoalPilgan register={register}/></div>
  } else {
    soal =<div><SoalText register={register}/></div>
  }

  // const identitas = sessionStorage.getItem('identitas') 
  // console.log(identitas)
  const createQuestion = () => {
    setResult({...result, questions})
    setRedirectToQ(redirectToQ=> true)
  }
return(
  <div>
    {result.identitas ? 
    <div>
    {redirectToQ ? <Redirect to={`/quiz/${uuid}`}/> : 
    <div>
      Select Category
      <select value={valOpt} onChange={handleChange}>
        <option value="pg">Soal Pilgan</option>
        <option value="pendek">Soal Pendek</option>
        <option value="text">Soal Text</option>
      </select>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {soal}
          <Button variant="primary" type="submit">
            Add
          </Button>
        </form>
      </div>
      <div>
        <SoalPreview questions={questions}/>
        {questions.length === 0 ? 
        <div>There's No Question To Review</div> :
        <Button variant="secondary" onClick={createQuestion}>Create Question</Button>
        }
      </div>
    </div>
      }
  </div> : 
  <Redirect to='/'/>}
  </div>
)
}

export default Quiz;