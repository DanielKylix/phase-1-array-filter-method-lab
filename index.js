// Code your solution here
const findMatching = (drivers, driver) => {
  const result = drivers.filter((result) => result === driver);
  return result;
};

const fuzzyMatch = (drivers, driver) => {
  let firstChar = driver.charAt(0);
  const result = drivers.filter((result) => result.startsWith(firstChar));
  return result;
};

const matchName = (drivers, driver) => {
  const result = drivers.filter(function (e) {
    return e.name === driver;
  });
  return result;
};
