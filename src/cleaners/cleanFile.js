const fs = require("fs")

const fileContent = fs.readFileSync("output.txt", "utf-8")

const fileContentFilter = fileContent.split("\n")

const filteredContent = fileContentFilter.filter((value, index) => fileContentFilter.indexOf(value) == index )

fs.writeFileSync("output.txt", filteredContent.join("\n"))
