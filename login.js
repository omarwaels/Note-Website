let logButton = document.querySelectorAll("button");
let allInputs = document.querySelectorAll("input ");
function delays(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log(allInputs);

logButton[0].addEventListener("click", logIn);
localStorage.removeItem(0);
async function logIn(e) {
  e.preventDefault();

  let useremail = allInputs[0].value;
  let password = allInputs[1].value;
  for (let i = 1; i < localStorage.length + 1; i++) {
    let userInfo = JSON.parse(localStorage.getItem(String(i)));
    if (
      Boolean(userInfo[0]["useremail"] == useremail) &&
      Boolean(userInfo[0]["password"] == password)
    ) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Directing ...............",
        showConfirmButton: false,
        timer: 800,
      });
      await delays(1000);
      userInfo[0]["status"] = true;
      localStorage.setItem(i, JSON.stringify(userInfo));
      console.log("True login");
      window.location.href = "noteMainTemp.html";

      return;
    }
  }

  console.log("failed");
}
function showPass() {
  var x = document.getElementById("mypassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
