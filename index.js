const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST Endpoint
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numbers = [];
  const alphabets = [];
  let highestLowercase = '';

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string') {
      alphabets.push(item);
      if (item === item.toLowerCase() && item > highestLowercase) {
        highestLowercase = item;
      }
    }
  });

  const response = {
    is_success: true,
    user_id: 'Gunjan Bhartia', // Replace with your full name and birthdate
    email: 'gunjan.bhartia2021@vitstudent.ac.in', // Replace with your college email
    roll_number: '21BCB0078', // Replace with your college roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
  };

  res.status(200).json(response);
});

// GET Endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
