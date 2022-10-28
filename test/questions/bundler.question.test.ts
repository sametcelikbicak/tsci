import inquirer from "inquirer";
import { describe, expect, it, vi } from "vitest";
import { bundlerQuestionAsync } from "../../src/questions/index.js";

vi.mock("inquirer", () => {
  return {
    default: {
      prompt: vi.fn(),
    },
  };
});

describe("bundlerQuestionAsync", () => {
  it("shoudl defined", () => {
    expect(bundlerQuestionAsync).toBeDefined();
  });

  it("should calls inquirer.prompt once", async () => {
    await bundlerQuestionAsync();

    expect(inquirer.prompt).toHaveBeenCalledOnce();
  });
});
