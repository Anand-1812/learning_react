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
  const handleButtonClick = () => {
    window.location.href = "https://www.amazon.in";
  };

  return (
    <div>
      <Button
        text="Buy your thing"
        color="gray"
        fontSize={12}
        padding={8}
        handleClick={handleButtonClick}
      />
    </div>
  );
}
