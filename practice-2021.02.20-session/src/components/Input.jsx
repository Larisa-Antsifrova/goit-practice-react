// Input component with a lot of props to customize instances
const InputwithLabel = ({ id, labelText, inputType, name, placeholder, min, max }) => {
  return (<>
    <label htmlFor={id}>{labelText}</label>
    <br/>
    <input type={inputType} id={id} name={name} placeholder={placeholder} min={min} max={max}></input>
  </>)
};

export default InputwithLabel;