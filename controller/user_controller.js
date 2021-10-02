const user_details_table = require("../models/user_details_table");
const cleanObject = require("../library/cleanObject");
const excel = require("exceljs");
const xlsx = require("xlsx");

const userRoot = (req, res) => res.send("user details api root");

const create_user_details = (req, res) => {
  let user = res.locals.data;
  console.log(user);
  let create_users = user_details_table.create(user);
  create_users
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the users.",
      });
    });
};

const get_user_details = async (req, res, next) => {
  await user_details_table
    .findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving userdetails.",
      });
    });
  next();
};

const get_one_user_details = (req, res) => {
  let user = res.locals.data.user;
  let user_details = user_details_table.findOne({
    where: { user: user },
  });

  user_details
    .then((result) => res.send(result))
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving userdetails.",
      });
    });
};

const update_user_password_details = (req, res) => {
  const update_details = {
    password: req.body.password,
    mobile: req.body.mobile,
    email: req.body.email,
  };

  let update_password = user_details_table.update(cleanObject(update_details), {
    where: { user: req.body.user },
  });

  update_password
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const convert_json_to_excel = (req, res) => {
  user_details_table.findAll().then((result0) => {
    let one = [];
    result0.forEach((item) => {
      one.push(item.dataValues);
    });
    
    let workbook=xlsx.utils.book_new();
    let worksheet=xlsx.utils.json_to_sheet(one);
    
    xlsx.utils.book_append_sheet(workbook,worksheet, "su");
    xlsx.write(workbook,{bookType:"xlsx", type:"buffer"});
    xlsx.write(workbook,{bookType:"xlsx", type:"binary"});
    var exceloutput = Date.now() + ".xlsx";
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    xlsx.writeFile(workbook, exceloutput);


  
  });
};

module.exports = {
  userRoot,
  create_user_details,
  get_user_details,
  get_one_user_details,
  update_user_password_details,
  convert_json_to_excel,
};
