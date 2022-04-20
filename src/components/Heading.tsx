type HeaderProps = {
  children: string;
};

export const Heading = (props: HeaderProps) => {
  return <div>{props.children}</div>;
};
