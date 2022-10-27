import { Bundler } from "./bundler.js";

export interface Answer {
  bundler: Bundler;
  projectName: string;
  dependency: string;
}
