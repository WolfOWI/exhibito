// Secondary Outlined Button
import Button from "react-bootstrap/Button";

function SecondaryBtn(props) {
  return (
    <Button
      onClick={props.onClick}
      className={`bg-transparent hover:bg-scarlet-melody-20% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body text-scarlet-melody-BASE ${props.className}`}
    >
      {props.label}
    </Button>
  );
}

export default SecondaryBtn;
