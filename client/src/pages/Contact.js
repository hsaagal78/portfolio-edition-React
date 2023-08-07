import { useState } from 'react';

function Contact() {
  // Import the 'useState' hook from React
  // Define state for form data using 'useState'
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    message: ''
  });
    // Initialize state variables for user's name, email, and message in the form
  // Define state for showing the confirmation message
  const [showConfirmation, setShowConfirmation] = useState(false);
  // Initialize a state variable to control whether to display the confirmation message
  const [messageError, setMessageError] = useState(false);

  // Define a function to handle input changes in the form
  const handleInputChange = event => {
    const stateProp = event.target.name;
    const value = event.target.value;

// Update the form data state using spread operator
    setFormData({
      ...formData,
      [stateProp]: value
    });
    // A condicional for make sure user send a message
    if (stateProp === 'message') {
      setMessageError(false);
    }
  };
  
  // This function captures the changes in the form inputs and updates the corresponding state

  // Define a function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    //Confirm messages is no enty
    if (formData.message.trim() === '') {
      setMessageError(true);
      setTimeout(() => setMessageError(false), 3500);
      return;
    }

    // Define the API endpoint URL and access key
    const url = 'https://api.web3forms.com/submit';
    const access_key = '6f414466-9832-4b96-b209-4952a1eefff5';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        access_key
      })
    }).then(res => res.json())
      .then(data => {
      // Clear the form data and show the confirmation message
        setFormData({
          userName: '',
          email: '',
          message: ''
        });
        setShowConfirmation(true);

        // Hide the confirmation message after a delay

        setTimeout(() => setShowConfirmation(false), 3500);
      })
      .catch(err => console.log(err));
  }
  // This function handles the form submission and communicates with the API
  // Return the JSX for rendering
  return (
    <main className="contact-container">
      <h1 className="text-center">Contact Me</h1>
      {/* Promt a message using showConfirmation funtion */}
      {showConfirmation && <p className="text-center confirmation">Thanks for your message!.</p>}

      <form
      //Call handleSubmit funtion
        onSubmit={handleSubmit}
        className="column">
        <input
          name="userName"
          //Call handleInputChange funtion
          onChange={handleInputChange}
          value={formData.userName}
          type="text"
          placeholder="Enter your name" />
        <input
          name="email"
          //Call handleInputChange funtion
          onChange={handleInputChange}
          value={formData.email}
          type="email"
          placeholder="Enter your email address" />
        <textarea
          name="message"
          //Call handleInputChange funtion
          onChange={handleInputChange}
          value={formData.message}
          cols="30"
          rows="10"
          placeholder="Enter your message"></textarea>
          {/* Promt a massage using a funtion messageError */}
         {messageError && <p className="error">Enter your message is required</p>}
        <button className='button'>Submit</button>
      </form>
    </main>
  )
}

export default Contact;