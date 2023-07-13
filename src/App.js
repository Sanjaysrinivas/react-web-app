import React, { useState,useEffect } from 'react';
import Form from './Form';
import Table from './Table';

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/person');
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setEntries(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <h1>My Web App</h1>
      <p>Fill in the form below to add an entry to the database:</p>
      <Form fetchData={fetchData} />
      <Table entries={entries} />
    </div>
  );
};

export default App;
