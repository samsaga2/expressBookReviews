const axios = require('axios');

// task 10
axios.get('http://localhost:5000')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


// task 11
axios.get('http://localhost:5000/isbn/2')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


// task 12
axios.get('http://localhost:5000/author/Unknown')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


// task 13
axios.get('http://localhost:5000/title/The Divine Comedy')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });