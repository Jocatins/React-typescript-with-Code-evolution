type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// destructuring Props
const Input = ({ value, handleChange }: InputProps) => {
  // Or
  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event);
  //   };
  return (
    <>
      <h4>Input</h4>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
};

export default Input;
