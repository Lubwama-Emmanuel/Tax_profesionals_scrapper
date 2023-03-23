// const link = "https://blacktaxprofessionals.com/taxprofessionals/pleasant-financial-services-2/"
// const regex = /https:\/\/blacktaxprofessionals\.com\/taxprofessionals\/pleasant-financial-services-2\//
// console.log(regex.test(link))

const testArr = [
  '{"Home_Address":"undefined, undefined, undefined, undefined"}',
  '{"Company_Name":"The Network","Home_Address":"undefined, undefined, undefined, undefined"}',
  '{"Company_Name":"Diversified Associates LLC","Home_Address":"undefined, undefined, undefined, undefined"}',
  '{"Company_Name":"The Tax Stop USA","Home_Address":"undefined, undefined, undefined, undefined"}',
  '{"Company_Name":"A-Countability Plus Tax Service","Home_Address":"undefined, undefined, undefined, undefined"}',
  '{"Company_Name":"CAS Financial","Home_Address":"undefined, undefined, undefined, undefined"}',
  '{"Company_Name":"Pretty Girls Business Group","Home_Address":"undefined, undefined, undefined, undefined"}',
  '{"Company_Name":"Your tax doctor llc","Home_Address":"undefined, undefined, undefined, undefined"}',
  '{"Company_Name":"PINNACLE FINANCIAL SERVICES, LLC","Home_Address":"101 N COLORADO ST #1948, CHANDLER, Arizona, 85286"}',
  '{"Company_Name":"Quality Tax","Home_Address":"996 E New Circle Rd, Lexington, Kentucky, 40505"}',
  '{"Company_Name":"Dejene & Associates Inc","Home_Address":"1025 W 190th St Ste 120, Gardena, California, 90248"}',
  '{"Company_Name":"TaxTyme Express Tax & Business Services","Home_Address":"4111 U.S. Highway 80E, Mesquite, Texas, 75150"}',
];

// const parsedArr = testArr.map(obj => JSON.stringify(obj));
const newArr = testArr.filter((el) => {
  return (
    JSON.parse(el).Home_Address != "undefined, undefined, undefined, undefined"
  );
});
console.log(JSON.parse(testArr[1]).Company_Name);
console.log(typeof JSON.parse(testArr[1]).Home_Address);
console.log(newArr);

exports.matchEmail = (s) => {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const email = s.match(regex);
  return email;
};

// const link =
//   "Logo:   sendout.png Email: info@qualitypowerhouse.com Phone: 8594022227 https://www.qualitypowerhouse.com/ Instagram Facebook Twitter";
// const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
// console.log(link.match(regex));
