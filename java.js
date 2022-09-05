/* The mail-form-validationg code is not mine, althought I've modiefed it quite a bit */

var divs = new Array();
divs[0] = "errFirst";
divs[1] = "errSubj";
divs[2] = "errEmail";
divs[3] = "errContent";
function validate() {
  var inputs = new Array();
  inputs[0] = document.getElementById("first").value;
/*   inputs[1] = document.getElementById("subj").value; */
  inputs[1] = document.getElementById("email").value;
  inputs[2] = document.getElementById("content").value;
  var errors = new Array();
  errors[0] = "<span style='color:red'> Please enter your first name!</span>";
  /* errors[1] = "<span style='color:red'> Please enter your subject!</span>"; */
  errors[1] = "<span style='color:red'> Please enter your email!</span>";
  errors[2] = "<span style='color:red'> Please enter your mail content!</span>";
  for (i in inputs) {
    var errMessage = errors[i];
    var div = divs[i];
    if (inputs[i] == "") document.getElementById(div).innerHTML = errMessage;
    else if (i == 1) {
      var atpos = inputs[i].indexOf("@");
      var dotpos = inputs[i].lastIndexOf(".");
      if (atpos < 0 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].length)
        document.getElementById("errEmail").innerHTML =
          "<span style='color: red'> Enter a valid email address!</span>";
      else document.getElementById(div).innerHTML = " OK!";
    } else document.getElementById(div).innerHTML = " OK!";
  }
  finalValidate();
}

function finalValidate() {
  var count = 0;
  for (i = 0; i < divs.length; i++) {
    var div = divs[i];
    if (document.getElementById(div).innerHTML == " OK!") {
      count = count + 1;
    }
  }
  if (count == divs.length) {
    document.getElementById("errFinal").innerHTML =
      "All the data you entered is correct!";
  } else {
    document.getElementById("errFinal").innerHTML = "";
  }
}

/*The code bellow is mine */


function visibilityInverter() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].style.visibility != "hidden") {
      arguments[i].style.visibility = "hidden";
    } else {
      arguments[i].style.visibility = "visible";
    }
  }
}

function setDisplay() {/* object, argument, etc */
  var myLocalSet = new Set();
  var myLocalArrayArgs = new Array();

  for (let i = 0; i < arguments.length; i += 2) {/* Keeps you from touching the same object twice */

    if (!myLocalSet.has(arguments[i])) {
      myLocalSet.add(arguments[i]);
      myLocalArrayArgs.push(arguments[i + 1]);
    }
  }

  let myArr = Array.from(myLocalSet);
  for (let i = 0; i < myArr.length; i++) {
    myArr[i].style.display = myLocalArrayArgs[i];
  }
}

function navDisplay() { /* Navigationbar for phone */
  var x = document.getElementById("navPhoneLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

