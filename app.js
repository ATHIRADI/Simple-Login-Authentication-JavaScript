// Login Form
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const success = document.getElementById("log")
const fail = document.getElementById("fail")

const userInfo = [
  {
    username: "admin",
    password: 123,
  },
  {
    username: "user",
    password: 567,
  },
];

loginBtn.addEventListener("click", () => {
  loginFunc();
});

const loginFunc = () => {
  // console.log(email.value);
  for (i = 0; i < userInfo.length; i++) {
    if (
      email.value === userInfo[i].username &&
      password.value == userInfo[i].password
    ) {
      email.value = "";
      password.value = "";
      success.style.display = "block"
      fail.style.display = "none"
      return;
    }
    fail.style.display = "block"
  }
};
