const axios = require("axios");
const cheerio = require("cheerio");
const { appendToFile } = require("../fileHandlers.js/createFile");
const { matchEmail, matchPhone } = require("../helpers/regexFunctions");
const CronJob = require("cron").CronJob;
const fs = require("fs");

// scrapping the tax business site for email, address and name
const companyScrapper = async (url) => {
  const address = [];
  let taxName;
  let email;
  let phone;
  const comp = new Object();
  await axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      //Get company name
      $("h1").each(function () {
        taxName = $(this).text();
      });

      //Get address
      $("#gd_post_address-2")
        .find("span")
        .each(function () {
          const link = $(this).text();
          address.push(link);
        });

      //Get email address
      $("#gd_output_location-2").each(function () {
        const link = $(this).text();
        email = matchEmail(link);
      });

      // Get phone number
      $("div .geodir-field-phone")
        .find("a")
        .each(function () {
          const link = $(this).attr("href");
          phone = matchPhone(link);
        });

      const location =
        address[2] + ", " + address[3] + ", " + address[4] + ", " + address[5];
      comp.Company_Name = taxName;
      comp.Home_Address = location;
      comp.Email = email;
      comp.Phone_Number = phone;
      console.log(comp);
      appendToFile("../files/final.txt", JSON.stringify(comp));
    })
    .catch((err) => {
      console.log("AN ERROR OCCURED", err.stack);
    });
};

const readF = fs.readFileSync("../files/output.txt", "utf-8");
const companies = readF.split("\n");

const job = new CronJob("*/2 * * * *", function () {
  for (let i = 0; i <= companies.length; i++) {
    companyScrapper(companies[i]);
  }
});

job.start();
// const readF = fs.readFileSync("../files/output.txt", "utf-8");
// const companies = readF.split("\n");

// for (let i = 0; i <= companies.length; i++) {
//   companyScrapper(companies[i]);
// }
