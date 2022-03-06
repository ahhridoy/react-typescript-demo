import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Anik",
    last: "Kumar",
  };

  const personList = [
    {
      first: "Anik",
      last: "Kumar",
    },
    {
      first: "Nahid",
      last: "Hossain",
    },
    {
      first: "Rakibul",
      last: "Islam",
    },
    {
      first: "AH",
      last: "Hridoy",
    },
  ];

  return (
    <div className="App">
      {/*
      <Greet name={"raihan"} messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo dicpario</Heading>
      </Oscar> 
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      ></Button>
      <Input value="" handleChange={(event) => console.log(event)}></Input>
      <Container
        styles={{ border: "1px solid black", padding: "1rem" }}
      ></Container>
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      */}
    </div>
  );
}

export default App;
