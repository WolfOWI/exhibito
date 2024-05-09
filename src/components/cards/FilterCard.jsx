import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

import SecondaryBtn from "../buttons/SecondaryBtn";
import PrimaryBtn from "../buttons/PrimaryBtn";

function FilterCard() {
  return (
    <>
      {/* Filter Header */}
      <div className="flex items-center justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center mb-2">
        <h4 className="font-body">Filter</h4>
        <div className="flex items-center justify-end">
          <PrimaryBtn label="Apply" />
          <div className="w-2">{/* Spacer */}</div>
          <SecondaryBtn label="Clear" />
        </div>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="font-body">Price</Accordion.Header>
          <Accordion.Body>
            <Form className="font-body">
              <Form.Label htmlFor="inputMinPrice">Minimum (R)</Form.Label>
              <Form.Control type="number" id="inputMinPrice" />
              <Form.Label className="mt-3" htmlFor="inputMinPrice">
                Maximum (R)
              </Form.Label>
              <Form.Control type="number" id="inputMinPrice" />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="font-body">Date</Accordion.Header>
          <Accordion.Body>
            <Form className="font-body">
              <Form.Label htmlFor="inputMinPrice">From</Form.Label>
              <Form.Control type="date" id="inputMinPrice" />
              <Form.Label className="mt-3" htmlFor="inputMinPrice">
                To
              </Form.Label>
              <Form.Control type="date" id="inputMinPrice" />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="font-body">Location</Accordion.Header>
          <Accordion.Body>
            <Form.Select aria-label="Default select example">
              <option disabled>Select Province</option>
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
            <Form>
              {["radio"].map((type) => (
                <div key={`default-radio`} className="mb-3 font-body">
                  <Form.Check type="radio" id={`all`} label={"All"} />
                  <Form.Check type="radio" id={`kayla`} label={"Kayla House"} />
                  <Form.Check type="radio" id={`ine`} label={"Ine House"} />
                  <Form.Check type="radio" id={`freddy`} label={"Freddy House"} />
                  <Form.Check type="radio" id={`wolf`} label={"Wolf House"} />
                  <Form.Check type="radio" id={`tsungai`} label={"Tsungai House"} />
                </div>
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FilterCard;
