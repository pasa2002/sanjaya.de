const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS

app.use(express.json());

app.post('/submitForm', async (req, res) => {
  try {
    const response = await fetch('https://formspree.io/f/mleqeajl', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      res.status(200).send('Form submitted successfully');
    } else {
      res.status(response.status).send('Error submitting form');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
