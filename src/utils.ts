import { QuestionCollection } from "inquirer";
import { enum2array } from "enum2array";

export enum Template {
  "Vite" = "Vite",
  "Parcel" = "Parcel",
  "Snowpack" = "Snowpack",
}

export const questions: QuestionCollection = [
  {
    type: "input",
    name: "projectName",
    message: "Enter your project name:",
  },
  {
    type: "list",
    name: "template",
    message: "Choose the TypeScript bundler template:",
    choices: [...enum2array(Template)],
  },
];

export const repoLinks = new Map([
  [Template.Vite, "https://github.com/sametcelikbicak/typescript-vite"],
  [Template.Parcel, "https://github.com/sametcelikbicak/typescript-parcel"],
  [Template.Snowpack, "https://github.com/sametcelikbicak/typescript-snowpack"],
]);
