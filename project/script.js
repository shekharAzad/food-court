console.log("hello");

function orderfn(price, name) {
  alert("price:-" + price + " ProductName:-" + name);
  var orderDetailsObj = {
    name: name,
    price: price,
  };

  localStorage.setItem("orderDetails", JSON.stringify(orderDetailsObj));
  var orderDetailsObjtemp = JSON.parse(localStorage.getItem("orderDetails"));
  window.location.href = "";
  window.location.href = "/payment/payment%20gateway/index.html";

  console.log(orderDetailsObj);
  console.log(orderDetailsObj.name);
}

function handleOnChangeInput(e, inputType) {
  var inputVal = e.target.value;
  var userDetailsObj = {};
  if (localStorage.getItem("userDetails") != null) {
    userDetailsObj = JSON.parse(localStorage.getItem("userDetails"));
  }

  if (inputType == "name") {
    userDetailsObj.name = inputVal;
  }
  if (inputType == "email") {
    userDetailsObj.email = inputVal;
  }
  if (inputType == "address") {
    userDetailsObj.address = inputVal;
  }
  if (inputType == "city") {
    userDetailsObj.city = inputVal;
  }

  localStorage.setItem("userDetails", JSON.stringify(userDetailsObj));
}

// const submit = document.getElementsByClassName(".btn");

// submit.addEventListner("onclick", function () {});

function handlePaymentProceedBtn(e) {
  e.preventDefault();
  window.location.href = "/project/confirmation/index.html";
}

// fetching the data from form
function displayConfirmationPageDetails() {
  const userName = document.getElementById("username");
  const useraddress = document.getElementById("useraddress");

  var userDetailsObj = {};
  if (localStorage.getItem("userDetails") != null) {
    userDetailsObj = JSON.parse(localStorage.getItem("userDetails"));

    userName.innerHTML = userDetailsObj.name;
    useraddress.innerHTML = userDetailsObj.address;
  }

  // username.innerHTML("hgjs");
}

function initialSetupFnCall() {
  displayConfirmationPageDetails();
}
