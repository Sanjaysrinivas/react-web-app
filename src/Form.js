import React, { useState } from 'react';
import './index.css'; // Import the CSS file for Form component

const Form = ({fetchData}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    postData();
    fetchData();
  };

  const postData = async () => {
    try {
      const response = await fetch('/api/person',{method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({name, surname, message, date})});
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      console.log(data.message)

    } catch (error) {
      console.error('Error posting data:', error);
    }
  };


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Enter Your Information</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Surname:</label>
        <input type="text" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message (max 30 characters):</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={30} />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} defaultValue={"Default"} onChange={(e) => setDate(e.target.value)} />
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
