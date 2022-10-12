import inquirer, { Answers } from "inquirer";
import shell from "shelljs";
import { repoLinks, questions, Template } from "./utils";

const path = process.cwd();

inquirer.prompt(questions).then((answers: Answers) => {
  console.log(`📂 ${answers.projectName} folder is creating...`);
  shell.exec(`mkdir ${answers.projectName}`);
  if (answers.template == Template.Vite) {
    shell.exec(
      `git clone ${repoLinks.get(Template.Vite)} ${answers.projectName}`
    );
  } else if (answers.template == Template.Parcel) {
    shell.exec(
      `git clone ${repoLinks.get(Template.Parcel)} ${answers.projectName}`
    );
  } else if (answers.template == Template.Snowpack) {
    shell.exec(
      `git clone ${repoLinks.get(Template.Snowpack)} ${answers.projectName}`
    );
  }
  shell.cd(`${path}/${answers.projectName}`);
  shell.exec(`npm install`);
  console.log(
    "💻 Successfully installed all the required dependencies, ready to go."
  );
});
