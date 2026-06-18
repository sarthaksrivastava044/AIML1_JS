var count =0;
document.write("starting loop")
while(count<10){
    document.write("current loop :" + count + "<br>")
    count++
}
document.write("loop end :")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
var age=20;
if(age>18){
    document.write("<b>You are eligible to cast a vote </b>")
}
var grade=' A';
 document.write("YOUR GRADE IS" + grade + "<br>")
 switch(grade){
    case'A' : document.write("good job!<br>")
    break;
    case'B' : document.write("prety good!<br>")
    break;
    case'C' : document.write("passed!<br>")
    break;
    case'D' : document.write("Failed!<br>")
    break;
    case'F' : document.write("good job!<br>")
    break;
    default : document.write("invalid grade!<br>")
 }
 document.write("exiting switch block")