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
import { bundlerQuestionAsync } from "../../src/questions/index.js";

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
      expect(bundlerQuestionAsync).toBeDefined();
    });

    it("should calls inquirer.prompt once", async () => {
      await bundlerQuestionAsync();

      expect(inquirerSpy).toHaveBeenCalledOnce();
    });
  });
});
