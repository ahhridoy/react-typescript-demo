type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: inputProps) => {
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event)
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default Input;
