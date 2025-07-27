import { useState } from "react";


export default function FirstTest() {
  const [heading, setHeading] = useState("Nice heading");

  const clickHandler = () => {
    setHeading("Heading Changes");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>click me</button>
      <h1>{heading}</h1>
    </>
  );

}

