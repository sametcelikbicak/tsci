import { Command } from "commander";
import { readFileSync } from "node:fs";
import { tsciAsync } from "./tsci.js";
import chalk from "chalk";

interface PackageJson {
  name: string;
  version: string;
}

const packageJson = readFileSync(
  new URL("../package.json", import.meta.url),
).toString();

const { name, version } = JSON.parse(packageJson) as PackageJson;

const program = new Command();

program
  .name(name)
  .version(
    `${chalk.yellow(name)} version: ${chalk.green(version)}`,
    "-v, --version",
  )
  .action(() => {
    void tsciAsync().then();
  });

program.parse(process.argv);
