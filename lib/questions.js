const questions=[
{name:"name",
message: "Enter Employee Name",
},
{name:"id",
message: "Enter Employee Id",
},
{name: "email",
message: "Enter Employee Email",
},
{name: "employeeType",
type: "list",
message: "Which one are they?",
choices: ["Manager", "Engineer", "Intern"],
},
{name: "github",
message: "Enter Engineer Github Username",

},
{name: "officeNumber",
message: "Enter Manager's Office Number",

},
{name: "school",
message: "Enter Intern's School",

},
{name: "again",
message: "Do you want to add more employees?",
type: "confirm",
default: "true",
}

];
module.exports = questions;