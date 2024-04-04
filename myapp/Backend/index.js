const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/db.config');
const { router } = require('./routes/movies.router');
const app = express();

// middleware 
app.use(cors());
app.use(express.json())

// Router
app.use("/movie", router);


app.get('/',(req,res)=>{
    res.send('Hii From Server');
})


sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(8080, () => {
      console.log(`Server is Running on http://localhost:${8080}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });