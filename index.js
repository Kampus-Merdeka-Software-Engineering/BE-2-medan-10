const express = require('express');
const path = require('path');
const db = require('./config/Database.js');
const userRoute = require('./routes/userRoute.js');
const hotelRoute = require('./routes/hotelRoute.js');
const paymentRoute = require('./routes/paymentRoute.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;


app.use(bodyParser.json());
app.use(express.json()) // reading data on body in json format
app.use(cors());



// Route
app.use(userRoute); 
app.use(hotelRoute);
app.use(paymentRoute);


// Endpoint untuk menangani login
app.post('/.OpulentRoom-main/login.html', async (req, res) => {
  try {
      const { name,email, password } = req.body;

      // Lakukan sesuatu dengan data, misalnya simpan ke database
      await db.User.create({ name ,email, password });

      res.status(201).json({ message: 'Login data saved successfully' });
  } catch (error) {
      console.error('Error saving login data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

//untuk sinkronisasi model
db.sync({ alter: true })
  .then(() => {
    console.log('Database Connected');

    // Menjalankan server pada port yang ditentukan
    app.listen(port, () => {
      console.log(`Server berjalan di http://localhost:${port}/`);
    });
  })
  .catch((error) => console.log(`Unable to connect to database: ${error}`));
