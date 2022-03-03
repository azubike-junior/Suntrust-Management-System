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

export const getValues = (data, type) => {
  if (data?.length > 0) {
    return [type, ...data];
  }
  return [];
};

export const configUrl = `http://10.11.200.97/ExpenseManagement/Configuration`;
export const codeConfigUrl = `http://10.11.200.97/ExpenseManagement/CodeConfiguration`;


// export const resetFields = (resetField) => {

// }
