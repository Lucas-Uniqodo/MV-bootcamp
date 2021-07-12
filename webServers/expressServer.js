
// Use the instructions above to create a web server running on port 3000, serving static content from a public directory within your project

// Validate that you see the files being loaded in the Network section of your browser's Developer Tools. Look at the HTTP status codes, what happens to them when you refresh?

// Now try creating additional HTML pages and link them using anchor tags e.g.

// <a href="/about.html">About me</a>
// Commit your code into Github and share the link with your coach for review

const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
