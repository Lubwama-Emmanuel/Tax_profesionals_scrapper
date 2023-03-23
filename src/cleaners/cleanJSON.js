const fs = require("fs")

const fileContent = fs.readFileSync("../files/final.txt", "utf-8")

const filecontentArray = fileContent.split("\n")

const filtered = filecontentArray.filter((value, index) => filecontentArray.indexOf(value) == index)

console.log(filtered)

fs.writeFileSync("../files/final.txt", filtered.join("\n"))
