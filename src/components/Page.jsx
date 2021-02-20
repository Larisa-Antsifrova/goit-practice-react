import Button from "./Button";

const Page = ({ title, date }) => {
  return (<>
    <h1>Hello React!</h1>
    <h2>{title}</h2>
    <p>Today is {date}.</p>
     <Button text="Submit" />
     <Button text="Click" />
     <Button text="Send" />
  </>);
};

export default Page;
