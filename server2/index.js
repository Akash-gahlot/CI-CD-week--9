const express = require("express");
const app = express();
const PORT = 3000;

app.get("/name", (req, resp) => {
    resp.send("My name is akash galot")
});

app.get("/EC2", (req, resp) => { 
    resp.send("I am up over AWS EC2 ");
})
app.listen(PORT, () => { 
    console.log("Server is up on PORT : " + PORT);    
})