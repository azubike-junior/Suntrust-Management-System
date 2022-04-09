Date.prototype.yyyymmdd = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [
    this.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
  ].join("");
};

var date = new Date();
export default date.yyyymmdd();

export const addSelect = (data, type) => {
  if (data?.length > 0) {
    return [type, ...data];
  }
  return [];
};

export const pad = (num, size) => {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
};

export const getText = (data, value) => {
  return data[value]?.categoryType;
};

export const getBase64 = (file) => {
  return new Promise((resolve) => {
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file[0]);

    // on reader load somthing...
    reader.onloadend = () => {
      // Make a fileInfo Object

      // baseURL = reader.result;

      resolve(reader.result);
    };
  });
};

export const configUrl = `http://10.11.200.97/ExpenseManagement/Configuration`;
export const codeConfigUrl = `http://10.11.200.97/ExpenseManagement/CodeConfiguration`;
export const expenseUrl = `http://10.11.200.97/ExpenseManagement/Expenses`;
export const performanceManagementConfigUrl = `http://10.11.200.97/PerformanceManagement/Configuration`;
export const performanceManagementAppraisalUrl = `http://10.11.200.97/PerformanceManagement/Appraisals`;



export const percentages = [
  { value: "", percent: "0%" },
  { value: 30, percent: "30%" },
  { value: 35, percent: "35%" },
  { value: 40, percent: "40%" },
  { value: 45, percent: "45%" },
  { value: 50, percent: "50%" },
  { value: 55, percent: "55%" },
  { value: 60, percent: "60%" },
  { value: 65, percent: "65%" },
  { value: 70, percent: "70%" },
  { value: 75, percent: "75%" },
  { value: 80, percent: "80%" },
  { value: 85, percent: "85%" },
  { value: 90, percent: "90%" },
  { value: 95, percent: "95%" },
  { value: 100, percent: "100%" },
];

export const timeDuration = [
  { value: "", duration: "Select Option" },
  { value: "hourly", duration: "Hourly" },
  { value: "daily", duration: "Daily" },
  { value: "weekly", duration: "Weekly" },
  { value: "monthly", duration: "Monthly" },
  { value: "quarterly", duration: "Quarterly" },
  { value: "bi-annually", duration: "Bi-Annually" },
  { value: "annually", duration: "Annually" },
];

export const rateTypes = [
  { value: "", rate: "Select Option" },
  { value: "fixedValue", rate: "fixedValue" },
  { value: "Hours", rate: "Hours" },
  { value: "Percentage (%)", rate: "Percentage (%)" },
  { value: "MoneyTarget", rate: "MoneyTarget" },
  { value: "Greater Than", rate: "Greater Than" },
  { value: "Less Than", rate: "Less Than" },
];

export const targetSources = [
  { value: "", target: "Select Option" },
  { value: "banks", target: "banks" },
  { value: "budgetSystems", target: "budgetSystems" },
  { value: "helpDesk", target: "helpDesk" },
  { value: "input", target: "input" },
];

// this array contains, the information of the student, the course,
// the unit and his/her score

export const updateName = (state, payload) => ({
  ...state,
  data: {
    ...state.data,
    ...payload,
  },
});

export const studentResult = [
  {
    course: "GNS122",
    unit: 2,
    score: 99,
  },
  {
    course: "MAT104",
    unit: 3,
    score: 20,
  },
  {
    course: "SMS105",
    unit: 3,
    score: 62,
  },
  {
    course: "AGRIC103",
    unit: 4,
    score: 47,
  },
  {
    course: "Math100",
    unit: 5,
    score: 20,
  },
  {
    course: "GNS143",
    unit: 2,
    score: 88,
  },
];

export const getUniqueValues = (data, type) => {
  let unique = data?.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return [...new Set(unique)];
};

// this is the function that calculates the cgpa
// it takes the studentResult array above as a parameter.
// when i mean parameter. the *studentResult* is passed into *results* in the below function

export const cgpaCalculator = (results) => {
  // assign an empty value to qualityPoint,
  // so that it can be accessed outside the blocked scope same with the creditPoint
  let qualityPoint;
  let creditPoint = 0;

  // you should learn the higher array
  // functions (map, filter, foreach, find, push, pop, reduce, findIndex, every, etc)

  // map modifies all the values passed into the array, then returns a new array.
  // reduce executes a callback function on all the elements in the array, then it
  // returns the calculation expected.

  // this array function (map) checks the score of the each course and assign the points to each result
  // moves forward to multiply the point with course unit

  const totalScore = results
    .map((result) => {
      if (result.score >= 70) {
        // 5 * 2
        qualityPoint = 5 * result.unit;
      }
      if (result.score >= 60 && result.score <= 69) {
        // 4 * 3 and so on
        qualityPoint = 4 * result.unit;
      }
      if (result.score >= 50 && result.score <= 59) {
        qualityPoint = 3 * result.unit;
      }
      if (result.score >= 45 && result.score <= 49) {
        qualityPoint = 2 * result.unit;
      }
      if (result.score >= 40 && result.score <= 44) {
        qualityPoint = 1 * result.unit;
      }
      if (result.score >= 0 && result.score <= 30) {
        qualityPoint = 0 * result.unit;
      }

      // at this point it adds up all the units of the courses and assign the totalUnit
      // to creditPoint variable
      // [ 2 + 3 + 3 + 4 + 5 + 2] = creditPoint
      creditPoint += result.unit;

      return qualityPoint;
    })
    // at this point the reduce func sums up all the qualityPoint gotten from the result
    // [10 + 0 + 12 + 8 + 0 + 10] = totalScore
    .reduce((acc, num) => acc + num, 0);

  // totalScore / creditPoint
  // tofixed coverts it to 2 decimal point
  return (totalScore / creditPoint).toFixed(2);
};

// this outputs the result to the console
console.log(">>>>>CgpaCalc", cgpaCalculator(studentResult));
