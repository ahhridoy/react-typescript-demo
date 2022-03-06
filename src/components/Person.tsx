import { PersonProps } from "./Person.types";

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h1>
        {" "}
        {name.first} {name.last}{" "}
      </h1>
    </div>
  );
};

export default Person;
