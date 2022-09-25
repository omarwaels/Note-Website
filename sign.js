let numofusers = localStorage.length;

let formReg = document.querySelector("form ");
let allInputs = document.querySelectorAll("form input");
console.log(allInputs[2].value);
formReg.addEventListener("submit", addAcc);
let pushingArr = [];
function addAcc(e) {
  let userInfo = {
    useremail: allInputs[2].value,
    password: allInputs[4].value,
    phone: allInputs[3].value,
    status: false,
  };
  pushingArr.push(userInfo);
  localStorage.setItem(numofusers + 1, JSON.stringify(pushingArr));
}
