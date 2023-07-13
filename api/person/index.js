const mysql = require('mysql');

// Create a connection to the Azure MySQL database
const connection = mysql.createConnection({
  host: 'webserver.mysql.database.azure.com',
  user: 'webadmin',
  password: 'Password123',
  database: 'debee',
  port: 3306, // Replace with the appropriate port if necessary
  ssl: true // Enable SSL if required for your Azure MySQL database
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database!');
  }
});
module.exports = function (context, req) {
    
    if (req.method === 'GET') {
        // Retrieve data from the database
        connection.query('SELECT * FROM person', (error, results) => {
          if (error) {
            console.error('Error executing the SELECT query:', error);
            context.res.status(500).json({ error: 'Internal Server Error' });
          } else {
            console.log(results)
            context.res.json(results);
          }
        });
      }
      else if (req.method === 'POST') {
        // Retrieve data from the database
        const { name, surname, message,date } = req.body;
        connection.query('INSERT INTO person (Name, Surname, Message, date_column) VALUES (?, ?, ?, ?)', [name, surname, message, date], (error, result) => {
            if (error) {
              console.error('Error executing the INSERT query:', error);
              context.res.status(500).json({ error: 'Internal Server Error' });
            } else {
              context.res.status(200).json({ message: 'Person saved successfully' });
            }
          });
      }
    //context.res.json("hello");
    //context.res.json
};


  
  
  