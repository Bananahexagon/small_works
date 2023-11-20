"use strict";
var input = document.querySelector("#input");
var button = document.querySelector("#button");
var output = document.querySelector("#result");
button.addEventListener("click", function () {
    var content = input.value;
    var lines = content.split("\n");
    var height = lines.length;
    var width = lines.reduce(function (acc, c) { return Math.max(acc, c.length); }, 0);
    {
        //全角環境版
        var result_1 = "";
        result_1 += "┏";
        for (var i_1 = 0; i_1 < width - 2; i_1++) {
            result_1 += "━";
        }
        result_1 += "┓\n";
        lines.forEach(function (s) {
            result_1 += "┃　";
            result_1 += s;
            result_1 += "　".repeat(Math.max(width - (s.length + 3), 0));
            if (0 <= width - (s.length + 3)) {
                result_1 += "┃";
            }
            ;
            result_1 += "\n";
        });
        result_1 += "┗";
        for (var i_2 = 0; i_2 < width - 2; i_2++) {
            result_1 += "━";
        }
        result_1 += "┛";
        output.value = result_1;
    }
});
