module.exports= function generateTeam(Team){
  var teamMembers=[]
 //  for(let member of Team){
 //   if (Team[i].getRole()==="Manager"){
 //     //   genarateManager()
 //     console.log (Team[i])
 //     console.log ("manager")
 //   } else if (Team[i].getRole()==="Engineer"){
 //     //   generateEngineer()
 //     console.log (Team[i])
 //     console.log ("engineer")
 //   } else {
 //     //   generateIntern()
 //     console.log (Team[i])
 //     console.log ("intern")
 //   }
 //  } 
 function generateManager(manager){
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
</head>
<body>
    <article class="Manager">
        <div class="">
          <h3 class="Name">${manager.getName()}</h3>
          <h4 class="Position">${manager.getRole()}</h4>
          <p class="ID">${manager.getId()}</p>
          <p class="Email">${manager.getEmail()}</p>
          <p class="officeNumber">${manager.getOfficenumber()}</p>
        </div>
      </article>`

}

function generateEngineer(engineer){
return`
<article class="Engineer">
<div class="">
  <h3 class="Name">${engineer.getName()}</h3>
  <h4 class="Position">${engineer.getRole()}</h4>
  <p class="ID">${engineer.getId()}</p>
  <p class="Email">${engineer.getEmail()}</p>
  <p class="Github">${engineer.getGithub()}</p>
</div>
</article>`
}

function generateIntern(intern){
  return`
  <article class="Intern">
  <div class="">
    <h3 class="Name">${intern.getName()}</h3>
    <h4 class="Position">${intern.getRole()}</h4>
    <p class="ID">${intern.getId()}</p>
    <p class="Email">${intern.getEmail()}</p>
    <p class="School">${intern.getSchool()}</p>
  </div>
</article>`
}

 teamMembers.push(Team.filter(employee=>employee.getRole()==="Manager").map(manager=>generateManager(manager)))
 teamMembers.push(Team.filter(employee=>employee.getRole()==="Engineer").map(engineer=>generateEngineer(engineer)).join(""))
 teamMembers.push(Team.filter(employee=>employee.getRole()==="Intern").map(intern=>generateIntern(intern)).join(""))
 return teamMembers.join("")
 }