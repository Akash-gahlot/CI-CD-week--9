const express = require("express");
const app = express();
const PORT = 3000;

app.get("/name", (req, resp) => {
    resp.send("My name is akash")
});

app.get("/EC2", (req, resp) => { 
    resp.send("I am up over EC2 ");
})
app.listen(PORT, () => { 
    console.log("Server is up on PORT : " + PORT);    
})