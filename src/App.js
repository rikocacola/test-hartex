import {useState} from 'react'
import {Route, Switch} from 'react-router-dom'

import Identitas from './components/Page/Identitas.component'
import Quiz from './components/Page/Quiz/Quiz.component'
import Answer from './components/Page/Answer.component'
import Jawaban from './components/Page/Jawaban.component'

import './App.css'

const App = () => {
  const [result, setResult] = useState({})
  
  return (
    <div className="app">
      <div className="sections">
        <Switch>
          <Route exact path='/' render={() => <Identitas result={result} setResult={setResult}/>}/>
          <Route exact path='/quiz' render={()=> <Quiz result={result} setResult={setResult}/>}/>
          <Route exact path='/quiz/:uuid' render={()=> <Answer result={result} setResult={setResult}/>}/>
          <Route exact path='/jawaban' render={()=> <Jawaban result={result} setResult={setResult}/>}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;
