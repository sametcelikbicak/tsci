import { Command } from "commander";
import { readFileSync } from "node:fs";
import { tsciAsync } from "./tsci.js";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const packageJson = readFileSync(
  new URL("../package.json", import.meta.url)
).toString();
const { version } = JSON.parse(packageJson);
/* eslint-enable @typescript-eslint/no-unsafe-assignment */

const program = new Command();

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
program.version(version, "-v, --version").action(() => {
  void tsciAsync().then();
});

program.parse(process.argv);
