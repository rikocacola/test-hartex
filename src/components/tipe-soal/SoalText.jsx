const SoalText = ({register}) => {
  return (
    <><input type='text' placeholder="Question" {...register("question", {required:true})}/></>
  )
}

export default SoalText
