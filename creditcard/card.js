function isCardNumberValid(number) {
  return number === "1234123412341234";
}

function displayError(msg) {
  document.querySelector(".errorMsg").innerHTML = msg;
}

function submitHandler(event) {
  event.preventDefault();

  let errorMsg = "";
  displayError("");

  if (isNaN(this.cardNumber.value)) {
    errorMsg += "Card number is not a valid number<br>";
  } else if (!isCardNumberValid(this.cardNumber.value)) {
    errorMsg += "Card number is not a valid card number<br>";
  }

  const month = parseInt(this.month.value);
  const year = parseInt(this.year.value);
  const current = new Date();
  const expiry = new Date(year, month - 1);

  if (expiry <= current) {
    errorMsg += "Card is expired. Please enter a future date.<br>";
  }

  if (errorMsg !== "") {
    displayError(errorMsg);
    return false;
  }

  alert("Payment submitted successfully!");
  return true;
}

document
  .querySelector("#credit-card")
  .addEventListener("submit", submitHandler);
