import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import Input from "./components/Input";
import { Nico } from "./components/Nico";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
// import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Joca",
    last: "tins",
  };
  const nameList = [
    {
      firstName: "Bruno",
      lastName: "freya",
    },
    {
      firstName: "Tanila",
      lastName: "Bobo",
    },
    {
      firstName: "Bimbo",
      lastName: "freya",
    },
  ];
  return (
    <div className="App">
      <Greet name="Titan" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      {/* <Status status="loading" /> */}
      <Heading>Placeholder text</Heading>
      <Nico>
        <Heading>Hello</Heading>
      </Nico>
      <Button
        handleClick={(event, id) => {
          console.log("hello", event, id);
        }}
      />
      <Input value="" handleChange={(e) => console.log(e)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
