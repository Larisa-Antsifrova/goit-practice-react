// Basic button component with onClick handler
const Button = ({ text }) => {
  const handleClick = () => {
    alert(`Hey! You have clicked ${text}`)
  };
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;