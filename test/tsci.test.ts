/* eslint-disable @typescript-eslint/no-unsafe-call */
import inquirer from "inquirer";
import shell from "shelljs";
import {
  describe,
  expect,
  SpyInstance,
  it,
  vi,
  beforeEach,
  afterEach,
} from "vitest";
import { tsciAsync } from "../src/tsci";

describe("tsci tests", () => {
  let inquirerSpy: SpyInstance;
  let shellExecSpy: SpyInstance;
  let shellCdSpy: SpyInstance;

  beforeEach(() => {
    vi.mock("inquirer", () => {
      return {
        default: {
          prompt: vi.fn(),
        },
      };
    });
    vi.mock("shell", () => {
      return {
        exec: vi.fn(),
        cd: vi.fn(),
      };
    });

    inquirerSpy = vi.spyOn(inquirer, "prompt").mockReturnThis();
    shellExecSpy = vi.spyOn(shell, "exec").mockReturnThis();
    shellCdSpy = vi.spyOn(shell, "cd").mockReturnThis();
  });

  afterEach(() => {
    vi.resetModules();
    vi.resetAllMocks();
  });

  describe("tsciAsync", () => {
    it("should defined", () => {
      expect(tsciAsync).toBeDefined();
    });

    it("should calls inquirer.prompt twice", async () => {
      await tsciAsync();

      expect(inquirerSpy).toHaveBeenCalledTimes(2);
    });

    it("should calls shell.exec three times", async () => {
      await tsciAsync();

      expect(shellExecSpy).toHaveBeenCalledTimes(3);
    });

    it("should calls shell.cd once", async () => {
      await tsciAsync();

      expect(shellCdSpy).toHaveBeenCalledOnce();
    });
  });
});
