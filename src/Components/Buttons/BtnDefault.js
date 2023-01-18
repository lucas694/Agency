import "./BtnDefault.css"

const BtnDefault = (props) =>{
  return(
    <>
      <button className={props.className}
              onClick={props.onClick}>{props.BtnText}{props.BtnIcon}</button>
    </>
  )
};export default BtnDefault