import { Name } from "./Person.types";

type personListProps = {
  names: Name[];
};

const PersonList = ({ names }: personListProps) => {
  return (
    <div>
      {names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
