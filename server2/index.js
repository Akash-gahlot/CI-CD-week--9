const express = require("express");
const app = express();
const PORT = 3000;

app.get("/name", (req, resp) => {
    resp.send("My name is akash galot and this is my machine")
});

app.get("/EC2", (req, resp) => { 
    resp.send("I am up over AWS  instance of  gahlot ");
})
app.listen(PORT, () => { 
    console.log("Server is up on PORT : " + PORT);    
})