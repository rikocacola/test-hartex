import {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {Redirect } from 'react-router-dom'

const Indentitas = ({result, setResult}) => {
  const [redirect, setRedirect] = useState(false)
  const {register, handleSubmit, error, reset} = useForm()
  const onSubmit = (data) => {
    // window.sessionStorage.setItem('identitas', JSON.stringify(data))
    setResult({...result, identitas: {nama: data.nama, noTelp: data.noTelp}})
    setRedirect(redirect => true)
    // console.log(data.nama)
  }
  // console.log(result.identitas.nama)

  return (
    <Container>
      {redirect ? <Redirect to='/quiz'/> :
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("nama", {required:true})} placeholder="Nama"/> 
        <input type="text" {...register("noTelp", {required:true, minLength:8})} placeholder="nomer Telepon"/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      }
      
    </Container>
  )
}

export default Indentitas;
