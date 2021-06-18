const JawabanPendek = ({register}) => {
  return (
    <><input type='text' placeholder="Answer" {...register("answer", {required:true})}/></>
  )
}

export default JawabanPendek