import { useState } from "react";

export function Rendering() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  const [age, setAge] = useState(59);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const handleIncreaseAge = () => {
    setAge(age + 1);
  };

  return (
    <>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name: <input value={lastName} onChange={handleLastNameChange} />
      </label>

      <div>
        <h1>Person Details</h1>
        <p>{fullName}</p>
        <p>{age}</p>
      </div>

      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  );
}
