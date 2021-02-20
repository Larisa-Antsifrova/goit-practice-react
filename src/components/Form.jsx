import InputwithLabel from './Input';
import Button from './Button';

// Feedback form component
const Form = () => {
  return (
    <form action="">
      <h3>Leave your feedback:</h3>
      <InputwithLabel id="name" labelText="Your name" inputType="text" name="name" placeholder="Type in your name" />
      <br/>
      <InputwithLabel id="password" labelText="Your password" inputType="password" name="password" placeholder="Type in your password" />
      <br/>
      <InputwithLabel id="age" labelText="Your age" inputType="range" name="age" min="14" max="99" />
      <br/>
      <Button text="Submit"/>
    </form>
  )
}

export default Form;