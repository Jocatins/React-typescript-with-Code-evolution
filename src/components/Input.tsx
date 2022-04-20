type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  // Or
  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event);
  //   };
  return (
    <>
      <h4>Input</h4>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </>
  );
};

export default Input;
