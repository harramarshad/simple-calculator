import inquirer from "inquirer";

// Asking questions from Users through Inquirer

let answers = await inquirer.prompt([
    {message:"Enter First Number", type: "number", name: "FirstNumber"},
    {message: "Enter second Number",type: "number", name:"SecondNumber"},
    {

        message:"Select one operator to perform operations",
        type:"list",
        name:"operator",
        choices:["Addition","Substractions","Multiplication","Division"],

    },
]);

//Conditional  statments if-else.
if(answers.operator==="Addition"){
    console.log(answers.FirstNumber + answers.SecondNumber);
}else if(answers.operator==="Substractions"){
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if(answers.operator==="Multiplication"){
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if(answers.operator==="Division"){
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else{
    console.log("Invalid Input");
}