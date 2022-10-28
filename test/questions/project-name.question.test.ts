import inquirer from "inquirer";
import { describe, expect, it, vi } from "vitest";
import { projectNameQuestionAsync } from "../../src/questions/index.js";

vi.mock("inquirer", () => {
  return {
    default: {
      prompt: vi.fn(),
    },
  };
});

describe("projectNameQuestionAsync", () => {
  it("shoudl defined", () => {
    expect(projectNameQuestionAsync).toBeDefined();
  });

  it("should calls inquirer.prompt once", async () => {
    await projectNameQuestionAsync();

    expect(inquirer.prompt).toHaveBeenCalledOnce();
  });
});
