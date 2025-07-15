import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({ name: "johh", age: 54 });

  const handleIncreaseAge = () => {
    console.log("In handle increase age before set person call", person);
    setPerson({ ...person, age: person.age + 1 });
    console.log("After set person call", person);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default App;
