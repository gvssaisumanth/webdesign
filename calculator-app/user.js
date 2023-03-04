$(document).ready(function () {
  sessionStorage.removeItem("username");
  console.log(sessionStorage.getItem("username"));
  $("#username").val("");
  $("#email").val("");
  $("#password").val("");
  $("#validate").click(function () {
    console.log("loading");
    var email = $("#email").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var namevalidate = false;
    var emailvalidate = false;
    var passwordvalidate = false;
    $("#nameerror").show();
    $("#passworderror").show();
    $("#emailerror").show();
    if (username.length == 0) {
      $("#nameerror").html("username is missing");
    } else if (username.length < 3 || username.length > 10) {
      $("#nameerror").html("username must be between 3 and 10");
    } else if (/\d+/.test(username)) {
      $("#nameerror").html(
        "username must not contain numbers try representing in Roman variables"
      );
    } else if (/[^\w\s]/g.test(username)) {
      console.log("what's happening here", username);
      $("#nameerror").html("username must not contain special characters");
    } else if (username.trim().length == 0) {
      $("#nameerror").html("username can't have spaces");
    } else {
      console.log("what's happening here if truee", username);
      namevalidate = true;
      $("#nameerror").hide();
    }
    if (!password) {
      $("#passworderror").html("password is missing");
      $("#length").removeClass("valid").addClass("invalid");
      $("#small").removeClass("valid").addClass("invalid");
      $("#capital").removeClass("valid").addClass("invalid");
      $("#special").removeClass("valid").addClass("invalid");
      $("#number").removeClass("valid").addClass("invalid");
    } else {
      $("#length").attr("class") == "valid";
      if (
        $("#length").attr("class") == "valid" &&
        $("#small").attr("class") == "valid" &&
        $("#capital").attr("class") == "valid" &&
        $("#special").attr("class") == "valid" &&
        $("#number").attr("class") == "valid"
      ) {
        passwordvalidate = true;
        $("#passworderror").hide();
        $("#pswd_strgth").hide();
      }
    }
    if (!email) {
      $("#emailerror").html("email address is missing");
    } else if (!validateEmail(email)) {
      $("#emailerror").html("enter valid northeastern email");
    } else {
      emailvalidate = true;
      $("#emailerror").hide();
    }

    console.log(namevalidate, emailvalidate, passwordvalidate);
    if (namevalidate && emailvalidate && passwordvalidate) {
      console.log("validated");
      window.location = "./calculator.html";
      sessionStorage.setItem("username", username.trim());
    } else {
      // $("#username").val("");
      // $("#email").val("");
      // $("#password").val("");
    }
  });
  $("#username").focus(function () {
    $("#nameerror").hide();
  });
  $("#email").focus(function () {
    $("#emailerror").hide();
    const username = $("#username").val().trim();
    $("#username").val(username);
  });
  $("#password").focus(function () {
    $("#passworderror").hide();
  });

  const passwordInput = $("#password");
  passwordInput
    .keyup(function () {
      // keyup code here
      var pswd = $(this).val();
      if (pswd.length < 8) {
        $("#length").removeClass("valid").addClass("invalid");
      } else {
        $("#length").removeClass("invalid").addClass("valid");
      }
      //validate capital letter
      if (pswd.match(/[A-Z]/)) {
        $("#capital").removeClass("invalid").addClass("valid");
      } else {
        $("#capital").removeClass("valid").addClass("invalid");
      }

      //validate small letter
      if (pswd.match(/[a-z]/)) {
        $("#small").removeClass("invalid").addClass("valid");
      } else {
        $("#small").removeClass("valid").addClass("invalid");
      }

      //validate special character
      if (pswd.match(/[!@#$%^&()'[\]"?+-/*={}.,;:_]+/)) {
        $("#special").removeClass("invalid").addClass("valid");
      } else {
        $("#special").removeClass("valid").addClass("invalid");
      }

      //validate number
      if (pswd.match(/\d/)) {
        $("#number").removeClass("invalid").addClass("valid");
      } else {
        $("#number").removeClass("valid").addClass("invalid");
      }
    })

    .focus(function () {
      $("#pswd_strgth").show();
    });
  // .blur(function () {
  //   $("#pswd_strgth").hide();
  // });
});

var validateEmail = (sEmail) => {
  var filter = /^[a-zA-Z0-9._%+-]+@northeastern+\.edu$/;
  if (filter.test(sEmail)) {
    return true;
  } else {
    return false;
  }
};
var validatePassword = (password) => {
  var password_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password_regex.test(password)) {
    return true;
  } else {
    return false;
  }
};
