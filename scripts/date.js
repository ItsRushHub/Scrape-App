import { model } from "mongoose";

var makeDate = function() {
    var d = new Date();
    var formattedDate = "";

    formattedDate += (d.getMonth() + 1) + "_";
    formattedDate += d.getDate() + "_";
    formattedDate += d.getFullYear();
    return formattedDate;
};

model.exports = makeDate;