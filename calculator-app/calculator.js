$(document).ready(function () {
  console.log("loading");
  $("#excep").hide();
  $("#field2").focus(function () {
    $("#excep").hide();
  });
  var username = sessionStorage.getItem("username");
  if (
    !username ||
    username == null ||
    username == undefined ||
    username.length == 0
  ) {
    alert("please login again");
    window.location = "./index.html";
  } else {
    var name = sessionStorage.getItem("username");
    $("#name").append(name);
  }
  $("#result").hide();
  operations();

  $("#0").hover(
    function () {
      var $this = $(this); // caching $(this)
      $this.data("defaultText", $this.val());
      $this.val("+");
    },
    function () {
      var $this = $(this); // caching $(this)
      $this.val($this.data("defaultText"));
    }
  );
  $("#1").hover(
    function () {
      var $this = $(this); // caching $(this)
      $this.data("defaultText", $this.val());
      $this.val("-");
    },
    function () {
      var $this = $(this); // caching $(this)
      $this.val($this.data("defaultText"));
    }
  );
  $("#2").hover(
    function () {
      var $this = $(this); // caching $(this)
      $this.data("defaultText", $this.val());
      $this.val("x");
    },
    function () {
      var $this = $(this); // caching $(this)
      $this.val($this.data("defaultText"));
    }
  );
  $("#3").hover(
    function () {
      var $this = $(this); // caching $(this)
      $this.data("defaultText", $this.val());
      $this.val("/");
    },
    function () {
      var $this = $(this); // caching $(this)
      $this.val($this.data("defaultText"));
    }
  );
});
let validateNumber = (number) => {
  $("#excep").hide();
  console.log(number);
  // var number_regex = /^[1-9]\d*(\.\d+)?$/
  var number_regex = /^-?(0|[0-9]\d*)?(\.\d+)?(?<=\d)$/;
  if (number_regex.test(number)) {
    return true;
  } else {
    return false;
  }
};

let operations = () => {
  $("#excep").hide();
  for (let i = 0; i <= 4; i++) {
    $(`#${i}`).click((event) => {
      var operation = event.target.id;
      var number1 = $("#field1").val();
      var number2 = $("#field2").val();
      console.log(number1, number2);
      var number1validate = false;
      var number2validate = false;
      $("#field1error").show();
      $("#field2error").show();
      if (!number1 || number1.length == 0) {
        $("#field1error").html("number is missing");
      } else if (!validateNumber(number1)) {
        $("#field1error").html("enter valid number");
      } else {
        number1validate = true;
        $("#field1error").hide();
      }
      if (!number2 || number2.length == 0) {
        $("#field2error").html("number is missing");
      } else if (!validateNumber(number2)) {
        $("#field2error").html("enter valid number");
      } else {
        number2validate = true;
        $("#field2error").hide();
      }
      $("#field1").focus(function () {
        $("#field1error").hide();
        $("#result").hide();
      });
      $("#field2").focus(function () {
        $("#field2error").hide();
        $("#result").hide();
      });
      $("#result").show();
      if (number1validate == true && number2validate == true) {
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
        var result;
        if (operation == 0) {
          console.log(number1 + number2);
          result = number1 + number2;
        }
        if (operation == 1) {
          console.log(number1 - number2);
          result = number1 - number2;
        }
        if (operation == 2) {
          console.log(number1 * number2);
          result = number1 * number2;
        }
        if (operation == 3) {
          console.log(number1 / number2);
          result = number1 / number2;
          if (number2 == 0) {
            $("#excep").show();
          }
        }
        if (operation == 4) {
          number1 = "";
          number2 = "";
          $("#result").hide();
          $("#field1").val(number1);
          $("#field2").val(number2);
        }
        if (operation != 4) {
          $("#result").show();
          $("#result").val(result);
        }
      } else {
        $("#result").hide();
      }
    });
  }
};
