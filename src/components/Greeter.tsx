interface GreeterProps {
  message: string;
}
export const Greeter = ({ message }: GreeterProps): JSX.Element => {
  return <h1>{message}</h1>;
};

// interfaces are only for objects
// can be extended
