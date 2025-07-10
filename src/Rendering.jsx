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

export function Rendering() {
  const handleButtonClick = () => { };

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
