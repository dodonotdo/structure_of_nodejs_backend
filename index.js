const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.send("Welcome to nodejs application!");
});

// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// creatin tables
const sequelize = require('./config/db');
const User = require('./models/user_table');
console.log(User);
sequelize.sync();
// sequelize.sync({force:true});
const { application } = require("express");

const user_route = require("./route/user_route");
app.use("/user_details", user_route);

// const route_item_purchase = require("./routes/route_item_purchase");

// app.use("/item_purchase", route_item_purchase);
