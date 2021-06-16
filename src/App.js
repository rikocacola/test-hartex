import { Button, Container } from 'react-bootstrap';

import {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <div style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column', height:'100vh'}}>
        <h2>{count}</h2>
        Counter Angka Setiap Button di-click 1
        <Button variant="primary" onClick={()=> setCount(count + 1)}>Button</Button>
      </div>
    </Container>
  )
}

export default App;
