import "./App.css";
import { Test } from "./components/polymorphic/Test";

// import { CustomButton } from "./components/html/Button";
// import { RandomNumber } from "./components/restriction/RandomNumber";
// import { Toast } from "./components/Toast";
// import { Private } from "./components/auth/Private";
// import { Profile } from "./components/auth/Profile";
// import { Counter } from "./components/class/Counter";
// import { User } from "./components/context/User";
// import { UserContextProvider } from "./components/context/UserContext";

function App() {
  return (
    <div className="App">
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Counter message="Hello, this is the counter message" />
      <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["Hell-boy", "captain-Jack", "Philos stone"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[{ first: "Titan", last: "Joca" }]}
        onClick={(item) => console.log(item)}
      />
      <List items={[90, 54, 55, 43]} onClick={(item) => console.log(item)} /> */}
      {/* <RandomNumber value={34} isZero={true} />
      <Toast position="center - center" /> */}

      {/* <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton> */}
      <Test as="h2" size="lg">
        Heading
      </Test>
      <Test as="p" size="md">
        Medium
      </Test>
      <Test as="h3" size="sm">
        Small
      </Test>
      <Test as="label" htmlFor="id" color="secondary">
        Label
      </Test>
    </div>
  );
}

export default App;
