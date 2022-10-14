import { QuestionCollection } from "inquirer";
import { enum2array } from "enum2array";

export enum Bundler {
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
    name: "bundler",
    message: "Choose the TypeScript bundler template:",
    choices: [...enum2array(Bundler)],
  },
];

export const repoLinks = new Map([
  [Bundler.Vite, "https://github.com/sametcelikbicak/typescript-vite"],
  [Bundler.Parcel, "https://github.com/sametcelikbicak/typescript-parcel"],
  [Bundler.Snowpack, "https://github.com/sametcelikbicak/typescript-snowpack"],
]);
