// 2nd Navigation Bar for admin dashboard

import Nav from "react-bootstrap/Nav";

function AdminNav() {
  return (
    <div>
      <Nav className="black-bg flex justify-center items-center">
        <Nav.Link href="/admin/events" className="text-canvas-white-BASE">
          Pending Events
        </Nav.Link>
        <Nav.Link href="/admin/comments" className="text-canvas-white-BASE">
          Flagged Comments
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default AdminNav;
