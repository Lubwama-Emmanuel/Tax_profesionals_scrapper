const { parse } = require("json2csv");
const fs = require("fs")

const data = fs.readFileSync("final.txt", "utf-8")

const csv = parse(data);
console.log(csv);
