import inquirer from "inquirer";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  SpyInstance,
  it,
  vi,
} from "vitest";
import { projectNameQuestionAsync } from "../../src/questions/index.js";

describe("project-name.question tests", () => {
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

  describe("projectNameQuestionAsync", () => {
    it("should defined", () => {
      expect(projectNameQuestionAsync).toBeDefined();
    });

    it("should calls inquirer.prompt once", async () => {
      await projectNameQuestionAsync();

      expect(inquirerSpy).toHaveBeenCalledOnce();
    });
  });
});
