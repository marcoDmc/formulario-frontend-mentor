const formButtonBid = document.querySelector(".container__form__button-bid");

// inputs
const firstNameI = document.querySelector("#container__form-first-name");
const lastNameI = document.querySelector("#container__form-last-name");
const emailI = document.querySelector("#container__form-email");
const passwordI = document.querySelector("#container__form-password");
// imgs error
const imgErrorFirstName = document.querySelector(
  "#container__img-error-firstname"
);
const imgErrorLastName = document.querySelector(
  "#container__img-error-lastname"
);
const imgErrorEmail = document.querySelector("#container__img-error-email");
const imgErrorPassword = document.querySelector(
  "#container__img-error-password"
);
// labels
const labelfirstName = document.querySelector(
  "#container__for__label-firstname"
);
const labellastName = document.querySelector("#container__for__label-lastname");
const labelEmail = document.querySelector("#container__for__label-email");
const labelPassword = document.querySelector("#container__for__label-password");

const submitButton = document.querySelector(".container__form__button-submit");

function handleValidationEmailAndLabels() {
  if (!firstNameI.value) {
    labelfirstName.style.display = "inline";
  } else {
    labelfirstName.style.display = "none";
  }

  if (!lastNameI.value) {
    labellastName.style.display = "inline";
  } else {
    labellastName.style.display = "none";
  }

  if (!emailI.value.includes("@") || !emailI.value.includes(".com")) {
    emailI.style.borderColor = "red";
    imgErrorEmail.style.display = "block";
    labelEmail.style.display = "inline";
  } else {
    emailI.style.borderColor = "none";
    imgErrorEmail.style.display = "none";
    labelEmail.style.display = "none";
  }

  if (!passwordI.value) {
    labelPassword.style.display = "inline";
  } else {
    labelPassword.style.display = "none";
  }
}

function handleImgError() {
  !firstNameI.value
    ? (imgErrorFirstName.style.display = "block")
    : (imgErrorFirstName.style.display = "none");
  !lastNameI.value
    ? (imgErrorLastName.style.display = "block")
    : (imgErrorLastName.style.display = "none");
  !emailI.value
    ? (imgErrorEmail.style.display = "block")
    : (imgErrorEmail.style.display = "none");
  !passwordI.value
    ? (imgErrorPassword.style.display = "block")
    : (imgErrorPassword.style.display = "none");

  handleValidationEmailAndLabels();
}

function handleCheckValuesInput() {
  !firstNameI.value
    ? (firstNameI.style.borderColor = "red")
    : (firstNameI.style.borderColor = "initial");

  !lastNameI.value
    ? (lastNameI.style.borderColor = "red")
    : (lastNameI.style.borderColor = "initial");

  !emailI.value
    ? (emailI.style.borderColor = "red")
    : (emailI.style.borderColor = "initial");

  !passwordI.value
    ? (passwordI.style.borderColor = "red")
    : (passwordI.style.borderColor = "initial");

  handleImgError();
}

function handleSubmit(event) {
  event.preventDefault();
  handleCheckValuesInput();
}

submitButton.addEventListener("click", handleSubmit);
formButtonBid.addEventListener("click", (event) => event.preventDefault());
