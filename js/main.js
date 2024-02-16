var input = document.querySelector("#input");
var code = document.querySelector("#code");
var button = document.querySelector("#button");
var output = document.querySelector("#output");
var run = function () {
    console.log("started running");
    var out_str = "";
    var input_lines = input.value.split("\n");
    var readline_l = 0;
    var println = function (s) { out_str += "".concat(s, "\n"); output.value = out_str; };
    var readline = function () {
        return input_lines[readline_l++];
    };
    var main = new Function("println", "readline", code.value);
    main(println, readline);
    console.log("finished running");
};
button.addEventListener("click", run);
export default 0;
