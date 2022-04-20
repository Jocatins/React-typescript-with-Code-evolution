type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
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
