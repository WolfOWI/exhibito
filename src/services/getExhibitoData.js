// Get Data from Exhibito Database on MongoDB Atlas

// USERS
// -------------------------------------
// Get array of all users
export function getAllUsers() {
  return fetch("http://localhost:3001/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}
// -------------------------------------

// EVENTS
// -------------------------------------
// Get array of all events
export function getAllEvents() {
  return fetch("http://localhost:3001/events")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}

// Get event details by ID
export function getEventById(eventId) {
  return fetch(`http://localhost:3001/events/${eventId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed to fetch specific event details.");
    })
    .catch((err) => {
      throw err;
    });
}

// -------------------------------------
