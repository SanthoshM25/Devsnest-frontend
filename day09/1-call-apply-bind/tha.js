const objOne = {
  name: "Object 1",
  callName: function (span, deleteTime) {
    console.log(
      `${this.name} is created ${span} minutes ago and will be destroyed in ${deleteTime}`
    );
  },
};

const objTwo = {
  name: "Object 2",
};

objOne.callName.call(objTwo, 5, 20);
objOne.callName.apply(objTwo, [2, 5]);
const callFuncCallName = objOne.callName.bind(objTwo, 10, 20);
console.log(callFuncCallName());
