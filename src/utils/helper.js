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

export const getUniqueValues = (data, type) => {
  let unique = data?.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return [...new Set(unique)];
};

