 // Handle form submission
 document.getElementById('eventForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Collect form data
       const formData = {
        name: document.getElementById('eventName').value,
        date: document.getElementById('eventDate').value,
        time: document.getElementById('eventTime').value,
        location: document.getElementById('eventLocation').value,
        description: document.getElementById('eventDescription').value,
        recurring: document.getElementById('recurring').value,
    };

    // Send data to Telegram Bot API (placeholder URL)

    const createEventBtn = document.querySelector('.js-create-btn');
     
    
    createEventBtn.addEventListener('click', async function () {

        try {
            const response = await fetch('https://your-backend-url.com/create-event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert('Event created successfully!');
            } else {
                alert('Failed to create the event. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });

});