import inquirer from "inquirer";
import { Answer, Bundler, Choice } from "../models/index.js";

export async function bundlerQuestionAsync(): Promise<Answer> {
  const bundlers: Choice[] = [
    { name: Bundler.Vite, value: Bundler.Vite },
    { name: Bundler.Parcel, value: Bundler.Parcel },
    { name: Bundler.Snowpack, value: Bundler.Snowpack },
    { name: Bundler.Rollup, value: Bundler.Rollup },
  ];

  return await inquirer.prompt<Answer>([
    {
      name: "bundler",
      type: "list",
      message: "Choose the TypeScript bundler template:",
      choices: bundlers,
    },
  ]);
}
