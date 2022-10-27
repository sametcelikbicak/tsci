import shell from "shelljs";
import { Bundler } from "./models/index.js";

export const bundlers = new Map([
  [Bundler.Vite, "https://github.com/sametcelikbicak/typescript-vite"],
  [Bundler.Parcel, "https://github.com/sametcelikbicak/typescript-parcel"],
  [Bundler.Snowpack, "https://github.com/sametcelikbicak/typescript-snowpack"],
  [Bundler.Rollup, "https://github.com/sametcelikbicak/typescript-rollup"],
]);

export function createFolder(name: string) {
  shell.exec(`mkdir ${name}`);
}

export function cloneRepository(url: string, name: string) {
  shell.exec(`git clone ${url} ${name}`);
}

export function installDependencies(projectPath: string) {
  shell.cd(`${projectPath}`);
  shell.exec(`npm install`);
}
