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
import {
  projectNameQuestionAsync,
  projectNameValidator,
} from "../../src/questions/index.js";

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

  describe("projectNameValidator", () => {
    it("should defined", () => {
      expect(projectNameValidator).toBeDefined();
    });

    it("should return 'true' if project name is valid", () => {
      const result = projectNameValidator("valid-project_name");

      expect(result).toBe(true);
    });

    it("should return message if project name is invalid", () => {
      const expectedMessage =
        "Project name may only include letters, numbers, underscores and dashes";
      const result = projectNameValidator("invalid project_name");

      expect(result).toEqual(expectedMessage);
    });
  });
});
