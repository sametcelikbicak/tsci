import chalk from "chalk";
import inquirer from "inquirer";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  SpyInstance,
  it,
  vi,
  test,
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
      const expectedMessage = chalk.red(
        "Project name may only include letters, numbers, underscores and dashes.\n" +
          "Project name should be start with letters.",
      );
      const result = projectNameValidator("invalid project_name");

      expect(result).toEqual(expectedMessage);
    });

    test.each([
      "invalid project_name",
      "1invalid_project name",
      " invalid project_name",
      "_invalid_project_name",
      "-invalid_project_name",
      "12345",
    ])(
      "should return message if project name is invalid",
      (invalidProjectName: string) => {
        const expectedMessage = chalk.red(
          "Project name may only include letters, numbers, underscores and dashes.\n" +
            "Project name should be start with letters.",
        );
        const result = projectNameValidator(invalidProjectName);

        expect(result).toEqual(expectedMessage);
      },
    );
  });
});
