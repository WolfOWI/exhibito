// GET Data from Exhibito Database on MongoDB Atlas

// Get the BASE_URL from environment variables
const baseUrl = process.env.BASE_URL || "http://localhost:3001";

// USERS
// -------------------------------------
// Get array of all users
export function getAllUsers() {
  return fetch(`${baseUrl}/users`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}

// Get specific user by ID
export function getUserById(userId) {
  return fetch(`${baseUrl}/users/${userId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error(`Failed to fetch user details for ID: ${userId}. Status: ${res.status}`);
      throw new Error("Failed to fetch specific user details.");
    })
    .catch((err) => {
      console.error(`Error fetching user details for ID: ${userId}`, err);
      throw err;
    });
}
// -------------------------------------

// EVENTS
// -------------------------------------
// Get array of all events
export function getAllEvents() {
  return fetch(`${baseUrl}/events`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}

// Get event details by ID
export function getEventById(eventId) {
  return fetch(`${baseUrl}/events/${eventId}`)
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

// COMMENTS
// -------------------------------------
// Get array of all comments
export function getAllComments() {
  return fetch(`${baseUrl}/comments`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}
// -------------------------------------

// HOUSES
// -------------------------------------
// Get specific art house by ID
export function getHouseById(houseId) {
  return fetch(`${baseUrl}/houses/${houseId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed to fetch art house details.");
    })
    .catch((err) => {
      throw err;
    });
}
// -------------------------------------

// TICKETS
// -------------------------------------
// Get tickets by user ID and status
export function getTicketsByStatus(userId, status) {
  return fetch(`${baseUrl}/tickets?userId=${userId}&status=${status}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed to fetch tickets.");
    })
    .catch((err) => {
      console.error(`Error fetching tickets for user ${userId} with status ${status}:`, err);
      throw err;
    });
} // -------------------------------------
