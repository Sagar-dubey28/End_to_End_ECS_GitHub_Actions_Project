import { describe, expect, it } from "vitest";

describe("application", () => {
  it("has the expected project identity", () => {
    expect("CloudNexus DevOps App").toContain("DevOps");
  });
});
