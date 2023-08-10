function Output (props) {
  return (
    <p className="text-xl">Result: <span className="font-bold">{props.result.length != 0 ? props.result : 0}</span></p>
  )
}
export default Output;