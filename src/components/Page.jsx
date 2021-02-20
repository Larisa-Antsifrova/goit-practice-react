import Button from "./Button";
import InputwithLabel from './Input';


const Page = ({ title, date }) => {
  return (<>
    <h1>Hello React!</h1>
    <h2>{title}</h2>
    <p>Today is {date}.</p>
    <hr/>
     <Button text="Submit" />
     <Button text="Click" />
    <Button text="Send" />
    <hr/>
    <div>
      <p>Here comes the new form:</p>
      <InputwithLabel id="name" labelText="Your name" inputType="text" name="name" placeholder="Type in your name!" />
      <br/>
      <InputwithLabel id="email" labelText="Your email" inputType="email" name="email" placeholder="Type in your email!" />
      <br/>
    <InputwithLabel id="number" labelText="Your number" inputType="tel" name="number" placeholder="Type in your number!"/>
    </div>
  </>);
};

export default Page;
