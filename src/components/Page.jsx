import Button from "./Button";
import Form from './Form';

// Common Home page component that incorporates titles, buttons, and form
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
    <Form/>
  </>);
};

export default Page;
