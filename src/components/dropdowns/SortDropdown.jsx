// Sorting Outlined Dropdown

import Dropdown from "react-bootstrap/Dropdown";

function SortDropdown() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="bg-transparent hover:bg-scarlet-melody-20% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body text-scarlet-melody-BASE">
          Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Price Ascending</Dropdown.Item>
          <Dropdown.Item href="#">Price Descending</Dropdown.Item>
          <Dropdown.Item href="#">Bathrooms Ascending</Dropdown.Item>
          <Dropdown.Item href="#">Bathrooms Descending</Dropdown.Item>
          <Dropdown.Item href="#">Bedrooms Ascending</Dropdown.Item>
          <Dropdown.Item href="#">Bedrooms Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SortDropdown;
