/* eslint-disable @typescript-eslint/no-unsafe-call */
import inquirer from "inquirer";
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

describe("bundler.question tests", () => {
  let inquirerSpy: SpyInstance;

  beforeEach(() => {
    vi.mock("inquirer", () => {
      return {
        default: {
          prompt: vi.fn(),
        },
      };
    });

    inquirerSpy = vi.spyOn(inquirer, "prompt").mockReturnThis();
  });

  afterEach(() => {
    vi.resetModules();
    vi.resetAllMocks();
  });

  describe("bundlerQuestionAsync", () => {
    it("should defined", () => {
      expect(tsciAsync).toBeDefined();
    });

    it("should calls inquirer.prompt once", async () => {
      await tsciAsync();

      expect(inquirerSpy).toHaveBeenCalledTimes(2);
    });
  });
});
