const express = require('express');
const cors = require('cors');

const app = express();

// middleware 
app.use(cors());


const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server is Runnning PORT http://localhost:${PORT}`)
})