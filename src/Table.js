import React from 'react';
import './index.css'; // Import the CSS file for Table component

const Table = ({ entries }) => {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Message</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {entries.length>=0 && entries.map((item) => (
          <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item.Surname}</td>
            <td>{item.Message}</td>
            <td>{new Date(item.date_column).toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" })}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
