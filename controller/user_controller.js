const user_details_table = require("../models/user_details_table");
const cleanObject = require("../library/cleanObject");
const excel = require("exceljs");
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
      one.push({
        uid: item.uid,
        user: item.user,
        password: item.password,
        email: item.email,
        mobile: item.mobile,
      });
    });

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("user_details");

    worksheet.columns = [
      { header: "U_id", key: "uid", width: 5 },
      { header: "Username", key: "user", width: 0 },
      { header: "Password", key: "password", width: 25 },
      { header: "Email_id", key: "email", width: 20 },
      { header: "Mobile_No", key: "mobile", width: 20 },
    ];
    worksheet.getRow(1).font = { bold: true };

    worksheet.autoFilter = "A1:E1";

    // headers style in excel
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        if (rowNumber == 1) {
          //set the background of header row
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "f5b914" },
          };
        }
        // Set border of each cell
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    // // Add Array Rows
    worksheet.addRows(one);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    var excelOutput = Date.now() + ".xlsx";
    res.setHeader("Content-Disposition", "attachment; filename=" + excelOutput);

    return workbook.xlsx.write(res).then(() => {
      res.status(200).end("The download is completed");
    });
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
