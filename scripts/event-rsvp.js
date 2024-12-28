

// Example Data for Events and RSVPs
const events = [
    { id: 1, name: "Team Meeting", date: "2024-12-30", time: "10:00 AM", location: "Zoom" },
    { id: 2, name: "Birthday Party", date: "2025-01-05", time: "6:00 PM", location: "Central Park" },
];

const rsvps = {
    1: [ // RSVPs for event ID 1
        { name: "Alice", status: "Yes" },
        { name: "Bob", status: "Maybe" },
    ],
    2: [ // RSVPs for event ID 2
        { name: "Charlie", status: "No" },
        { name: "Dana", status: "Yes" },
    ],
};

// Load events into the table
function loadEvents() {

    const eventsTableBody = document.getElementById('eventsTableBody');

    eventsTableBody.innerHTML = '';

    events.forEach(event => {
        const row = `
            <tr>
                <td>${event.name}</td>
                <td>${event.date}</td>
                <td>${event.time}</td>
                <td>${event.location}</td>
                <td class="cta">
                    <button onclick="viewRSVPs(${event.id})">View RSVPs</button>
                    <button onclick="editEvent(${event.id})">Edit</button>
                    <button onclick="deleteEvent(${event.id})">Delete</button>
                </td>
            </tr>
        `;
        eventsTableBody.innerHTML += row;
    });
}

// Load RSVPs for a specific event
function viewRSVPs(eventId) {

    const rsvpTableBody = document.getElementById('rsvpTableBody');

    rsvpTableBody.innerHTML = '';

    const attendees = rsvps[eventId] || [];

    attendees.forEach(attendee => {
        const row = `
            <tr>
                <td>${attendee.name}</td>
                <td>${attendee.status}</td>
                
                <td class="cta">
                    <button onclick="updateRSVP('${attendee.name}')">Update Status</button>
                </td>
            </tr>
        `;
        rsvpTableBody.innerHTML += row;
    });
}

// Placeholder functions for Edit, Delete, and Update RSVP
function editEvent(eventId) {
    alert(`Edit event ID: ${eventId}`);
    // Add logic to handle editing event details
}

function deleteEvent(eventId) {
    alert(`Delete event ID: ${eventId}`);
    // Add logic to delete the event
}

function updateRSVP(name) {
    alert(`Update RSVP status for: ${name}`);
    // Add logic to update RSVP status
}

// Initialize the page
window.onload = () => {
    loadEvents();
};