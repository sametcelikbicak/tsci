/* eslint-disable @typescript-eslint/no-unsafe-call */
import shell from "shelljs";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  SpyInstance,
  it,
  vi,
} from "vitest";
import {
  bundlers,
  cloneRepository,
  createFolder,
  installDependencies,
} from "../src/utils";

describe("utils tests", () => {
  let shellExecSpy: SpyInstance;
  let shellCdSpy: SpyInstance;

  beforeEach(() => {
    vi.mock("shell", () => {
      return {
        exec: vi.fn(),
        cd: vi.fn(),
      };
    });

    shellExecSpy = vi.spyOn(shell, "exec").mockReturnThis();
    shellCdSpy = vi.spyOn(shell, "cd").mockReturnThis();
  });

  afterEach(() => {
    vi.resetModules();
    vi.resetAllMocks();
  });

  describe("bundlers", () => {
    it("should defined", () => {
      expect(bundlers).toBeDefined();
    });
  });

  describe("createFolder", () => {
    it("should defined", () => {
      expect(createFolder).toBeDefined();
    });

    it("should create folder", () => {
      const folderName = "my-project-name";
      const expectedCommand = `mkdir ${folderName}`;

      createFolder(folderName);

      expect(shellExecSpy).toHaveBeenCalledWith(expectedCommand);
    });
  });

  describe("cloneRepository", () => {
    it("should defined", () => {
      expect(cloneRepository).toBeDefined();
    });

    it("should clone repository", () => {
      const url = "repository_url";
      const projectName = "project-name";
      const expectedCommand = `git clone ${url} ${projectName}`;

      cloneRepository(url, projectName);

      expect(shellExecSpy).toHaveBeenCalledWith(expectedCommand);
    });
  });

  describe("installDependencies", () => {
    it("should defined", () => {
      expect(installDependencies).toBeDefined();
    });

    it("should change directory", () => {
      const projectPath = "project-name";

      installDependencies(projectPath);

      expect(shellCdSpy).toHaveBeenCalledWith(projectPath);
    });

    it("should install dependencies after change directory", () => {
      const projectPath = "project-name";
      const expectedCommand = "npm install";

      installDependencies(projectPath);

      expect(shellExecSpy).toHaveBeenCalledWith(expectedCommand);
    });
  });
});
