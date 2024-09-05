document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get feedback elements
    const feedbackElement = document.getElementById('feedback');
    
    // Basic validation
    if (name === '' || email === '' || message === '') {
        feedbackElement.textContent = 'Please fill in all fields.';
        feedbackElement.style.color = 'red';
        return;
    }

    // Email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedbackElement.textContent = 'Please enter a valid email address.';
        feedbackElement.style.color = 'red';
        return;
    }

    // Clear any previous feedback
    feedbackElement.textContent = '';

    // Simulate form submission success
    feedbackElement.textContent = `Thank you for your message, ${name}!`;
    feedbackElement.style.color = 'green';
    
    // Clear the form fields after submission
    this.reset();
});
