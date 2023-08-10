function Input (props) {
  return (
 <div>
   <legend className="text-xl text-center mb-5">Amount:</legend>
  <input className="mb-5 outline-1 outline-gray-300 border-2 py-2 pl-2 text-lg rounded-xl" type="text" value={props.value} onChange={props.onChange}/> 
  </div>
  )
  }

  export default Input;