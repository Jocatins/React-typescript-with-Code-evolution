import React from "react";

type GreetProps = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome to {props.name} page {props.count}
        </h2>
      ) : (
        "You are not logged in"
      )}
    </div>
  );
};

export default Greet;
