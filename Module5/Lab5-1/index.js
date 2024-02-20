const express = require("express"); // import the express package

const app1 = express(); // create a new app
const port1 = 3000; // unique 4 digit port

const app2 = express(); // create a new app
const port2 = 3001; // unique 4 digit port

// starts the backend app on the given port
app1.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`);
});

app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`);
})