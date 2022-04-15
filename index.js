const fs = require('fs')
const inquirer = require ('inquirer');
inquirer.prompt([
{
    type: "input",
    message: "Team managers name",
    name: "managerName"
},
{
    type: "input",
    message: "Managers ID",
    name: "managerId"
},
{
    type: "input",
    message: "Managers email",
    name: "managerEmail"
},
{
    type:"input",
    message:"Managers office number",
    name:"managerOfficenumber"
},

]) .then((Response)=>{
    console.log(
        Response
 )

}
)
