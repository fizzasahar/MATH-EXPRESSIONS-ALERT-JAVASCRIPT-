var a = 2, b = 1;
var result = --a - --b + ++b + b--;
var a = +prompt('Enter a number');
document.write("Result " + '<br>');
document.write("The value of a is :" + a + '<br>');
document.write("....................................................." + '<br><br>')

document.write("The value of ++a is:" + ++a + '<br>')
document.write("Now the value of a is:" + a + '<br><br>');

document.write("The value of a++ is:" + a++ + '<br>')
document.write("Now the value of a is:" + a + '<br><br>');

document.write("The value of --a is:" + --a + '<br><br>')
document.write("Now the value of a is:" + a + '<br><br>');

document.write("The value of a-- is:" + a-- + '<br>')
document.write("Now the value of a is:" + a + '<br><br>');



document.write("a is ?? <br>");
document.write("b is ?? <br>");
document.write("result is ?? <br><br>");


var userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");


var numberInput = prompt("Enter a number for multiplication table:") || 5;
document.write("Multiplication table of " + numberInput + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(numberInput + " x " + i + " = " + (numberInput * i) + "<br>");
}


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");
var totalMarks = 100;
var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage1 = (obtainedMarks1 / totalMarks) * 100;
var percentage2 = (obtainedMarks2 / totalMarks) * 100;
var percentage3 = (obtainedMarks3 / totalMarks) * 100;
document.write("<h2>Subject Marks</h2>");
document.write("<table >");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
document.write("<tr><td> " + "" + "</td><td><strong> " + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + ((totalObtainedMarks / (totalMarks * 3)) * 100).toFixed(2) + "%</strong></td></tr>");
document.write("</table>");