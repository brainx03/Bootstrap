// script.js
$(document).ready(function() {
    var currentInput = "";
    var operator = null;
    var operand1 = null;
   

    $(".btn").click(function() {
        var value = $(this).data("value");
        if ($(this).hasClass("operator")) {
            if (value === "^") {
                operator = "^";
                operand1 = parseFloat(currentInput);
                currentInput = "";
                $("#display").val("");
            } else {
                operator = value;
                operand1 = parseFloat(currentInput);
                currentInput = "";
                $("#display").val("");
            }
        } else {
            currentInput += value;
            $("#display").val(currentInput);
        }
    });

    $(".clear").click(function() {
        currentInput = "";
        operator = null;
        operand1 = null;
        $("#display").val("");
    });

    $(".equal").click(function() {
        var operand2 = parseFloat(currentInput);
        var result = null;
        switch (operator) {
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
            case "*":
                result = operand1 * operand2;
                break;
            case "/":
                result = operand1 / operand2;
                break;
            case "%":
                result = operand1 % operand2;
                break;
            case "^":
                result = Math.pow(operand1, operand2);
                break;
        }
        $("#display").val(result);
        currentInput = result.toString();
        operator = null;
        operand1 = null;
    });
});
