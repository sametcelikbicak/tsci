import inquirer from "inquirer";
import { Answer } from "../models/index.js";

export function projectNameQuestionAsync(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: "Enter your project name:",
    },
  ]);
}
