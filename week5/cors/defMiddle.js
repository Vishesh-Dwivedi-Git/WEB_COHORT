const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors()); // Correctly use the cors middleware

app.post("/sum", function(req, res) {
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    res.json({
        sum: a + b
    });
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
