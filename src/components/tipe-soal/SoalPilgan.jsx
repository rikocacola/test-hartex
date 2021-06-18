const SoalPilgan = ({register}) => {
  return (
    <div>
      <input type='text' placeholder="Question" {...register("question", {required:true})}/><br/>
      <input type='text' placeholder="option1" {...register("option1", {required:true})} style={{marginRight:'20px'}}/>
      <input type='text' placeholder="option2" {...register("option2", {required:true})}/><br/>
      <input type='text' placeholder="option3" {...register("option3", {required:true})} style={{marginRight:'20px'}}/>
      <input type='text' placeholder="option4" {...register("option4", {required:true})}/>
    </div>
  )
}

export default SoalPilgan
