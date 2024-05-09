// 2nd Navigation Bar for admin dashboard

function AdminNav() {
  return (
    <div>
      <div className="black-bg">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active text-canvas-white-BASE m-2" aria-current="page" href="#" >Pending Events</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-canvas-white-BASE m-2" href="#">Flagged Comments</a>
            </li>
        </ul>
      </div>

      
    </div> 
  );
}

export default AdminNav;