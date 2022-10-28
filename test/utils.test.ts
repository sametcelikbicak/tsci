/* eslint-disable @typescript-eslint/no-unsafe-call */
import shell from "shelljs";
import { describe, expect, it, vi } from "vitest";
import {
  bundlers,
  cloneRepository,
  createFolder,
  installDependencies,
} from "../src/utils";

describe("bundlers", () => {
  it("shoudl defined", () => {
    expect(bundlers).toBeDefined();
  });
});

describe("createFolder", () => {
  it("should defined", () => {
    expect(createFolder).toBeDefined();
  });

  it("should create folder", () => {
    const shellExec = vi.spyOn(shell, "exec");
    const folderName = "my-project-name";
    const expectedCommand = `mkdir ${folderName}`;

    createFolder(folderName);

    expect(shellExec).toHaveBeenCalledWith(expectedCommand);
  });
});

describe("cloneRepository", () => {
  it("should defined", () => {
    expect(cloneRepository).toBeDefined();
  });

  it("should clone repository", () => {
    const shellExec = vi.spyOn(shell, "exec");
    const url = "repository_url";
    const projectName = "project-name";
    const expectedCommand = `git clone ${url} ${projectName}`;

    cloneRepository(url, projectName);

    expect(shellExec).toHaveBeenCalledWith(expectedCommand);
  });
});

describe("installDependencies", () => {
  it("should defined", () => {
    expect(installDependencies).toBeDefined();
  });

  it("should change directory", () => {
    const shellCd = vi.spyOn(shell, "cd");
    const projectPath = "project-name";

    installDependencies(projectPath);

    expect(shellCd).toHaveBeenCalledWith(projectPath);
  });

  it("should install dependencies after change directory", () => {
    const shellExec = vi.spyOn(shell, "exec");
    const projectPath = "project-name";
    const expectedCommand = "npm install";

    installDependencies(projectPath);

    expect(shellExec).toHaveBeenCalledWith(expectedCommand);
  });
});
