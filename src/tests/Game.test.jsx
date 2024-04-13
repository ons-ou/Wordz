import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import Game from "../components/Game";
import useWord from "../hooks/useWord";

describe("Game Components", () => {
  it("should be created", () => {
    render(<Game />);
    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("should generate a word", async () => {
    const { result, waitFor } = renderHook(() => useWord());
    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
      expect(result.current.word.length).toBe(5);
      expect(result.current.word).not.toBe("");
    });
  });
});
