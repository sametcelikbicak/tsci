import inquirer, { Answers } from "inquirer";
import shell from "shelljs";
import { repoLinks, questions, Bundler } from "./utils";
import chalk from "chalk";

const path = process.cwd();

inquirer.prompt(questions).then((answers: Answers) => {
  console.log(chalk.blue(`📂 ${answers.projectName} folder is creating...`));
  
  shell.exec(`mkdir ${answers.projectName}`);

  if (answers.bundler == Bundler.Vite) {
    shell.exec(
      `git clone ${repoLinks.get(Bundler.Vite)} ${answers.projectName}`
    );
  } else if (answers.bundler == Bundler.Parcel) {
    shell.exec(
      `git clone ${repoLinks.get(Bundler.Parcel)} ${answers.projectName}`
    );
  } else if (answers.bundler == Bundler.Snowpack) {
    shell.exec(
      `git clone ${repoLinks.get(Bundler.Snowpack)} ${answers.projectName}`
    );
  } else if (answers.bundler == Bundler.Rollup) {
    shell.exec(
      `git clone ${repoLinks.get(Bundler.Rollup)} ${answers.projectName}`
    );
  }
  
  shell.cd(`${path}/${answers.projectName}`);
  shell.exec(`npm install`);
  
  console.log(
    chalk.green("💻 Successfully installed all the required dependencies, ready to go.")
  );
});
