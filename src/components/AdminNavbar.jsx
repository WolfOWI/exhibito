// 2nd Navigation Bar for admin dashboard

import Nav from "react-bootstrap/Nav";

function AdminNav() {
  return (
    // <Nav className="">
    //   <Nav.Link href="/" className="">
    //     About Us
    //   </Nav.Link>
    //   <Nav.Link href="/" className="text-ink-silhouette-BASE pl-0">
    //     Contact Us
    //   </Nav.Link>
    //   <Nav.Link href="/" className="text-ink-silhouette-BASE pl-0">
    //     Privacy Policy
    //   </Nav.Link>
    // </Nav>
    <div>
      <Nav className="black-bg flex justify-center items-center">
        <Nav.Link href="/admin/events" className="text-canvas-white-BASE">
          Pending Events
        </Nav.Link>
        <Nav.Link href="/admin/comments" className="text-canvas-white-BASE">
          Flagged Comments
        </Nav.Link>
        {/* 
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active text-canvas-white-BASE m-2" aria-current="page" href="#"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-canvas-white-BASE m-2" href="#">
              Flagged Comments
            </a>
          </li>
        </ul> */}
      </Nav>
    </div>
  );
}

export default AdminNav;
