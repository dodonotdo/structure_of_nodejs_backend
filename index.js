const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
const helmet = require("helmet");

// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());


// creating tables
const sequelize = require('./config/db');
const User = require('./models/user_details_table');
console.log(User);
sequelize.sync();
// sequelize.sync({force:true});
const { application } = require("express");

const user_route = require("./route/user_route");
app.use("/user_details", user_route);

// const route_item_purchase = require("./routes/route_item_purchase");
// app.use("/item_purchase", route_item_purchase);




// simple route
app.get("/", (req, res) => {
  res.send("Welcome to nodejs application!");
});

// set port, listen for requests

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

