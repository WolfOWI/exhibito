import Dropdown from "react-bootstrap/Dropdown";

import { useState } from "react";

function SortDropdown(props) {
  // State of dropdown text label
  const [dropdownLabel, setDropdownLabel] = useState("Sort");

  // Handling Dropdown Label Name
  const handleDropdownLabel = (sortName) => {
    if (sortName === "clear") {
      setDropdownLabel(`Sort`);
    } else {
      setDropdownLabel(`Sorting by ${sortName}`);
    }
  };

  // Handling sorting - callback function (Upcoming Page)
  const handleSortSelection = (sortType) => {
    props.onSortSelected(sortType);
  };

  return (
    <>
      <Dropdown className="w-full">
        <Dropdown.Toggle
          className={`bg-transparent hover:bg-scarlet-melody-20% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body text-scarlet-melody-BASE ${props.className}`}
        >
          {dropdownLabel}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              handleSortSelection("priceAsc");
              handleDropdownLabel("Price Ascending");
            }}
          >
            Price &#9650;
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleSortSelection("priceDesc");
              handleDropdownLabel("Price Descending");
            }}
          >
            Price &#9660;
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleSortSelection("dateAsc");
              handleDropdownLabel("Date Ascending");
            }}
          >
            Date &#9650;
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleSortSelection("dateDesc");
              handleDropdownLabel("Date Descending");
            }}
          >
            Date &#9660;
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleSortSelection("seatsAsc");
              handleDropdownLabel("Seats Available Ascending");
            }}
          >
            Seats Available &#9650;
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleSortSelection("seatsDesc");
              handleDropdownLabel("Seats Available Descending");
            }}
          >
            Seats Available &#9660;
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleSortSelection("clear");
              handleDropdownLabel("clear");
            }}
          >
            Clear &#10060;
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default SortDropdown;
