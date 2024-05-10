// Primary Filled Button
import Button from "react-bootstrap/Button";

function PrimaryBtn(props) {
  return (
    <Button
      onClick={props.onClick}
      className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body ${props.className}`}
    >
      {props.label}
    </Button>
  );
}

export default PrimaryBtn;
