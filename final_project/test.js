const axios = require('axios');

// task 10
async function fetchData() {
    try {
        const response = await axios.get('http://localhost:5000');
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchData();

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