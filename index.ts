#! /usr/bin/env node


import inquirer from "inquirer";

const ans = await inquirer.prompt([
    {"message":"Enter 1st no" , "name":"first_no" , "type":"number"},
    {"message":"Enter 2nd no" , "name":"second_no","type":"number"},
    {"message":"Enter operator" , "name":"operator" , "type":"list" , "choices":["add","subtract","multiply","divide"]}
])

// console.log(ans)

if(ans.operator == "add"){
    console.log(ans.first_no+" + "+ans.second_no+" = "+(ans.first_no + ans.second_no))
    // console.log(ans.first_no + ans.second_no);
}

else if (ans.operator == "subtract") {
    console.log(ans.first_no+" - "+ans.second_no+" = "+(ans.first_no - ans.second_no))
    // console.log(ans.first_no - ans.second_no);
}

else if (ans.operator == "multiply") {
    console.log(ans.first_no+" * "+ans.second_no+" = "+(ans.first_no * ans.second_no))
    // console.log(ans.first_no * ans.second_no);
}

else {
    console.log(ans.first_no+" / "+ans.second_no+" = "+(ans.first_no / ans.second_no))
    // console.log(ans.first_no / ans.second_no);
}
