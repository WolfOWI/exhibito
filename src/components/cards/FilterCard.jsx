// Filtering Component

// Import
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import SecondaryBtn from "../buttons/SecondaryBtn";
import PrimaryBtn from "../buttons/PrimaryBtn";

function FilterCard({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
  artHouse,
  setArtHouse,
  applyFilters,
  clearFilters,
}) {
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleArtHouseChange = (e) => {
    setArtHouse(e.target.value);
  };

  return (
    <>
      {/* Filter Header */}
      <div className="flex items-center justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center mb-2">
        <h4 className="font-body">Filter</h4>
        <div className="flex items-center justify-end">
          <PrimaryBtn label="Apply" onClick={applyFilters} />
          <div className="w-2">{/* Spacer */}</div>
          <SecondaryBtn label="Clear" onClick={clearFilters} />
        </div>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="font-body">Price</Accordion.Header>
          <Accordion.Body>
            <Form className="font-body">
              <Form.Label htmlFor="inputMinPrice">Minimum (R)</Form.Label>
              <Form.Control
                type="number"
                id="inputMinPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <Form.Label className="mt-3" htmlFor="inputMaxPrice">
                Maximum (R)
              </Form.Label>
              <Form.Control
                type="number"
                id="inputMaxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="font-body">Date</Accordion.Header>
          <Accordion.Body>
            <Form className="font-body">
              <Form.Label htmlFor="inputStartDate">From</Form.Label>
              <Form.Control
                type="date"
                id="inputStartDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Form.Label className="mt-3" htmlFor="inputEndDate">
                To
              </Form.Label>
              <Form.Control
                type="date"
                id="inputEndDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="font-body">Location</Accordion.Header>
          <Accordion.Body>
            <Form.Select
              aria-label="Default select example"
              value={location}
              onChange={handleLocationChange}
            >
              <option value="">All</option>
              <option value="Gauteng">Gauteng</option>
              <option value="FreeState">Free State</option>
              <option value="KwazuluNatal">KwaZulu-Natal</option>
              <option value="EasternCape">Eastern Cape</option>
              <option value="WesternCape">Western Cape</option>
              <option value="NorthernCape">Northern Cape</option>
              <option value="NorthWest">North West</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Limpopo">Limpopo</option>
            </Form.Select>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="font-body">Art House</Accordion.Header>
          <Accordion.Body>
            <Form onChange={handleArtHouseChange}>
              <Form.Check
                type="radio"
                name="artHouse"
                id={`all`}
                value=""
                label={"All"}
                checked={artHouse === ""}
              />
              <Form.Check
                type="radio"
                name="artHouse"
                id={`kayla`}
                value="Kayla House"
                label={"Kayla House"}
                checked={artHouse === "Kayla House"}
              />
              <Form.Check
                type="radio"
                name="artHouse"
                id={`ine`}
                value="Ine House"
                label={"Ine House"}
                checked={artHouse === "Ine House"}
              />
              <Form.Check
                type="radio"
                name="artHouse"
                id={`freddy`}
                value="Freddy House"
                label={"Freddy House"}
                checked={artHouse === "Freddy House"}
              />
              <Form.Check
                type="radio"
                name="artHouse"
                id={`wolf`}
                value="Wolf House"
                label={"Wolf House"}
                checked={artHouse === "Wolf House"}
              />
              <Form.Check
                type="radio"
                name="artHouse"
                id={`tsungai`}
                value="Tsungai House"
                label={"Tsungai House"}
                checked={artHouse === "Tsungai House"}
              />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FilterCard;
