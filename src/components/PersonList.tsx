import { Names } from "./Person.type";

type PersonListProps = {
  names: Names[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <>
      <div>
        PersonList
        {props.names.map((name) => {
          return (
            <h3>
              {name.firstName} - {name.lastName}
            </h3>
          );
        })}
      </div>
    </>
  );
};

export default PersonList;
