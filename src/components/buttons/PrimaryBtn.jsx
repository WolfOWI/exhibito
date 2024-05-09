// Primary Filled Button
import Button from "react-bootstrap/Button";

function PrimaryBtn(props) {
  return (
    <Button className="bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-6 border-scarlet-melody-BASE rounded-full px-4 font-body">
      {props.label}
    </Button>
  );
}

export default PrimaryBtn;
