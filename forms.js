const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const userLabel = document.querySelector("label[for=username]");

const zip = document.getElementById("zip");
const zipError = document.getElementById("zip-error");
const zipLabel = document.querySelector("label[for=zip]");

const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const passwordLabel = document.querySelector("label[for=password]");

const confirm = document.getElementById("confirm-password");
const confirmError = document.getElementById("confirm-error");
const confirmLabel = document.querySelector("label[for=confirm-password]");

const select = document.getElementById("select");
const selectError = document.getElementById("select-error");
const selectLabel = document.querySelector("label[for=select]");

username.addEventListener("keyup", () => {
  setErrorMessage(
    username,
    usernameError,
    "Username must have between 6 and 12 characters"
  );
  showLabel(userLabel, username);
});

zip.addEventListener("keyup", () => {
  setErrorMessage(
    zip,
    zipError,
    "Zipcode must have between 4 and 8 characters. Only Numbers"
  );
  showLabel(zipLabel, zip);
});

password.addEventListener("keyup", () => {
  setErrorMessage(
    password,
    passwordError,
    "Password must have between 6 and 12 characters"
  );
  showLabel(passwordLabel, password);
});

confirm.addEventListener("keyup", () => {
  if (confirm.value !== password.value) {
    confirmError.innerText = "Passwords must match";
    showLabel(userLabel, username);
  } else confirmError.innerText = "";
  showLabel(confirmLabel, confirm);
});

select.addEventListener("change", () => {
  select.checkValidity();
  if (!selectLabel.classList.value.includes("visible"))
    selectLabel.classList.add("visible");
});

function showLabel(label, input) {
  if (input.value.length !== 0) {
    label.classList.add("visible");
  } else label.classList.remove("visible");
}

function setErrorMessage(input, fieldError, errorTxt) {
  if (!input.checkValidity()) {
    fieldError.innerText = errorTxt;
  } else fieldError.innerText = "";
}
