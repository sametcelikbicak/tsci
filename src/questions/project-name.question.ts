import inquirer from "inquirer";
import chalk from "chalk";
import { Answer } from "../models/index.js";

export const projectNameValidator = (projectName: string): boolean | string => {
  if (/^[A-Za-z][A-Za-z\-\\_\d]*$/.test(projectName)) return true;
  else
    return chalk.red(
      "Project name may only include letters, numbers, underscores and dashes.\n" +
        "Project name should be start with letters.",
    );
};

export function projectNameQuestionAsync(): Promise<Answer> {
  return inquirer.prompt<Answer>([
    {
      name: "projectName",
      type: "input",
      message: "Enter your project name:",
      validate: projectNameValidator,
    },
  ]);
}
