// Event Props

import React from "react";

// type ButtonProps = {
//   handleClick: () => void;
// };
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 3)}>Button</button>
    </div>
  );
};

export default Button;