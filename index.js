const fs = require('fs')
const inquirer = require ('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const { type } = require('os');
const generateTeam = require('./generateTeam');
const Engineer=require ('./models/Engineer')
const Intern=require ('./models/Intern')
const Manager=require ('./models/Manager')
const Team=[]
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
 const officeManager= new Manager (Response.managerName,Response.managerId,Response.managerEmail,Response.managerOfficenumber)

 Team.push(officeManager)
teamBuild()
}
)

function teamBuild(){
    inquirer.prompt([
        {
            type:"list",
            message:"Do you want to add members to your team?",
            name:"teamAdd",
            choices:["Engineer","Intern","Finish team"]
        }
    ]) .then((Response)=>{
        if (Response.teamAdd==="Engineer"){
  addEngineer()
         } else if (Response.teamAdd==="Intern"){
             addIntern()
         } else {
             createTeam()
         }
    })
}
function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "Whats your engineers name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "Whats your Engineers Id?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "Whats your Engineers email?",
            name: "engineerEmail"
        },
        {
            type:"input",
            message:"Whats your engineers github username?",
            name:"engineerGithub"
        },
        
        ]) .then ((Response)=>{
            const newEngineer = new Engineer (
                Response.engineerName,Response.engineerId,Response.engineerEmail,Response.engineerGithub
            )
            Team.push(newEngineer)
            teamBuild()
        })
} 
 function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your interns name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is your interns id?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is your interns email?",
            name: "internEmail"
        },
        {
            type:"input",
            message:"What is your interns school?",
            name:"internSchool"
        },
        
        ]) .then((Response)=>{
            const newIntern= new Intern (Response.internName,Response.internId,Response.internEmail, Response.internSchool)
            Team.push(newIntern)
            teamBuild()
        })
 }
 function createTeam(){
fs.writeFile("TeamProfileGenerator.html",generateTeam(Team),err=>{
    if(err){throw err}
})
 }