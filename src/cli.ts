import inquirer from "inquirer";
import shell from "shelljs";

const path = process.cwd();

inquirer
  .prompt([
    {
      type: "list",
      name: "template",
      message: "Choose the TypeScript template:",
      choices: ["TypeScript-Vite", "TypeScript-Parcel", "TypeScript-Snowpack"],
    },
  ])
  .then((answers) => {
    console.log(`🏗 ${answers.template} folder is creating...`);
    shell.exec(`mkdir ${answers.template}`);
    if (answers.template == "TypeScript-Vite") {
      shell.exec(
        `git clone https://github.com/sametcelikbicak/typescript-vite ${answers.template}`
      );
    } else if (answers.template == "TypeScript-Parcel") {
      shell.exec(
        `git clone https://github.com/sametcelikbicak/typescript-parcel ${answers.template}`
      );
    } else if (answers.template == "TypeScript-Snowpack") {
      shell.exec(
        `git clone https://github.com/sametcelikbicak/typescript-snowpack ${answers.template}`
      );
    }
    shell.cd(`${path}/${answers.template}`);
    shell.exec(`npm i`);
    console.log("💻 Successfully installed all the required dependencies, ready to go.");
  });
