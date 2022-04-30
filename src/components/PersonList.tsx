import { Names } from "./Person.type";

type PersonListProps = {
  names: Names[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <>
      <div>
        PersonList
        {props.names.map((name, i) => {
          return (
            <h3 key={i}>
              {name.firstName} - {name.lastName}
            </h3>
          );
        })}
      </div>
    </>
  );
};

export default PersonList;
