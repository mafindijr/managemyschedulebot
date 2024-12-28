const events = [
    { name: "Team Meeting", date: "2024-12-30", time: "10:00 AM", location: "Zoom" },
    { name: "Birthday Party", date: "2025-01-05", time: "6:00 PM", location: "Central Park" },
    { name: "Webinar", date: "2025-02-15", time: "3:00 PM", location: "Google Meet" }
];

// Function to Load Events into the List
function loadEvents() {
    const eventList = document.getElementById('eventList');
    
    events.forEach(event => {
        const listItem = `
            <li>
                <span>${event.name}</span>
                <span>${event.date} - ${event.time}</span>
                <span>${event.location}</span>
            </li>
        `;
        eventList.innerHTML += listItem;
    });
}

// Initialize Page
window.onload = () => {
    loadEvents();
};