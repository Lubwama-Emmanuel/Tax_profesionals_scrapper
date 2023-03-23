const axios = require("axios");
const cheerio = require("cheerio");
const { matchLink } = require("../helpers/matchLink");
 
// Scraps for tax professionals weblinks
exports.scrapper = async (url) => {
  await axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $("a").each(function () {
        const link = $(this).attr("href");
        matchLink(link);
      });
    })
    .catch((err) => {
      console.log("AN ERROR OCCURED", err);
    });
};

for (let i = 1; i <= 62; i++) {
  let url = `https://blacktaxprofessionals.com/taxprofessionals/page/${i}/`;
  scrapper(url);
}
