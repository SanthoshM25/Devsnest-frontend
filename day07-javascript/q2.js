const removeRno = (obj) => {
  delete obj.rollNo;
};

const obj = {
  name: "someone",
  sclass: "VI",
  rollNo: 4,
};
console.log(obj);
removeRno(obj);
console.log(obj);
