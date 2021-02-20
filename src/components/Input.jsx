const InputwithLabel = ({ id, labelText, inputType, name, placeholder }) => {
  return (<>
    <label htmlFor={id}>{labelText}</label>
    <br/>
    <input type={inputType} id={id} name={name} placeholder={placeholder}></input>
    
  </>)
};

export default InputwithLabel;