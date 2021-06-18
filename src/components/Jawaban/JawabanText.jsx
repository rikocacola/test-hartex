const JawabanText =({register}) => {
  return (
    <>
    <textarea {...register("answer", {required:true})}/>
    </>
  )
}

export default JawabanText
