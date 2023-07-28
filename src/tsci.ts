import {
  bundlers,
  cloneRepository,
  createFolder,
  installDependencies,
} from "./utils.js";
import chalk from "chalk";
import {
  bundlerQuestionAsync,
  projectNameQuestionAsync,
} from "./questions/index.js";

export async function tsciAsync(): Promise<void> {
  const projectNameAnswer = await projectNameQuestionAsync();
  const bundlerAnswer = await bundlerQuestionAsync();

  console.log(
    chalk.blue(`📂 ${projectNameAnswer.projectName} folder is creating...`),
  );

  createFolder(projectNameAnswer.projectName);

  cloneRepository(
    bundlers.get(bundlerAnswer.bundler),
    projectNameAnswer.projectName,
  );

  const path = process.cwd();
  installDependencies(`${path}/${projectNameAnswer.projectName}`);

  console.log(
    chalk.green(
      "💻 Successfully installed all the required dependencies, ready to go.",
    ),
  );
}
