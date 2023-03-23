const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { appendToFile } = require("../fileHandlers.js/createFile");
const { matchEmail, matchPhone } = require("../helpers/matchLink");

// scrapping the tax business site
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
      //   console.log(location);
      comp.Company_Name = taxName;
      comp.Home_Address = location;
      comp.Email = email;
      comp.Phone_Number = phone;
      console.log(comp)
      appendToFile("../files/final.txt", JSON.stringify(comp));
    })
    .catch((err) => {
      console.log("AN ERROR OCCURED", err.stack);
    });
};

// companyScrapper(
//   "https://blacktaxprofessionals.com/taxprofessionals/one-touch-tax-services-llc/"
// );

const readF = fs.readFileSync("../files/output.txt", "utf-8");
const companies = readF.split("\n");

for (let i = 0; i <= companies.length; i++) {
  companyScrapper(companies[i]);
}
