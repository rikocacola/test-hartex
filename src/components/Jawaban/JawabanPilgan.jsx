const JawabanPilgan = ({register, result, number}) => {
  return (
    <>
    {/* <input type="text" {...register("answer", {required:false})}/>w */}
    <input {...register("answer", { required: true })} type="radio" value={result.questions[number].data.option1} />
    <label>{result.questions[number].data.option1}</label><br/>
    <input {...register("answer", { required: true })} type="radio" value={result.questions[number].data.option2} />
    <label>{result.questions[number].data.option2}</label><br/>
    <input {...register("answer", { required: true })} type="radio" value={result.questions[number].data.option3} />
    <label>{result.questions[number].data.option3}</label><br/>
    <input {...register("answer", { required: true })} type="radio" value={result.questions[number].data.option4} />
    <label>{result.questions[number].data.option4}</label><br/>
    </>
  )
}

export default JawabanPilgan