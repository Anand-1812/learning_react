function Button(props) {
  const btnStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
    padding: props.padding + "px",
  };

  return (
    <button onClick={props.handleClick} style={btnStyle}>
      {props.text}
    </button>
  );
}

function handleButtonClick() {
  return (
    <ul>
      <li>Class</li>
      <li>Study</li>
      <li>sleep</li>
    </ul>
  );
}

export function Rendering() {
  return (
    <div>
      <Button
        text="Buy your thing"
        color="#808080"
        fontSize={12}
        padding={8}
        handleClick={handleButtonClick}
      />
    </div>
  );
}
