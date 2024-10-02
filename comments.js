// Create web server
// 1. Load express
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Listen to incoming requests
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 4. Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

// 5. Create a route to handle comments
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// 6. Create a route to handle comments
app.get('/comments/:id', (req, res) => {
    res.send('Comment ' + req.params.id);
});

// 7. Create a route to handle comments
app.post('/comments', (req, res) => {
    res.send('Create a new comment');
});

// 8. Create a route to handle comments
app.put('/comments/:id', (req, res) => {
    res.send('Update comment ' + req.params.id);
});

// 9. Create a route to handle comments
app.delete('/comments/:id', (req, res) => {
    res.send('Delete comment ' + req.params.id);
});